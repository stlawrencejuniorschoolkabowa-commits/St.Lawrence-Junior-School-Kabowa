-- Create messages table only (admission_applications already exists)
CREATE TABLE IF NOT EXISTS `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sender_name` varchar(255) NOT NULL,
  `sender_email` varchar(255) NOT NULL,
  `sender_phone` varchar(20) DEFAULT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `is_read` tinyint(1) DEFAULT 0,
  `replied` tinyint(1) DEFAULT 0,
  `reply_message` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Insert sample messages for testing
INSERT INTO `messages` (`sender_name`, `sender_email`, `subject`, `message`, `is_read`) VALUES
('Alice Johnson', 'alice@email.com', 'Inquiry about admission', 'I would like to know more about the admission process for my child.', 0),
('Bob Brown', 'bob@email.com', 'School fees inquiry', 'What are the current school fees for Primary 3?', 0),
('Carol Davis', 'carol@email.com', 'Transport services', 'Do you provide transport services from Kampala?', 1),
('Daniel Miller', 'daniel@email.com', 'Uniform requirements', 'What are the uniform requirements for new students?', 0),
('Emma Wilson', 'emma@email.com', 'Extra-curricular activities', 'What extra-curricular activities do you offer?', 0);