<?php
// Disable all error output to prevent HTML in JSON response
error_reporting(0);
ini_set('display_errors', 0);

// Start output buffering to catch any errors
ob_start();

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

require_once '../config/Database.php';
require_once '../middleware/auth_middleware.php';

// Clear any output that might have been generated
if (ob_get_length()) ob_clean();

// Check authentication
if (!isAuthenticated()) {
    ob_clean();
    http_response_code(401);
    echo json_encode(['success' => false, 'message' => 'Unauthorized']);
    ob_end_flush();
    exit;
}

try {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (empty($data['id']) || empty($data['status'])) {
        throw new Exception('Application ID and status are required');
    }
    
    $validStatuses = ['pending', 'under_review', 'accepted', 'rejected', 'waitlist'];
    if (!in_array($data['status'], $validStatuses)) {
        throw new Exception('Invalid status');
    }
    
    $database = new Database();
    $db = $database->getConnection();
    
    // Get application details
    $stmt = $db->prepare("SELECT * FROM admission_applications WHERE id = :id");
    $stmt->bindParam(':id', $data['id']);
    $stmt->execute();
    $application = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if (!$application) {
        throw new Exception('Application not found');
    }
    
    // Update status
    $currentUser = getCurrentUser();
    $reviewNotes = $data['notes'] ?? '';
    $userId = $currentUser['user_id'] ?? null;
    
    $stmt = $db->prepare("
        UPDATE admission_applications 
        SET status = :status, 
            reviewed_by = :reviewed_by, 
            review_date = NOW(),
            review_notes = :review_notes
        WHERE id = :id
    ");
    
    $stmt->bindParam(':status', $data['status']);
    $stmt->bindParam(':reviewed_by', $userId);
    $stmt->bindParam(':review_notes', $reviewNotes);
    $stmt->bindParam(':id', $data['id']);
    
    if (!$stmt->execute()) {
        throw new Exception('Failed to update status');
    }
    
    // Send email notification
    $emailStatus = 'No email to send';
    if (!empty($application['parent_email'])) {
        try {
            // Load PHPMailer and Email class
            require_once '../../vendor/autoload.php';
            require_once '../config/Email.php';
            
            // Log email attempt
            error_log("Attempting to send email to: " . $application['parent_email']);
            
            $email = new Email();
            $parentName = $application['parent_first_name'] . ' ' . $application['parent_last_name'];
            $studentName = $application['student_first_name'] . ' ' . $application['student_last_name'];
            
            $statusMessages = [
                'accepted' => [
                    'subject' => 'Admission Accepted - ' . $application['application_id'],
                    'message' => "
                        <div style='background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; text-align: center; border-radius: 10px; margin-bottom: 30px;'>
                            <h2 style='color: white; font-size: 28px; margin: 0; font-weight: 700;'>CONGRATULATIONS!</h2>
                            <p style='color: white; font-size: 16px; margin: 10px 0 0 0;'>Admission Accepted</p>
                        </div>
                        
                        <p style='font-size: 16px; color: #1a1a1a; margin-bottom: 20px;'>Dear <strong>{$parentName}</strong>,</p>
                        
                        <p style='color: #4a5568; line-height: 1.7; margin-bottom: 20px;'>
                            We are delighted to inform you that <strong>{$studentName}</strong>'s application for admission to <strong>{$application['class_to_join']}</strong> has been <strong style='color: #10b981;'>ACCEPTED</strong>!
                        </p>
                        
                        <div style='background: #f0fdf4; border-left: 4px solid #10b981; padding: 20px; margin: 25px 0; border-radius: 8px;'>
                            <p style='margin: 0 0 10px 0; color: #065f46;'><strong>Application ID:</strong> {$application['application_id']}</p>
                            <p style='margin: 0; color: #065f46;'><strong>Class:</strong> {$application['class_to_join']}</p>
                        </div>
                        
                        <p style='color: #4a5568; line-height: 1.7; margin-bottom: 20px;'>
                            Welcome to the St. Lawrence family! Our admissions team will contact you within 24-48 hours with:
                        </p>
                        
                        <ul style='color: #4a5568; line-height: 1.7; margin-bottom: 20px;'>
                            <li>Enrollment procedures</li>
                            <li>Fee payment details</li>
                            <li>School start date</li>
                            <li>Required documents</li>
                        </ul>
                        
                        " . ($reviewNotes ? "
                        <div style='background: #eff6ff; border-left: 4px solid #3b82f6; padding: 20px; margin: 25px 0; border-radius: 8px;'>
                            <p style='margin: 0 0 10px 0; color: #1e40af; font-weight: 600;'>Additional Notes:</p>
                            <p style='margin: 0; color: #1e3a8a;'>{$reviewNotes}</p>
                        </div>
                        " : "") . "
                        
                        <p style='color: #4a5568; line-height: 1.7;'>
                            If you have any questions, please don't hesitate to contact us.
                        </p>
                    "
                ],
                'rejected' => [
                    'subject' => 'Admission Application Update - ' . $application['application_id'],
                    'message' => "
                        <div style='background: #f3f4f6; padding: 30px; text-align: center; border-radius: 10px; margin-bottom: 30px; border: 2px solid #d1d5db;'>
                            <h2 style='color: #374151; font-size: 24px; margin: 0; font-weight: 700;'>Application Update</h2>
                            <p style='color: #6b7280; font-size: 14px; margin: 10px 0 0 0;'>Application {$application['application_id']}</p>
                        </div>
                        
                        <p style='font-size: 16px; color: #1a1a1a; margin-bottom: 20px;'>Dear <strong>{$parentName}</strong>,</p>
                        
                        <p style='color: #4a5568; line-height: 1.7; margin-bottom: 20px;'>
                            Thank you for your interest in St. Lawrence Junior School - Kabowa.
                        </p>
                        
                        <p style='color: #4a5568; line-height: 1.7; margin-bottom: 20px;'>
                            After careful consideration, we regret to inform you that we are unable to offer admission to <strong>{$studentName}</strong> for <strong>{$application['class_to_join']}</strong> at this time.
                        </p>
                        
                        <div style='background: #fef2f2; border-left: 4px solid #dc3545; padding: 20px; margin: 25px 0; border-radius: 8px;'>
                            <p style='margin: 0; color: #7f1d1d;'><strong>Application ID:</strong> {$application['application_id']}</p>
                        </div>
                        
                        " . ($reviewNotes ? "
                        <div style='background: #f8f9fa; border-left: 4px solid #6b7280; padding: 20px; margin: 25px 0; border-radius: 8px;'>
                            <p style='margin: 0 0 10px 0; color: #374151; font-weight: 600;'>Additional Information:</p>
                            <p style='margin: 0; color: #4a5568;'>{$reviewNotes}</p>
                        </div>
                        " : "") . "
                        
                        <p style='color: #4a5568; line-height: 1.7; margin-bottom: 20px;'>
                            We appreciate your understanding and wish <strong>{$studentName}</strong> all the best in their educational journey.
                        </p>
                        
                        <p style='color: #4a5568; line-height: 1.7;'>
                            You are welcome to reapply in future admission cycles.
                        </p>
                    "
                ],
                'waitlist' => [
                    'subject' => 'Application Waitlisted - ' . $application['application_id'],
                    'message' => "
                        <div style='background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); padding: 30px; text-align: center; border-radius: 10px; margin-bottom: 30px;'>
                            <h2 style='color: white; font-size: 28px; margin: 0; font-weight: 700;'>APPLICATION WAITLISTED</h2>
                            <p style='color: white; font-size: 16px; margin: 10px 0 0 0;'>You're on our priority list</p>
                        </div>
                        
                        <p style='font-size: 16px; color: #1a1a1a; margin-bottom: 20px;'>Dear <strong>{$parentName}</strong>,</p>
                        
                        <p style='color: #4a5568; line-height: 1.7; margin-bottom: 20px;'>
                            Thank you for applying to St. Lawrence Junior School - Kabowa.
                        </p>
                        
                        <p style='color: #4a5568; line-height: 1.7; margin-bottom: 20px;'>
                            We would like to inform you that <strong>{$studentName}</strong>'s application for <strong>{$application['class_to_join']}</strong> has been placed on our <strong style='color: #f59e0b;'>WAITLIST</strong>.
                        </p>
                        
                        <div style='background: #fffbeb; border-left: 4px solid #f59e0b; padding: 20px; margin: 25px 0; border-radius: 8px;'>
                            <p style='margin: 0 0 10px 0; color: #78350f;'><strong>Application ID:</strong> {$application['application_id']}</p>
                            <p style='margin: 0; color: #78350f;'><strong>Class:</strong> {$application['class_to_join']}</p>
                        </div>
                        
                        <div style='background: #eff6ff; padding: 20px; margin: 25px 0; border-radius: 8px;'>
                            <p style='margin: 0 0 15px 0; color: #1e40af; font-weight: 600;'>What This Means:</p>
                            <p style='margin: 0; color: #1e3a8a; line-height: 1.7;'>
                                While we were impressed with the application, we currently do not have available spaces. We will contact you immediately if a space becomes available.
                            </p>
                        </div>
                        
                        " . ($reviewNotes ? "
                        <div style='background: #f8f9fa; border-left: 4px solid #6366f1; padding: 20px; margin: 25px 0; border-radius: 8px;'>
                            <p style='margin: 0 0 10px 0; color: #4338ca; font-weight: 600;'>Additional Information:</p>
                            <p style='margin: 0; color: #4a5568;'>{$reviewNotes}</p>
                        </div>
                        " : "") . "
                        
                        <p style='color: #4a5568; line-height: 1.7;'>
                            Thank you for your patience and understanding. Please ensure your contact information is up to date.
                        </p>
                    "
                ],
                'under_review' => [
                    'subject' => 'Application Under Review - ' . $application['application_id'],
                    'message' => "
                        <div style='background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%); padding: 30px; text-align: center; border-radius: 10px; margin-bottom: 30px;'>
                            <h2 style='color: white; font-size: 28px; margin: 0; font-weight: 700;'>UNDER REVIEW</h2>
                            <p style='color: white; font-size: 16px; margin: 10px 0 0 0;'>We're reviewing your application</p>
                        </div>
                        
                        <p style='font-size: 16px; color: #1a1a1a; margin-bottom: 20px;'>Dear <strong>{$parentName}</strong>,</p>
                        
                        <p style='color: #4a5568; line-height: 1.7; margin-bottom: 20px;'>
                            This is to inform you that <strong>{$studentName}</strong>'s application for <strong>{$application['class_to_join']}</strong> is currently <strong style='color: #0066cc;'>UNDER REVIEW</strong>.
                        </p>
                        
                        <div style='background: #eff6ff; border-left: 4px solid #0066cc; padding: 20px; margin: 25px 0; border-radius: 8px;'>
                            <p style='margin: 0 0 10px 0; color: #1e3a8a;'><strong>Application ID:</strong> {$application['application_id']}</p>
                            <p style='margin: 0; color: #1e3a8a;'><strong>Class:</strong> {$application['class_to_join']}</p>
                        </div>
                        
                        <p style='color: #4a5568; line-height: 1.7; margin-bottom: 20px;'>
                            Our admissions team is carefully reviewing the application. We will notify you of our decision within <strong>5 working days</strong>.
                        </p>
                        
                        " . ($reviewNotes ? "
                        <div style='background: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 25px 0; border-radius: 8px;'>
                            <p style='margin: 0 0 10px 0; color: #92400e; font-weight: 600;'>Notes:</p>
                            <p style='margin: 0; color: #78350f;'>{$reviewNotes}</p>
                        </div>
                        " : "") . "
                        
                        <p style='color: #4a5568; line-height: 1.7;'>
                            Thank you for your patience.
                        </p>
                    "
                ]
            ];
            
            if (isset($statusMessages[$data['status']])) {
                $emailData = $statusMessages[$data['status']];
                $emailSent = $email->sendEmail(
                    $application['parent_email'],
                    $emailData['subject'],
                    $emailData['message']
                );
                
                // Log result
                if ($emailSent) {
                    error_log("Email sent successfully to: " . $application['parent_email']);
                    $emailStatus = 'Email sent successfully';
                } else {
                    error_log("Email failed to send to: " . $application['parent_email']);
                    $emailStatus = 'Email failed to send';
                }
            }
        } catch (Exception $emailError) {
            // Log email error but don't fail the status update
            error_log('Email sending failed: ' . $emailError->getMessage());
            $emailStatus = 'Email error: ' . $emailError->getMessage();
        }
    } else {
        error_log("No parent email found for application ID: " . $data['id']);
        $emailStatus = 'No parent email found';
    }
    
    // Clear output buffer and send JSON
    ob_clean();
    echo json_encode([
        'success' => true,
        'message' => 'Status updated successfully!',
        'email_status' => $emailStatus
    ]);
    ob_end_flush();
    
} catch (Exception $e) {
    // Clear any output buffer
    if (ob_get_length()) ob_clean();
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Error: ' . $e->getMessage()
    ]);
    ob_end_flush();
}
