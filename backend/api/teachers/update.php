<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

require_once '../config/Database.php';
require_once '../middleware/auth_middleware.php';

// Check authentication
if (!isAuthenticated()) {
    http_response_code(401);
    echo json_encode(['success' => false, 'message' => 'Unauthorized']);
    exit;
}

try {
    // Get form data
    $id = $_POST['id'] ?? '';
    $full_name = $_POST['full_name'] ?? '';
    $department = $_POST['department'] ?? '';
    $position = $_POST['position'] ?? '';
    $qualification = $_POST['qualification'] ?? '';
    $experience_years = $_POST['experience_years'] ?? null;
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $bio = $_POST['bio'] ?? '';
    $specialization = $_POST['specialization'] ?? '';
    
    // Validate required fields
    if (empty($id) || empty($full_name) || empty($department)) {
        throw new Exception('ID, name and department are required');
    }
    
    // Validate department
    $validDepartments = ['administration', 'english', 'mathematics', 'science', 'social'];
    if (!in_array($department, $validDepartments)) {
        throw new Exception('Invalid department');
    }
    
    $database = new Database();
    $db = $database->getConnection();
    
    // Get current teacher data
    $stmt = $db->prepare("SELECT photo_url FROM teachers WHERE id = :id");
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $currentTeacher = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if (!$currentTeacher) {
        throw new Exception('Teacher not found');
    }
    
    $photoUrl = $currentTeacher['photo_url'];
    
    // Handle photo upload
    if (isset($_FILES['photo']) && $_FILES['photo']['error'] === UPLOAD_ERR_OK) {
        $file = $_FILES['photo'];
        $allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
        
        if (!in_array($file['type'], $allowedTypes)) {
            throw new Exception('Invalid file type. Only JPG, PNG, GIF, and WEBP are allowed');
        }
        
        // Check file size (100MB max)
        $maxSize = 100 * 1024 * 1024;
        if ($file['size'] > $maxSize) {
            throw new Exception('File size exceeds 100MB limit');
        }
        
        // Create upload directory
        $uploadDir = __DIR__ . '/../../uploads/teachers/';
        if (!file_exists($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }
        
        // Generate unique filename
        $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
        $filename = 'teacher_' . time() . '_' . uniqid() . '.' . $extension;
        $uploadPath = $uploadDir . $filename;
        
        // Move uploaded file
        if (!move_uploaded_file($file['tmp_name'], $uploadPath)) {
            throw new Exception('Failed to save uploaded photo');
        }
        
        // Delete old photo if exists
        if ($photoUrl && file_exists(__DIR__ . '/../../' . $photoUrl)) {
            unlink(__DIR__ . '/../../' . $photoUrl);
        }
        
        $photoUrl = 'uploads/teachers/' . $filename;
    }
    
    // Update database
    $stmt = $db->prepare("
        UPDATE teachers 
        SET full_name = :full_name,
            department = :department,
            position = :position,
            qualification = :qualification,
            experience_years = :experience_years,
            email = :email,
            phone = :phone,
            photo_url = :photo_url,
            bio = :bio,
            specialization = :specialization
        WHERE id = :id
    ");
    
    $stmt->bindParam(':id', $id);
    $stmt->bindParam(':full_name', $full_name);
    $stmt->bindParam(':department', $department);
    $stmt->bindParam(':position', $position);
    $stmt->bindParam(':qualification', $qualification);
    $stmt->bindParam(':experience_years', $experience_years);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':phone', $phone);
    $stmt->bindParam(':photo_url', $photoUrl);
    $stmt->bindParam(':bio', $bio);
    $stmt->bindParam(':specialization', $specialization);
    
    if ($stmt->execute()) {
        echo json_encode([
            'success' => true,
            'message' => 'Teacher updated successfully!'
        ]);
    } else {
        throw new Exception('Failed to update database');
    }
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Error: ' . $e->getMessage()
    ]);
}
