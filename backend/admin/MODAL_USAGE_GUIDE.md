# Modal Manager - Usage Guide

A powerful, flexible modal system that lets you create modals dynamically without hardcoding HTML.

## Installation

Add this script to your HTML file:

```html
<script src="js/modal-manager.js"></script>
```

Make sure SweetAlert2 is loaded before the Modal Manager:

```html
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="js/modal-manager.js"></script>
```

---

## 1. Simple Alert Modal

Display a simple message to the user.

```javascript
ModalManager.show({
    title: 'Success!',
    content: 'Your changes have been saved successfully.',
    type: 'success'
});
```

### Options:
- `title`: Modal title
- `content`: Modal content (HTML supported)
- `type`: Icon type (`success`, `error`, `warning`, `info`, `question`)
- `confirmText`: Button text (default: 'OK')
- `confirmColor`: Button color (default: '#0066cc')
- `width`: Modal width (default: '600px')
- `onConfirm`: Callback function when confirmed

### Example with callback:

```javascript
ModalManager.show({
    title: 'Welcome!',
    content: 'Thank you for logging in.',
    type: 'success',
    confirmText: 'Get Started',
    onConfirm: () => {
        console.log('User clicked Get Started');
        // Navigate or perform action
    }
});
```

---

## 2. Confirmation Modal

Ask the user to confirm an action.

```javascript
ModalManager.confirm({
    title: 'Delete User?',
    content: 'Are you sure you want to delete this user? This action cannot be undone.',
    type: 'warning',
    confirmText: 'Yes, Delete',
    cancelText: 'Cancel',
    onConfirm: () => {
        // Delete the user
        console.log('User deleted');
    },
    onCancel: () => {
        console.log('Deletion cancelled');
    }
});
```

### Options:
- `title`: Modal title
- `content`: Modal content
- `type`: Icon type
- `confirmText`: Confirm button text (default: 'Yes')
- `cancelText`: Cancel button text (default: 'No')
- `confirmColor`: Confirm button color
- `cancelColor`: Cancel button color
- `onConfirm`: Callback when confirmed
- `onCancel`: Callback when cancelled

### Real-world example:

```javascript
function deleteItem(itemId) {
    ModalManager.confirm({
        title: 'Delete Item?',
        content: `Are you sure you want to delete item #${itemId}?`,
        type: 'warning',
        confirmText: 'Yes, Delete',
        confirmColor: '#dc3545',
        onConfirm: () => {
            // Make API call to delete
            fetch(`/api/items/${itemId}`, { method: 'DELETE' })
                .then(response => response.json())
                .then(data => {
                    ModalManager.toast({
                        type: 'success',
                        title: 'Item deleted successfully'
                    });
                });
        }
    });
}
```

---

## 3. Form Modal

Create dynamic forms without writing HTML.

```javascript
ModalManager.form({
    title: 'Add New User',
    width: '700px',
    fields: [
        {
            name: 'username',
            label: 'Username',
            type: 'text',
            placeholder: 'Enter username',
            required: true,
            help: 'Username must be unique'
        },
        {
            name: 'email',
            label: 'Email Address',
            type: 'email',
            placeholder: 'user@example.com',
            required: true,
            validate: (value) => {
                if (!value.includes('@')) {
                    return 'Please enter a valid email';
                }
                return true;
            }
        },
        {
            name: 'role',
            label: 'User Role',
            type: 'select',
            required: true,
            options: [
                { value: 'admin', label: 'Administrator' },
                { value: 'editor', label: 'Editor' },
                { value: 'viewer', label: 'Viewer' }
            ]
        },
        {
            name: 'bio',
            label: 'Biography',
            type: 'textarea',
            placeholder: 'Tell us about yourself...'
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
        console.log('Form submitted:', formData);
        // formData = { username: '...', email: '...', role: '...', bio: '...', active: true }
        
        // Make API call
        fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            ModalManager.toast({
                type: 'success',
                title: 'User created successfully'
            });
        });
    }
});
```

### Field Types:
- `text`: Text input
- `email`: Email input
- `password`: Password input
- `number`: Number input
- `date`: Date picker
- `textarea`: Multi-line text
- `select`: Dropdown
- `checkbox`: Single checkbox
- `radio`: Radio buttons

### Field Options:
- `name`: Field name (required)
- `label`: Field label (required)
- `type`: Input type (default: 'text')
- `placeholder`: Placeholder text
- `value`: Default value
- `required`: Is field required?
- `help`: Help text below field
- `validate`: Custom validation function
- `options`: Array of options for select/radio (format: `[{ value: '', label: '' }]`)
- `checkboxLabel`: Label for checkbox

---

## 4. Custom Modal

Full control over modal content and buttons.

```javascript
ModalManager.custom({
    title: 'User Profile',
    width: '800px',
    content: `
        <div style="display: flex; gap: 20px; padding: 20px;">
            <img src="avatar.jpg" style="width: 100px; height: 100px; border-radius: 50%;">
            <div>
                <h3>John Doe</h3>
                <p>Email: john@example.com</p>
                <p>Role: Administrator</p>
            </div>
        </div>
    `,
    buttons: [
        {
            text: 'Edit Profile',
            class: 'btn-primary',
            icon: 'fas fa-edit',
            style: 'background: #0066cc; color: white;',
            onClick: () => {
                console.log('Edit profile clicked');
                // Open edit form
            }
        },
        {
            text: 'View Activity',
            class: 'btn-secondary',
            icon: 'fas fa-history',
            style: 'background: #6c757d; color: white;',
            onClick: () => {
                console.log('View activity clicked');
            }
        },
        {
            text: 'Close',
            class: 'btn-outline',
            style: 'border: 2px solid #ddd; background: white; color: #333;',
            onClick: () => {
                console.log('Closed');
            }
        }
    ],
    onOpen: () => {
        console.log('Modal opened');
        // Initialize any custom functionality
    }
});
```

### Button Options:
- `text`: Button text (required)
- `class`: CSS class
- `icon`: Font Awesome icon class
- `style`: Inline CSS styles
- `onClick`: Click handler function
- `closeOnClick`: Close modal after click (default: true)

---

## 5. Loading Modal

Show a loading indicator during async operations.

```javascript
// Show loading
const loader = ModalManager.loading({
    title: 'Processing...',
    message: 'Please wait while we process your request.'
});

