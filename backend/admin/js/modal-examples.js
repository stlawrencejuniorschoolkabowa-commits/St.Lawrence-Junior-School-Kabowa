/**
 * Modal Manager - Quick Examples for Dashboard
 * Copy and paste these examples into your dashboard code
 */

// ============================================
// EXAMPLE 1: Simple Success Message
// ============================================
function showSuccessMessage() {
    ModalManager.show({
        title: 'Success!',
        content: 'Your changes have been saved successfully.',
        type: 'success'
    });
}

// ============================================
// EXAMPLE 2: Delete Confirmation
// ============================================
function confirmDelete(itemId, itemName) {
    ModalManager.confirm({
        title: 'Delete Item?',
        content: `Are you sure you want to delete "${itemName}"? This action cannot be undone.`,
        type: 'warning',
        confirmText: 'Yes, Delete',
        cancelText: 'Cancel',
        confirmColor: '#dc3545',
        onConfirm: () => {
            // Make API call to delete
            fetch(`../api/items/delete.php?id=${itemId}`, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    ModalManager.toast({
                        type: 'success',
                        title: 'Item deleted successfully'
                    });
                    // Refresh the list
                    loadItems();
                } else {
                    ModalManager.show({
                        title: 'Error',
                        content: data.message || 'Failed to delete item',
                        type: 'error'
                    });
                }
            })
            .catch(error => {
                ModalManager.show({
                    title: 'Error',
                    content: 'An error occurred while deleting the item',
                    type: 'error'
                });
            });
        }
    });
}

// ============================================
// EXAMPLE 3: Add New User Form
// ============================================
function showAddUserForm() {
    ModalManager.form({
        title: 'Add New User',
        width: '700px',
        fields: [
            {
                name: 'fullName',
                label: 'Full Name',
                type: 'text',
                placeholder: 'Enter full name',
                required: true
            },
            {
                name: 'email',
                label: 'Email Address',
                type: 'email',
                placeholder: 'user@example.com',
                required: true,
                validate: (value) => {
                    if (!value.includes('@')) {
                        return 'Please enter a valid email address';
                    }
                    return true;
                }
            },
            {
                name: 'role',
                label: 'User Role',
                type: 'select',
                required: true,
                placeholder: 'Select a role',
                options: [
                    { value: 'admin', label: 'Administrator' },
                    { value: 'editor', label: 'Editor' },
                    { value: 'viewer', label: 'Viewer' }
                ]
            },
            {
                name: 'password',
                label: 'Password',
                type: 'password',
                placeholder: 'Enter password',
                required: true,
                help: 'Password must be at least 8 characters',
                validate: (value) => {
                    if (value.length < 8) {
                        return 'Password must be at least 8 characters';
                    }
                    return true;
                }
            },
            {
                name: 'active',
                label: 'Account Status',
                type: 'checkbox',
                checkboxLabel: 'Active account',
                value: true
            }
        ],
        submitText: 'Create User',
        onSubmit: (formData) => {
            const loader = ModalManager.loading({
                title: 'Creating User...',
                message: 'Please wait while we create the user account.'
            });
            
            fetch('../api/users/create.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                loader.close();
                
                if (data.success) {
                    ModalManager.toast({
                        type: 'success',
                        title: 'User created successfully!'
                    });
                    // Refresh user list
                    loadUsers();
                } else {
                    ModalManager.show({
                        title: 'Error',
                        content: data.message || 'Failed to create user',
                        type: 'error'
                    });
                }
            })
            .catch(error => {
                loader.close();
                ModalManager.show({
                    title: 'Error',
                    content: 'An error occurred while creating the user',
                    type: 'error'
                });
            });
        }
    });
}

