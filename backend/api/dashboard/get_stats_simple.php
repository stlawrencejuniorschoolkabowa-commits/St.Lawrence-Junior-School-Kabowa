<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

require_once '../config/Database.php';
require_once '../middleware/auth_middleware.php';

// Check authentication
$auth = check_auth();
if (!$auth['authenticated']) {
    http_response_code(401);
    echo json_encode([
        'success' => false,
        'message' => 'Unauthorized'
    ]);
    exit;
}

try {
    $database = new Database();
    $db = $database->getConnection();
    
    $stats = [];
    
    // Get teachers count
    try {
        $stmt = $db->prepare("SELECT COUNT(*) as total FROM teachers");
        $stmt->execute();
        $stats['total_teachers'] = (int)$stmt->fetch(PDO::FETCH_ASSOC)['total'];
    } catch (PDOException $e) {
        $stats['total_teachers'] = 0;
    }
    
    // Get contact submissions (unread messages)
    try {
        $stmt = $db->prepare("SELECT COUNT(*) as total FROM contact_submissions WHERE status = 'new'");
        $stmt->execute();
        $stats['unread_messages'] = (int)$stmt->fetch(PDO::FETCH_ASSOC)['total'];
    } catch (PDOException $e) {
        $stats['unread_messages'] = 0;
    }
    
    // Get admission applications
    try {
        $stmt = $db->prepare("SELECT COUNT(*) as total FROM admission_applications");
        $stmt->execute();
        $stats['admissions_count'] = (int)$stmt->fetch(PDO::FETCH_ASSOC)['total'];
    } catch (PDOException $e) {
        $stats['admissions_count'] = 0;
    }
    
    // Get events count
    try {
        $stmt = $db->prepare("SELECT COUNT(*) as total FROM events");
        $stmt->execute();
        $stats['events_count'] = (int)$stmt->fetch(PDO::FETCH_ASSOC)['total'];
    } catch (PDOException $e) {
        $stats['events_count'] = 0;
    }
    
    echo json_encode([
        'success' => true,
        'data' => $stats
    ]);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Database error: ' . $e->getMessage()
    ]);
}
?>