// Simulate async operation
setTimeout(() => {
    // Update loading message
    loader.update('Almost done...', 'Finalizing your request.');
    
    setTimeout(() => {
        // Close loading
        loader.close();
        
        // Show success
        ModalManager.toast({
            type: 'success',
            title: 'Operation completed!'
        });
    }, 1000);
}, 2000);
```

### Real-world example:

```javascript
async function uploadFile(file) {
    const loader = ModalManager.loading({
        title: 'Uploading...',
        message: 'Please wait while we upload your file.'
    });
    
    try {
        const formData = new FormData();
        formData.append('file', file);
        
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        loader.close();
        
        ModalManager.toast({
            type: 'success',
            title: 'File uploaded successfully!'
        });
    } catch (error) {
        loader.close();
        
        ModalManager.show({
            title: 'Upload Failed',
            content: 'There was an error uploading your file.',
            type: 'error'
        });
    }
}
```

---

## 6. Toast Notifications

Show brief notifications that auto-dismiss.

```javascript
ModalManager.toast({
    type: 'success',
    title: 'Changes saved!',
    timer: 3000,
    position: 'top-end'
});
```

### Options:
- `type`: Toast type (`success`, `error`, `warning`, `info`)
- `title`: Toast message
- `timer`: Auto-dismiss time in ms (default: 3000)
- `position`: Toast position (default: 'top-end')
  - `top`, `top-start`, `top-end`
  - `center`, `center-start`, `center-end`
  - `bottom`, `bottom-start`, `bottom-end`

### Examples:

```javascript
// Success toast
ModalManager.toast({
    type: 'success',
    title: 'User created successfully'
});

// Error toast
ModalManager.toast({
    type: 'error',
    title: 'Failed to save changes',
    timer: 5000
});

// Info toast at bottom
ModalManager.toast({
    type: 'info',
    title: 'New message received',
    position: 'bottom-end'
});
```

---

## Advanced Examples

### Example 1: Multi-step Form

```javascript
let step = 1;
const formData = {};

function showStep1() {
    ModalManager.form({
        title: 'Registration - Step 1 of 3',
        fields: [
            { name: 'firstName', label: 'First Name', type: 'text', required: true },
            { name: 'lastName', label: 'Last Name', type: 'text', required: true }
        ],
        submitText: 'Next',
        onSubmit: (data) => {
            Object.assign(formData, data);
            showStep2();
        }
    });
}