// ============================================
// EXAMPLE 4: Edit User Form (with existing data)
// ============================================
function showEditUserForm(userId) {
    // First, fetch user data
    const loader = ModalManager.loading({
        title: 'Loading...',
        message: 'Fetching user data...'
    });
    
    fetch(`../api/users/get.php?id=${userId}`)
        .then(response => response.json())
        .then(data => {
            loader.close();
            
            if (data.success) {
                const user = data.user;
                
                ModalManager.form({
                    title: 'Edit User',
                    width: '700px',
                    fields: [
                        {
                            name: 'fullName',
                            label: 'Full Name',
                            type: 'text',
                            value: user.full_name,
                            required: true
                        },
                        {
                            name: 'email',
                            label: 'Email Address',
                            type: 'email',
                            value: user.email,
                            required: true
                        },
                        {
                            name: 'role',
                            label: 'User Role',
                            type: 'select',
                            value: user.role,
                            required: true,
                            options: [
                                { value: 'admin', label: 'Administrator' },
                                { value: 'editor', label: 'Editor' },
                                { value: 'viewer', label: 'Viewer' }
                            ]
                        },
                        {
                            name: 'active',
                            label: 'Account Status',
                            type: 'checkbox',
                            checkboxLabel: 'Active account',
                            value: user.active === '1'
                        }
                    ],
                    submitText: 'Update User',
                    onSubmit: (formData) => {
                        const updateLoader = ModalManager.loading({
                            title: 'Updating...',
                            message: 'Saving changes...'
                        });
                        
                        fetch(`../api/users/update.php?id=${userId}`, {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(formData)
                        })
                        .then(response => response.json())
                        .then(data => {
                            updateLoader.close();
                            
                            if (data.success) {
                                ModalManager.toast({
                                    type: 'success',
                                    title: 'User updated successfully!'
                                });
                                loadUsers();
                            } else {
                                ModalManager.show({
                                    title: 'Error',
                                    content: data.message || 'Failed to update user',
                                    type: 'error'
                                });
                            }
                        });
                    }
                });
            }
        });
}

