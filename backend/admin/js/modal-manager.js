/**
 * Dynamic Modal Manager
 * Create and manage modals without hardcoding HTML
 * 
 * Usage Examples:
 * 
 * 1. Simple Alert Modal:
 *    ModalManager.show({
 *        title: 'Success',
 *        content: 'Operation completed successfully!',
 *        type: 'success'
 *    });
 * 
 * 2. Confirmation Modal:
 *    ModalManager.confirm({
 *        title: 'Delete Item?',
 *        content: 'Are you sure you want to delete this item?',
 *        onConfirm: () => { console.log('Deleted!'); }
 *    });
 * 
 * 3. Form Modal:
 *    ModalManager.form({
 *        title: 'Add New User',
 *        fields: [
 *            { name: 'username', label: 'Username', type: 'text', required: true },
 *            { name: 'email', label: 'Email', type: 'email', required: true }
 *        ],
 *        onSubmit: (data) => { console.log(data); }
 *    });
 * 
 * 4. Custom Modal:
 *    ModalManager.custom({
 *        title: 'Custom Content',
 *        content: '<div>Your custom HTML here</div>',
 *        buttons: [
 *            { text: 'Action 1', class: 'btn-primary', onClick: () => {} },
 *            { text: 'Action 2', class: 'btn-secondary', onClick: () => {} }
 *        ]
 *    });
 */