function showStep2() {
    ModalManager.form({
        title: 'Registration - Step 2 of 3',
        fields: [
            { name: 'email', label: 'Email', type: 'email', required: true },
            { name: 'phone', label: 'Phone', type: 'tel', required: true }
        ],
        submitText: 'Next',
        onSubmit: (data) => {
            Object.assign(formData, data);
            showStep3();
        }
    });
}

function showStep3() {
    ModalManager.form({
        title: 'Registration - Step 3 of 3',
        fields: [
            { name: 'password', label: 'Password', type: 'password', required: true },
            { name: 'confirmPassword', label: 'Confirm Password', type: 'password', required: true }
        ],
        submitText: 'Complete Registration',
        onSubmit: (data) => {
            Object.assign(formData, data);
            console.log('Complete form data:', formData);
            // Submit to server
        }
    });
}

// Start the process
showStep1();
```

### Example 2: Dynamic Table in Modal

```javascript
function showUsersTable() {
    // Fetch users
    fetch('/api/users')
        .then(response => response.json())
        .then(users => {
            let tableHTML = `
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="background: #f8f9fa;">
                            <th style="padding: 12px; text-align: left; border-bottom: 2px solid #ddd;">Name</th>
                            <th style="padding: 12px; text-align: left; border-bottom: 2px solid #ddd;">Email</th>
                            <th style="padding: 12px; text-align: left; border-bottom: 2px solid #ddd;">Role</th>
                            <th style="padding: 12px; text-align: center; border-bottom: 2px solid #ddd;">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
            
            users.forEach(user => {
                tableHTML += `
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 12px;">${user.name}</td>
                        <td style="padding: 12px;">${user.email}</td>
                        <td style="padding: 12px;">${user.role}</td>
                        <td style="padding: 12px; text-align: center;">
                            <button onclick="editUser(${user.id})" style="padding: 6px 12px; background: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 5px;">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button onclick="deleteUser(${user.id})" style="padding: 6px 12px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;">
                                <i class="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                `;
            });
            
            tableHTML += `
                    </tbody>
                </table>
            `;
            
            ModalManager.custom({
                title: 'User Management',
                content: tableHTML,
                width: '900px',
                buttons: [
                    {
                        text: 'Add New User',
                        icon: 'fas fa-plus',
                        style: 'background: #10b981; color: white; padding: 12px 24px; border-radius: 8px;',
                        onClick: () => {
                            // Open add user form
                            addNewUser();
                        },
                        closeOnClick: false
                    },
                    {
                        text: 'Close',
                        style: 'background: #6c757d; color: white; padding: 12px 24px; border-radius: 8px;',
                        onClick: () => {}
                    }
                ]
            });
        });
}
```

### Example 3: Confirmation with Input

```javascript
function deleteWithConfirmation(itemName) {
    ModalManager.form({
        title: 'Confirm Deletion',
        content: `<p style="color: #dc3545; margin-bottom: 20px;">⚠️ This action cannot be undone!</p>`,
        fields: [
            {
                name: 'confirmation',
                label: `Type "${itemName}" to confirm deletion`,
                type: 'text',
                required: true,
                validate: (value) => {
                    if (value !== itemName) {
                        return 'Confirmation text does not match';
                    }
                    return true;
                }
            }
        ],
        submitText: 'Delete Permanently',
        confirmColor: '#dc3545',
        onSubmit: (data) => {
            // Proceed with deletion
            console.log('Item deleted');
        }
    });
}
```

---

## Utility Methods

### Close Current Modal
```javascript
ModalManager.close();
```

### Check if Modal is Open
```javascript
if (ModalManager.isOpen()) {
    console.log('A modal is currently open');
}
```

---

## Global Configuration

You can modify default settings:

```javascript
ModalManager.defaults.width = '700px';
ModalManager.defaults.confirmColor = '#10b981';
ModalManager.defaults.closeOnBackdrop = false;
```

---

## Tips & Best Practices

1. **Always provide meaningful titles and content**
2. **Use appropriate icon types** (`success`, `error`, `warning`, `info`)
3. **Validate form inputs** using the `validate` function
4. **Handle errors gracefully** with try-catch blocks
5. **Use loading modals** for async operations
6. **Toast for quick feedback**, modals for important messages
7. **Keep forms simple** - break complex forms into steps
8. **Test on mobile devices** - modals are responsive by default

---

## Browser Support

Works on all modern browsers that support ES6:
- Chrome 51+
- Firefox 54+
- Safari 10+
- Edge 15+

---

## Dependencies

- SweetAlert2 (v11+)

---

## License

Part of St. Lawrence Junior School Dashboard System