// ============================================
// EXAMPLE 5: View Details Modal
// ============================================
function showUserDetails(userId) {
    fetch(`../api/users/get.php?id=${userId}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const user = data.user;
                
                ModalManager.custom({
                    title: 'User Details',
                    width: '700px',
                    content: `
                        <div style="padding: 20px;">
                            <div style="display: flex; gap: 20px; margin-bottom: 30px;">
                                <div style="width: 100px; height: 100px; border-radius: 50%; background: linear-gradient(135deg, #0066cc, #0052a3); display: flex; align-items: center; justify-content: center; color: white; font-size: 36px; font-weight: 700;">
                                    ${user.full_name.charAt(0)}
                                </div>
                                <div style="flex: 1;">
                                    <h3 style="margin: 0 0 10px 0; font-size: 24px;">${user.full_name}</h3>
                                    <p style="margin: 5px 0; color: #666;"><i class="fas fa-envelope"></i> ${user.email}</p>
                                    <p style="margin: 5px 0; color: #666;"><i class="fas fa-user-tag"></i> ${user.role}</p>
                                    <p style="margin: 5px 0; color: #666;"><i class="fas fa-calendar"></i> Joined: ${user.created_at}</p>
                                </div>
                            </div>
                            
                            <div style="background: #f8f9fa; padding: 20px; border-radius: 12px;">
                                <h4 style="margin: 0 0 15px 0;">Account Information</h4>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                                    <div>
                                        <strong>Status:</strong>
                                        <span style="margin-left: 10px; padding: 4px 12px; background: ${user.active === '1' ? '#10b981' : '#dc3545'}; color: white; border-radius: 20px; font-size: 12px;">
                                            ${user.active === '1' ? 'Active' : 'Inactive'}
                                        </span>
                                    </div>
                                    <div>
                                        <strong>Last Login:</strong> ${user.last_login || 'Never'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `,
                    buttons: [
                        {
                            text: 'Edit User',
                            icon: 'fas fa-edit',
                            style: 'background: #0066cc; color: white; padding: 12px 24px; border-radius: 8px;',
                            onClick: () => {
                                showEditUserForm(userId);
                            }
                        },
                        {
                            text: 'Delete User',
                            icon: 'fas fa-trash',
                            style: 'background: #dc3545; color: white; padding: 12px 24px; border-radius: 8px;',
                            onClick: () => {
                                confirmDelete(userId, user.full_name);
                            }
                        },
                        {
                            text: 'Close',
                            style: 'background: #6c757d; color: white; padding: 12px 24px; border-radius: 8px;',
                            onClick: () => {}
                        }
                    ]
                });
            }
        });
}

// ============================================
// EXAMPLE 6: Quick Toast Notifications
// ============================================
function showToastExamples() {
    // Success toast
    ModalManager.toast({
        type: 'success',
        title: 'Changes saved successfully!'
    });
    
    // Error toast
    ModalManager.toast({
        type: 'error',
        title: 'Failed to save changes',
        timer: 5000
    });
    
    // Info toast
    ModalManager.toast({
        type: 'info',
        title: 'New notification received',
        position: 'bottom-end'
    });
    
    // Warning toast
    ModalManager.toast({
        type: 'warning',
        title: 'Please review your changes'
    });
}

// ============================================
// EXAMPLE 7: File Upload with Progress
// ============================================
function uploadFileWithProgress(file) {
    const loader = ModalManager.loading({
        title: 'Uploading File...',
        message: 'Please wait while we upload your file.'
    });
    
    const formData = new FormData();
    formData.append('file', file);
    
    fetch('../api/upload.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        loader.close();
        
        if (data.success) {
            ModalManager.toast({
                type: 'success',
                title: 'File uploaded successfully!'
            });
        } else {
            ModalManager.show({
                title: 'Upload Failed',
                content: data.message || 'Failed to upload file',
                type: 'error'
            });
        }
    })
    .catch(error => {
        loader.close();
        ModalManager.show({
            title: 'Upload Error',
            content: 'An error occurred during file upload',
            type: 'error'
        });
    });
}

// ============================================
// EXAMPLE 8: Multi-Select Form
// ============================================
function showMultiSelectForm() {
    ModalManager.form({
        title: 'Assign Permissions',
        fields: [
            {
                name: 'user',
                label: 'Select User',
                type: 'select',
                required: true,
                options: [
                    { value: '1', label: 'John Doe' },
                    { value: '2', label: 'Jane Smith' },
                    { value: '3', label: 'Bob Johnson' }
                ]
            },
            {
                name: 'canView',
                label: 'Permissions',
                type: 'checkbox',
                checkboxLabel: 'Can view content'
            },
            {
                name: 'canEdit',
                label: '',
                type: 'checkbox',
                checkboxLabel: 'Can edit content'
            },
            {
                name: 'canDelete',
                label: '',
                type: 'checkbox',
                checkboxLabel: 'Can delete content'
            }
        ],
        submitText: 'Save Permissions',
        onSubmit: (formData) => {
            console.log('Permissions:', formData);
            ModalManager.toast({
                type: 'success',
                title: 'Permissions updated!'
            });
        }
    });
}

// ============================================
// HOW TO USE IN YOUR DASHBOARD
// ============================================

/*
1. Add a button in your HTML:
   <button onclick="showAddUserForm()">Add User</button>

2. Or call from existing functions:
   function handleAddUser() {
       showAddUserForm();
   }

3. Replace existing SweetAlert calls:
   OLD: Swal.fire({ title: 'Success', text: 'Done!' });
   NEW: ModalManager.show({ title: 'Success', content: 'Done!', type: 'success' });

4. For confirmations:
   OLD: if (confirm('Delete?')) { deleteItem(); }
   NEW: ModalManager.confirm({
           title: 'Delete?',
           onConfirm: () => deleteItem()
       });
*/