const ModalManager = {
    // Store active modals
    activeModals: [],
    
    // Default configuration
    defaults: {
        width: '600px',
        closeOnBackdrop: true,
        closeOnEscape: true,
        showCloseButton: true,
        animation: 'fade',
        backdrop: true
    },
    
    /**
     * Show a simple modal
     * @param {Object} options - Modal configuration
     */
    show(options) {
        const config = { ...this.defaults, ...options };
        
        Swal.fire({
            title: config.title || '',
            html: config.content || '',
            icon: config.type || config.icon || undefined,
            width: config.width,
            confirmButtonText: config.confirmText || 'OK',
            confirmButtonColor: config.confirmColor || '#0066cc',
            showCloseButton: config.showCloseButton,
            allowOutsideClick: config.closeOnBackdrop,
            allowEscapeKey: config.closeOnEscape,
            customClass: config.customClass || {},
            didOpen: config.onOpen,
            willClose: config.onClose
        }).then((result) => {
            if (result.isConfirmed && config.onConfirm) {
                config.onConfirm();
            }
        });
    },
    
    /**
     * Show a confirmation modal
     * @param {Object} options - Modal configuration
     */
    confirm(options) {
        const config = { ...this.defaults, ...options };
        
        Swal.fire({
            title: config.title || 'Are you sure?',
            html: config.content || '',
            icon: config.type || 'warning',
            width: config.width,
            showCancelButton: true,
            confirmButtonText: config.confirmText || 'Yes',
            cancelButtonText: config.cancelText || 'No',
            confirmButtonColor: config.confirmColor || '#0066cc',
            cancelButtonColor: config.cancelColor || '#6c757d',
            showCloseButton: config.showCloseButton,
            allowOutsideClick: config.closeOnBackdrop,
            allowEscapeKey: config.closeOnEscape,
            reverseButtons: config.reverseButtons || false
        }).then((result) => {
            if (result.isConfirmed && config.onConfirm) {
                config.onConfirm();
            } else if (result.isDismissed && config.onCancel) {
                config.onCancel();
            }
        });
    },
    
    /**
     * Show a form modal
     * @param {Object} options - Modal configuration with fields
     */
    form(options) {
        const config = { ...this.defaults, ...options };
        const fields = config.fields || [];
        
        // Generate form HTML
        let formHTML = '<div style="text-align: left; padding: 20px;">';
        
        fields.forEach(field => {
            const fieldId = `modal_field_${field.name}`;
            const required = field.required ? 'required' : '';
            const placeholder = field.placeholder || '';
            const value = field.value || '';
            
            formHTML += `
                <div style="margin-bottom: 20px;">
                    <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #333; font-size: 14px;">
                        ${field.label}
                        ${field.required ? '<span style="color: #dc3545;">*</span>' : ''}
                    </label>
            `;
            
            if (field.type === 'textarea') {
                formHTML += `
                    <textarea 
                        id="${fieldId}" 
                        name="${field.name}" 
                        placeholder="${placeholder}"
                        ${required}
                        style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 8px; font-size: 14px; font-family: inherit; min-height: 100px; resize: vertical;"
                    >${value}</textarea>
                `;
            } else if (field.type === 'select') {
                formHTML += `<select id="${fieldId}" name="${field.name}" ${required} style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 8px; font-size: 14px; background: white;">`;
                if (field.placeholder) {
                    formHTML += `<option value="">${field.placeholder}</option>`;
                }
                (field.options || []).forEach(opt => {
                    const selected = opt.value === value ? 'selected' : '';
                    formHTML += `<option value="${opt.value}" ${selected}>${opt.label}</option>`;
                });
                formHTML += `</select>`;
            } else if (field.type === 'checkbox') {
                formHTML += `
                    <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                        <input 
                            type="checkbox" 
                            id="${fieldId}" 
                            name="${field.name}"
                            ${value ? 'checked' : ''}
                            style="width: 18px; height: 18px; cursor: pointer;"
                        >
                        <span style="font-size: 14px; color: #666;">${field.checkboxLabel || ''}</span>
                    </label>
                `;
            } else if (field.type === 'radio') {
                (field.options || []).forEach(opt => {
                    const checked = opt.value === value ? 'checked' : '';
                    formHTML += `
                        <label style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px; cursor: pointer;">
                            <input 
                                type="radio" 
                                name="${field.name}"
                                value="${opt.value}"
                                ${checked}
                                style="width: 18px; height: 18px; cursor: pointer;"
                            >
                            <span style="font-size: 14px; color: #666;">${opt.label}</span>
                        </label>
                    `;
                });
            } else {
                formHTML += `
                    <input 
                        type="${field.type || 'text'}" 
                        id="${fieldId}" 
                        name="${field.name}" 
                        placeholder="${placeholder}"
                        value="${value}"
                        ${required}
                        style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 8px; font-size: 14px;"
                    >
                `;
            }
            
            if (field.help) {
                formHTML += `<small style="display: block; margin-top: 5px; color: #666; font-size: 12px;">${field.help}</small>`;
            }
            
            formHTML += `</div>`;
        });
        
        formHTML += '</div>';
        
        Swal.fire({
            title: config.title || 'Form',
            html: formHTML,
            width: config.width || '650px',
            showCancelButton: true,
            confirmButtonText: config.submitText || 'Submit',
            cancelButtonText: config.cancelText || 'Cancel',
            confirmButtonColor: config.confirmColor || '#0066cc',
            cancelButtonColor: config.cancelColor || '#6c757d',
            showCloseButton: config.showCloseButton,
            allowOutsideClick: config.closeOnBackdrop,
            allowEscapeKey: config.closeOnEscape,
            preConfirm: () => {
                const formData = {};
                let isValid = true;
                
                fields.forEach(field => {
                    const fieldId = `modal_field_${field.name}`;
                    const element = document.getElementById(fieldId);
                    
                    if (element) {
                        if (field.type === 'checkbox') {
                            formData[field.name] = element.checked;
                        } else if (field.type === 'radio') {
                            const checked = document.querySelector(`input[name="${field.name}"]:checked`);
                            formData[field.name] = checked ? checked.value : '';
                        } else {
                            formData[field.name] = element.value;
                        }
                        
                        // Basic validation
                        if (field.required && !formData[field.name]) {
                            Swal.showValidationMessage(`${field.label} is required`);
                            isValid = false;
                        }
                        
                        // Custom validation
                        if (field.validate && isValid) {
                            const validationResult = field.validate(formData[field.name]);
                            if (validationResult !== true) {
                                Swal.showValidationMessage(validationResult);
                                isValid = false;
                            }
                        }
                    }
                });
                
                return isValid ? formData : false;
            }
        }).then((result) => {
            if (result.isConfirmed && config.onSubmit) {
                config.onSubmit(result.value);
            } else if (result.isDismissed && config.onCancel) {
                config.onCancel();
            }
        });
    },
    
    /**
     * Show a custom modal with full control
     * @param {Object} options - Modal configuration
     */
    custom(options) {
        const config = { ...this.defaults, ...options };
        const buttons = config.buttons || [];
        
        // Generate custom buttons HTML
        let buttonsHTML = '';
        if (buttons.length > 0) {
            buttonsHTML = '<div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px;">';
            buttons.forEach((btn, index) => {
                const btnClass = btn.class || 'btn-secondary';
                const btnStyle = btn.style || '';
                buttonsHTML += `
                    <button 
                        id="modal_btn_${index}" 
                        class="${btnClass}"
                        style="padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; ${btnStyle}"
                    >
                        ${btn.icon ? `<i class="${btn.icon}"></i> ` : ''}${btn.text}
                    </button>
                `;
            });
            buttonsHTML += '</div>';
        }
        
        const fullContent = config.content + buttonsHTML;
        
        Swal.fire({
            title: config.title || '',
            html: fullContent,
            width: config.width,
            showConfirmButton: config.showConfirmButton !== undefined ? config.showConfirmButton : false,
            showCancelButton: false,
            showCloseButton: config.showCloseButton,
            allowOutsideClick: config.closeOnBackdrop,
            allowEscapeKey: config.closeOnEscape,
            customClass: config.customClass || {},
            didOpen: () => {
                // Attach button click handlers
                buttons.forEach((btn, index) => {
                    const btnElement = document.getElementById(`modal_btn_${index}`);
                    if (btnElement && btn.onClick) {
                        btnElement.addEventListener('click', () => {
                            if (btn.closeOnClick !== false) {
                                Swal.close();
                            }
                            btn.onClick();
                        });
                    }
                });
                
                if (config.onOpen) {
                    config.onOpen();
                }
            },
            willClose: config.onClose
        });
    },
    
    /**
     * Show a loading modal
     * @param {Object} options - Modal configuration
     */
    loading(options = {}) {
        const config = { ...options };
        
        Swal.fire({
            title: config.title || 'Loading...',
            html: config.message || 'Please wait...',
            allowOutsideClick: false,
            allowEscapeKey: false,
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        
        return {
            close: () => Swal.close(),
            update: (newTitle, newMessage) => {
                Swal.update({
                    title: newTitle,
                    html: newMessage
                });
            }
        };
    },
    
    /**
     * Show a toast notification
     * @param {Object} options - Toast configuration
     */
    toast(options) {
        const config = { ...options };
        
        const Toast = Swal.mixin({
            toast: true,
            position: config.position || 'top-end',
            showConfirmButton: false,
            timer: config.timer || 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        });
        
        Toast.fire({
            icon: config.type || config.icon || 'info',
            title: config.title || config.message || ''
        });
    },
    
    /**
     * Close the current modal
     */
    close() {
        Swal.close();
    },
    
    /**
     * Check if a modal is currently open
     */
    isOpen() {
        return Swal.isVisible();
    }
};

// Make it globally available
window.ModalManager = ModalManager;

// Example usage documentation
console.log('%c Modal Manager Loaded ', 'background: #0066cc; color: white; font-size: 14px; padding: 5px 10px; border-radius: 5px;');
console.log('%c Use ModalManager.show(), .confirm(), .form(), .custom(), .loading(), or .toast() ', 'color: #666; font-size: 12px;');
