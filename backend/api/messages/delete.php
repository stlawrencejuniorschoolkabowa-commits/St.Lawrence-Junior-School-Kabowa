<?php
// Disable all error output to prevent HTML in JSON response
error_reporting(0);
ini_set('display_errors', 0);

// Start output buffering to catch any errors
ob_start();

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

require_once '../config/Database.php';
require_once '../middleware/auth_middleware.php';

// Clear any output that might have been generated
if (ob_get_length()) ob_clean();

// Check authentication
if (!isAuthenticated()) {
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
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (empty($data['id'])) {
        throw new Exception('Message ID is required');
    }
    
    $database = new Database();
    $db = $database->getConnection();
    
    // Delete the message
    $stmt = $db->prepare("DELETE FROM contact_submissions WHERE id = :id");
    $stmt->bindParam(':id', $data['id']);
    
    if ($stmt->execute()) {
        // Clear any output buffer before sending JSON
        if (ob_get_length()) ob_clean();
        
        echo json_encode([
            'success' => true,
            'message' => 'Message deleted successfully'
        ]);
        
        ob_end_flush();
    } else {
        throw new Exception('Failed to delete message');
    }
    
} catch (Exception $e) {
    if (ob_get_length()) ob_clean();
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
    ob_end_flush();
}
