<?php
// Disable all error output to prevent HTML in JSON response
error_reporting(0);
ini_set('display_errors', 0);

// Start output buffering to catch any errors
ob_start();

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

require_once '../config/Database.php';
require_once '../middleware/auth_middleware.php';

// Clear any output that might have been generated
if (ob_get_length()) ob_clean();

// Check authentication
$auth = check_auth();
if (!$auth['authenticated']) {
    ob_clean();
    http_response_code(401);
    echo json_encode([
        'success' => false,
        'message' => 'Unauthorized'
    ]);
    ob_end_flush();
    exit;
}

try {
    $database = new Database();
    $db = $database->getConnection();
    
    // Get total students count
    $stmt = $db->prepare("SELECT COUNT(*) as total FROM students WHERE status = 'active'");
    $stmt->execute();
    $totalStudents = $stmt->fetch(PDO::FETCH_ASSOC)['total'];
    
    // Get new students this month
    $stmt = $db->prepare("SELECT COUNT(*) as new_students FROM students 
                          WHERE status = 'active' 
                          AND DATE_FORMAT(created_at, '%Y-%m') = DATE_FORMAT(NOW(), '%Y-%m')");
    $stmt->execute();
    $newStudents = $stmt->fetch(PDO::FETCH_ASSOC)['new_students'];
    
    // Get total teachers count (check if status column exists, if not count all)
    try {
        $stmt = $db->prepare("SELECT COUNT(*) as total FROM teachers WHERE status = 'active'");
        $stmt->execute();
        $totalTeachers = $stmt->fetch(PDO::FETCH_ASSOC)['total'];
        error_log("Teachers count (active): " . $totalTeachers);
    } catch (PDOException $e) {
        // If status column doesn't exist, count all teachers
        $stmt = $db->prepare("SELECT COUNT(*) as total FROM teachers");
        $stmt->execute();
        $totalTeachers = $stmt->fetch(PDO::FETCH_ASSOC)['total'];
        error_log("Teachers count (all): " . $totalTeachers);
    }
    
    // Get inactive teachers
    try {
        $stmt = $db->prepare("SELECT COUNT(*) as inactive FROM teachers WHERE status = 'inactive'");
        $stmt->execute();
        $inactiveTeachers = $stmt->fetch(PDO::FETCH_ASSOC)['inactive'];
    } catch (PDOException $e) {
        // If status column doesn't exist, set to 0
        $inactiveTeachers = 0;
    }
    
    // Get today's attendance rate
    $stmt = $db->prepare("
        SELECT 
            COUNT(DISTINCT student_id) as present_count,
            (SELECT COUNT(*) FROM students WHERE status = 'active') as total_students
        FROM attendance 
        WHERE DATE(attendance_date) = CURDATE() 
        AND status = 'present'
    ");
    $stmt->execute();
    $attendanceData = $stmt->fetch(PDO::FETCH_ASSOC);
    $attendanceRate = $attendanceData['total_students'] > 0 
        ? round(($attendanceData['present_count'] / $attendanceData['total_students']) * 100, 1) 
        : 0;
    $absentCount = $attendanceData['total_students'] - $attendanceData['present_count'];
    
    // Get this month's revenue
    $stmt = $db->prepare("
        SELECT 
            COALESCE(SUM(amount_paid), 0) as total_revenue,
            COUNT(*) as payment_count
        FROM fee_payments 
        WHERE DATE_FORMAT(payment_date, '%Y-%m') = DATE_FORMAT(NOW(), '%Y-%m')
        AND payment_status = 'completed'
    ");
    $stmt->execute();
    $revenueData = $stmt->fetch(PDO::FETCH_ASSOC);
    
    // Get student distribution by class
    $stmt = $db->prepare("
        SELECT 
            c.class_name,
            COUNT(s.student_id) as student_count
        FROM classes c
        LEFT JOIN students s ON c.class_id = s.class_id AND s.status = 'active'
        GROUP BY c.class_id, c.class_name
        ORDER BY c.class_name
    ");
    $stmt->execute();
    $studentDistribution = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Clear any output buffer before sending JSON
    if (ob_get_length()) ob_clean();
    
    echo json_encode([
        'success' => true,
        'data' => [
            'total_students' => (int)$totalStudents,
            'new_students' => (int)$newStudents,
            'total_teachers' => (int)$totalTeachers,
            'inactive_teachers' => (int)$inactiveTeachers,
            'attendance_rate' => (float)$attendanceRate,
            'absent_count' => (int)$absentCount,
            'revenue' => [
                'amount' => (float)$revenueData['total_revenue'],
                'payment_count' => (int)$revenueData['payment_count']
            ],
            'student_distribution' => $studentDistribution
        ]
    ]);
    
    ob_end_flush();
    
} catch (PDOException $e) {
    if (ob_get_length()) ob_clean();
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Database error: ' . $e->getMessage()
    ]);
    ob_end_flush();
}
