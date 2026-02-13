-- Add index on parent_email for better performance when querying multiple children
-- This allows the same parent email to be used for multiple admission applications

USE st_lawrence_school;

-- Add index on parent_email (not unique, allows duplicates)
ALTER TABLE admission_applications 
ADD INDEX idx_parent_email (parent_email);

-- Add index on parent phone for additional parent identification
ALTER TABLE admission_applications 
ADD INDEX idx_parent_phone (parent_phone);

-- Add composite index for parent identification
ALTER TABLE admission_applications 
ADD INDEX idx_parent_info (parent_email, parent_first_name, parent_last_name);

-- This allows efficient queries like:
-- SELECT * FROM admission_applications WHERE parent_email = 'parent@email.com';
-- To find all children of the same parent
