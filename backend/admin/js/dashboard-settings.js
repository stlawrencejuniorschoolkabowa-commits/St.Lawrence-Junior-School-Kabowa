/**
 * Enhanced Dashboard Settings Module
 * Provides comprehensive customization options with real-time updates
 */

// Helper function to adjust color brightness
function adjustColor(color, amount) {
    const num = parseInt(color.replace('#', ''), 16);
    const r = Math.max(0, Math.min(255, (num >> 16) + amount));
    const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amount));
    const b = Math.max(0, Math.min(255, (num & 0x0000FF) + amount));
    return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}

// Apply theme mode
function applyThemeMode(mode) {
    const sidebar = document.querySelector('.sidebar');
    const topBar = document.querySelector('.top-bar');
    
    if (mode === 'light') {
        document.body.style.background = '#f8f9fa';
        if (sidebar) {
            sidebar.style.background = '#ffffff';
            sidebar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        }
        if (topBar) {
            topBar.style.background = '#ffffff';
        }
        document.documentElement.style.setProperty('--dark-bg', '#f8f9fa');
        document.documentElement.style.setProperty('--darker-bg', '#ffffff');
        document.documentElement.style.setProperty('--card-bg', '#ffffff');
        document.documentElement.style.setProperty('--text-light', '#1a1a1a');
        document.documentElement.style.setProperty('--text-gray', '#666666');
    } else {
        document.body.style.background = '#1a1d2e';
        if (sidebar) {
            sidebar.style.background = '#151824';
            sidebar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
        }
        if (topBar) {
            topBar.style.background = '#151824';
        }
        document.documentElement.style.setProperty('--dark-bg', '#1a1d2e');
        document.documentElement.style.setProperty('--darker-bg', '#151824');
        document.documentElement.style.setProperty('--card-bg', '#22283a');
        document.documentElement.style.setProperty('--text-light', '#e4e6eb');
        document.documentElement.style.setProperty('--text-gray', '#9ca3af');
    }
}

// Apply color preset
function applyPreset(preset) {
    const presets = {
        default: { primary: '#0066cc', accent: '#dc3545' },
        green: { primary: '#10b981', accent: '#059669' },
        purple: { primary: '#8b5cf6', accent: '#7c3aed' },
        orange: { primary: '#f59e0b', accent: '#d97706' }
    };
    
    const colors = presets[preset];
    const primaryColorInput = document.getElementById('primaryColor');
    const primaryColorText = document.getElementById('primaryColorText');
    const accentColorInput = document.getElementById('accentColor');
    const accentColorText = document.getElementById('accentColorText');
    
    if (primaryColorInput && primaryColorText) {
        primaryColorInput.value = colors.primary;
        primaryColorText.value = colors.primary;
        document.documentElement.style.setProperty('--primary-blue', colors.primary);
        document.documentElement.style.setProperty('--dark-blue', adjustColor(colors.primary, -20));
    }
    
    if (accentColorInput && accentColorText) {
        accentColorInput.value = colors.accent;
        accentColorText.value = colors.accent;
        document.documentElement.style.setProperty('--accent-red', colors.accent);
    }
}

// Reset to default settings
function resetToDefaults() {
    Swal.fire({
        title: 'Reset Settings?',
        text: 'This will restore all settings to their default values.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#dc3545',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Yes, Reset',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('dashboardSettings');
            Swal.fire({
                icon: 'success',
                title: 'Settings Reset!',
                text: 'Reloading dashboard...',
                timer: 1500,
                showConfirmButton: false
            }).then(() => {
                location.reload();
            });
        }
    });
}

// Load saved settings on page load
function loadDashboardSettings() {
    const saved = localStorage.getItem('dashboardSettings');
    if (saved) {
        try {
            const settings = JSON.parse(saved);
            
            // Apply colors
            if (settings.primaryColor) {
                document.documentElement.style.setProperty('--primary-blue', settings.primaryColor);
                document.documentElement.style.setProperty('--dark-blue', adjustColor(settings.primaryColor, -20));
            }
            if (settings.accentColor) {
                document.documentElement.style.setProperty('--accent-red', settings.accentColor);
            }
            
            // Apply font size
            if (settings.fontSize) {
                document.body.style.fontSize = settings.fontSize;
            }
            
            // Apply theme mode
            if (settings.themeMode) {
                applyThemeMode(settings.themeMode);
            }
            
            // Apply sidebar width
            if (settings.sidebarWidth) {
                const sidebar = document.querySelector('.sidebar');
                const mainContent = document.querySelector('.main-content');
                if (sidebar) sidebar.style.width = settings.sidebarWidth;
                if (mainContent) mainContent.style.marginLeft = settings.sidebarWidth;
            }
            
            // Apply border radius
            if (settings.borderRadius) {
                document.documentElement.style.setProperty('--border-radius', settings.borderRadius);
                document.querySelectorAll('.stat-card, .action-card, .sidebar, .settings-section').forEach(el => {
                    el.style.borderRadius = settings.borderRadius;
                });
            }
            
            // Apply animation speed
            if (settings.animationSpeed) {
                const speeds = { fast: '0.2s', normal: '0.3s', slow: '0.5s' };
                document.documentElement.style.setProperty('--transition-speed', speeds[settings.animationSpeed]);
            }
        } catch (error) {
            console.error('Error loading dashboard settings:', error);
        }
    }
}

// Open enhanced settings modal
function openSystemSettings() {
    // Get current settings from localStorage or defaults
    const savedSettings = JSON.parse(localStorage.getItem('dashboardSettings') || '{}');
    const root = document.documentElement;
    const currentPrimaryColor = savedSettings.primaryColor || getComputedStyle(root).getPropertyValue('--primary-blue').trim() || '#0066cc';
    const currentAccentColor = savedSettings.accentColor || getComputedStyle(root).getPropertyValue('--accent-red').trim() || '#dc3545';
    const currentFontSize = savedSettings.fontSize || '14px';
    const currentThemeMode = savedSettings.themeMode || 'dark';
    const currentSidebarWidth = savedSettings.sidebarWidth || '260px';
    const currentBorderRadius = savedSettings.borderRadius || '15px';
    const currentAnimationSpeed = savedSettings.animationSpeed || 'normal';
    
    Swal.fire({
        title: '<i class="fas fa-cog"></i> Dashboard Settings',
        html: `
            <style>
                .settings-container {
                    text-align: left;
                    padding: 10px;
                    max-height: 70vh;
                    overflow-y: auto;
                }
                .settings-container::-webkit-scrollbar {
                    width: 8px;
                }
                .settings-container::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                .settings-container::-webkit-scrollbar-thumb {
                    background: #0066cc;
                    border-radius: 10px;
                }
                .settings-section {
                    background: #f8f9fa;
                    padding: 20px;
                    border-radius: 12px;
                    margin-bottom: 20px;
                    border: 2px solid #e9ecef;
                    transition: all 0.3s;
                }
                .settings-section:hover {
                    border-color: #0066cc;
                    box-shadow: 0 4px 12px rgba(0, 102, 204, 0.1);
                }
                .settings-section-title {
                    color: #0066cc;
                    margin-bottom: 18px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 16px;
                    font-weight: 700;
                    padding-bottom: 12px;
                    border-bottom: 2px solid #e9ecef;
                }
                .settings-section-title i {
                    font-size: 18px;
                }
                .settings-field {
                    margin-bottom: 18px;
                }
                .settings-field:last-child {
                    margin-bottom: 0;
                }
                .settings-label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 600;
                    color: #333;
                    font-size: 13px;
                }
                .color-input-group {
                    display: flex;
                    gap: 12px;
                    align-items: center;
                }
                .color-picker {
                    width: 70px;
                    height: 45px;
                    border: 3px solid #ddd;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                .color-picker:hover {
                    border-color: #0066cc;
                    transform: scale(1.05);
                }
                .color-text-input {
                    flex: 1;
                    padding: 12px 16px;
                    border: 2px solid #ddd;
                    border-radius: 10px;
                    font-size: 14px;
                    font-family: 'Courier New', monospace;
                    font-weight: 600;
                    text-transform: uppercase;
                    transition: all 0.3s;
                }
                .color-text-input:focus {
                    outline: none;
                    border-color: #0066cc;
                    box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
                }
                .settings-select {
                    width: 100%;
                    padding: 12px 16px;
                    border: 2px solid #ddd;
                    border-radius: 10px;
                    font-size: 14px;
                    background: white;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                .settings-select:focus {
                    outline: none;
                    border-color: #0066cc;
                    box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
                }
                .theme-mode-options {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px;
                }
                .theme-mode-option {
                    position: relative;
                }
                .theme-mode-option input[type="radio"] {
                    position: absolute;
                    opacity: 0;
                }
                .theme-mode-label {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                    padding: 16px;
                    border: 3px solid #ddd;
                    border-radius: 12px;
                    cursor: pointer;
                    transition: all 0.3s;
                    background: white;
                }
                .theme-mode-option input[type="radio"]:checked + .theme-mode-label {
                    border-color: #0066cc;
                    background: #e8f4f8;
                }
                .theme-mode-label:hover {
                    border-color: #0066cc;
                    transform: translateY(-2px);
                }
                .theme-mode-icon {
                    font-size: 32px;
                    color: #0066cc;
                }
                .theme-mode-text {
                    font-weight: 600;
                    color: #333;
                    font-size: 14px;
                }
                .preset-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 12px;
                }
                .preset-button {
                    padding: 14px;
                    color: white;
                    border: none;
                    border-radius: 10px;
                    cursor: pointer;
                    font-weight: 600;
                    font-size: 13px;
                    transition: all 0.3s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                }
                .preset-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
                }
                .preset-button i {
                    font-size: 16px;
                }
                .info-box {
                    background: #e8f4f8;
                    padding: 14px;
                    border-radius: 10px;
                    font-size: 13px;
                    color: #0066cc;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    border: 2px solid #d1e7f0;
                }
                .info-box i {
                    font-size: 18px;
                }
                .slider-container {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                .slider {
                    flex: 1;
                    height: 8px;
                    border-radius: 5px;
                    background: #ddd;
                    outline: none;
                    -webkit-appearance: none;
                }
                .slider::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #0066cc;
                    cursor: pointer;
                }
                .slider::-moz-range-thumb {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #0066cc;
                    cursor: pointer;
                    border: none;
                }
                .slider-value {
                    min-width: 60px;
                    text-align: center;
                    font-weight: 700;
                    color: #0066cc;
                    font-size: 14px;
                }
                .reset-button {
                    width: 100%;
                    padding: 14px;
                    background: linear-gradient(135deg, #6c757d, #5a6268);
                    color: white;
                    border: none;
                    border-radius: 10px;
                    cursor: pointer;
                    font-weight: 600;
                    font-size: 14px;
                    transition: all 0.3s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                }
                .reset-button:hover {
                    background: linear-gradient(135deg, #5a6268, #545b62);
                    transform: translateY(-2px);
                }
            </style>
            <div class="settings-container">
                <!-- Color Theme Section -->
                <div class="settings-section">
                    <div class="settings-section-title">
                        <i class="fas fa-palette"></i> Color Theme
                    </div>
                    <div class="settings-field">
                        <label class="settings-label">Primary Color (Blue)</label>
                        <div class="color-input-group">
                            <input type="color" id="primaryColor" value="${currentPrimaryColor}" class="color-picker">
                            <input type="text" id="primaryColorText" value="${currentPrimaryColor}" class="color-text-input">
                        </div>
                    </div>
                    <div class="settings-field">
                        <label class="settings-label">Accent Color (Red)</label>
                        <div class="color-input-group">
                            <input type="color" id="accentColor" value="${currentAccentColor}" class="color-picker">
                            <input type="text" id="accentColorText" value="${currentAccentColor}" class="color-text-input">
                        </div>
                    </div>
                    <div class="info-box">
                        <i class="fas fa-bolt"></i>
                        <span>Changes apply instantly across the entire dashboard</span>
                    </div>
                </div>
                
                <!-- Typography Section -->
                <div class="settings-section">
                    <div class="settings-section-title">
                        <i class="fas fa-text-height"></i> Typography
                    </div>
                    <div class="settings-field">
                        <label class="settings-label">Base Font Size</label>
                        <select id="fontSize" class="settings-select">
                            <option value="12px" ${currentFontSize === '12px' ? 'selected' : ''}>Small (12px)</option>
                            <option value="14px" ${currentFontSize === '14px' ? 'selected' : ''}>Medium (14px)</option>
                            <option value="16px" ${currentFontSize === '16px' ? 'selected' : ''}>Large (16px)</option>
                            <option value="18px" ${currentFontSize === '18px' ? 'selected' : ''}>Extra Large (18px)</option>
                        </select>
                    </div>
                </div>
                
                <!-- Theme Mode Section -->
                <div class="settings-section">
                    <div class="settings-section-title">
                        <i class="fas fa-moon"></i> Theme Mode
                    </div>
                    <div class="theme-mode-options">
                        <div class="theme-mode-option">
                            <input type="radio" name="themeMode" value="dark" id="darkMode" ${currentThemeMode === 'dark' ? 'checked' : ''}>
                            <label for="darkMode" class="theme-mode-label">
                                <i class="fas fa-moon theme-mode-icon"></i>
                                <span class="theme-mode-text">Dark Mode</span>
                            </label>
                        </div>
                        <div class="theme-mode-option">
                            <input type="radio" name="themeMode" value="light" id="lightMode" ${currentThemeMode === 'light' ? 'checked' : ''}>
                            <label for="lightMode" class="theme-mode-label">
                                <i class="fas fa-sun theme-mode-icon"></i>
                                <span class="theme-mode-text">Light Mode</span>
                            </label>
                        </div>
                    </div>
                </div>
                
                <!-- Layout Settings -->
                <div class="settings-section">
                    <div class="settings-section-title">
                        <i class="fas fa-sliders-h"></i> Layout Settings
                    </div>
                    <div class="settings-field">
                        <label class="settings-label">Sidebar Width</label>
                        <div class="slider-container">
                            <input type="range" id="sidebarWidth" min="220" max="320" value="${parseInt(currentSidebarWidth)}" class="slider">
                            <span class="slider-value" id="sidebarWidthValue">${parseInt(currentSidebarWidth)}px</span>
                        </div>
                    </div>
                    <div class="settings-field">
                        <label class="settings-label">Border Radius</label>
                        <div class="slider-container">
                            <input type="range" id="borderRadius" min="0" max="30" value="${parseInt(currentBorderRadius)}" class="slider">
                            <span class="slider-value" id="borderRadiusValue">${parseInt(currentBorderRadius)}px</span>
                        </div>
                    </div>
                    <div class="settings-field">
                        <label class="settings-label">Animation Speed</label>
                        <select id="animationSpeed" class="settings-select">
                            <option value="fast" ${currentAnimationSpeed === 'fast' ? 'selected' : ''}>Fast (0.2s)</option>
                            <option value="normal" ${currentAnimationSpeed === 'normal' ? 'selected' : ''}>Normal (0.3s)</option>
                            <option value="slow" ${currentAnimationSpeed === 'slow' ? 'selected' : ''}>Slow (0.5s)</option>
                        </select>
                    </div>
                </div>
                
                <!-- Quick Presets Section -->
                <div class="settings-section">
                    <div class="settings-section-title">
                        <i class="fas fa-magic"></i> Quick Presets
                    </div>
                    <div class="preset-grid">
                        <button onclick="applyPreset('default')" class="preset-button" style="background: linear-gradient(135deg, #0066cc, #0052a3);">
                            <i class="fas fa-check-circle"></i> Default Blue
                        </button>
                        <button onclick="applyPreset('green')" class="preset-button" style="background: linear-gradient(135deg, #10b981, #059669);">
                            <i class="fas fa-leaf"></i> Green Theme
                        </button>
                        <button onclick="applyPreset('purple')" class="preset-button" style="background: linear-gradient(135deg, #8b5cf6, #7c3aed);">
                            <i class="fas fa-crown"></i> Purple Theme
                        </button>
                        <button onclick="applyPreset('orange')" class="preset-button" style="background: linear-gradient(135deg, #f59e0b, #d97706);">
                            <i class="fas fa-fire"></i> Orange Theme
                        </button>
                    </div>
                </div>
                
                <!-- Reset Section -->
                <div class="settings-section">
                    <button onclick="resetToDefaults()" class="reset-button">
                        <i class="fas fa-undo"></i> Reset to Default Settings
                    </button>
                </div>
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: '<i class="fas fa-save"></i> Save Settings',
        cancelButtonText: '<i class="fas fa-times"></i> Cancel',
        confirmButtonColor: '#0066cc',
        cancelButtonColor: '#6c757d',
        width: '750px',
        customClass: {
            popup: 'settings-modal-popup',
            title: 'settings-modal-title'
        },
        didOpen: () => {
            // Real-time color updates
            const primaryColorInput = document.getElementById('primaryColor');
            const primaryColorText = document.getElementById('primaryColorText');
            const accentColorInput = document.getElementById('accentColor');
            const accentColorText = document.getElementById('accentColorText');
            
            primaryColorInput.addEventListener('input', (e) => {
                const color = e.target.value;
                primaryColorText.value = color;
                document.documentElement.style.setProperty('--primary-blue', color);
                document.documentElement.style.setProperty('--dark-blue', adjustColor(color, -20));
            });
            
            primaryColorText.addEventListener('input', (e) => {
                const color = e.target.value;
                if (/^#[0-9A-F]{6}$/i.test(color)) {
                    primaryColorInput.value = color;
                    document.documentElement.style.setProperty('--primary-blue', color);
                    document.documentElement.style.setProperty('--dark-blue', adjustColor(color, -20));
                }
            });
            
            accentColorInput.addEventListener('input', (e) => {
                const color = e.target.value;
                accentColorText.value = color;
                document.documentElement.style.setProperty('--accent-red', color);
            });
            
            accentColorText.addEventListener('input', (e) => {
                const color = e.target.value;
                if (/^#[0-9A-F]{6}$/i.test(color)) {
                    accentColorInput.value = color;
                    document.documentElement.style.setProperty('--accent-red', color);
                }
            });
            
            // Real-time font size updates
            document.getElementById('fontSize').addEventListener('change', (e) => {
                document.body.style.fontSize = e.target.value;
            });
            
            // Real-time sidebar width updates
            const sidebarWidthSlider = document.getElementById('sidebarWidth');
            const sidebarWidthValue = document.getElementById('sidebarWidthValue');
            sidebarWidthSlider.addEventListener('input', (e) => {
                const width = e.target.value + 'px';
                const sidebar = document.querySelector('.sidebar');
                const mainContent = document.querySelector('.main-content');
                if (sidebar) sidebar.style.width = width;
                if (mainContent) mainContent.style.marginLeft = width;
                sidebarWidthValue.textContent = width;
            });
            
            // Real-time border radius updates
            const borderRadiusSlider = document.getElementById('borderRadius');
            const borderRadiusValue = document.getElementById('borderRadiusValue');
            borderRadiusSlider.addEventListener('input', (e) => {
                const radius = e.target.value + 'px';
                document.documentElement.style.setProperty('--border-radius', radius);
                document.querySelectorAll('.stat-card, .action-card, .sidebar, .settings-section').forEach(el => {
                    el.style.borderRadius = radius;
                });
                borderRadiusValue.textContent = radius;
            });
            
            // Real-time animation speed updates
            document.getElementById('animationSpeed').addEventListener('change', (e) => {
                const speeds = { fast: '0.2s', normal: '0.3s', slow: '0.5s' };
                const speed = speeds[e.target.value];
                document.documentElement.style.setProperty('--transition-speed', speed);
            });
            
            // Theme mode changes
            document.querySelectorAll('input[name="themeMode"]').forEach(radio => {
                radio.addEventListener('change', (e) => {
                    applyThemeMode(e.target.value);
                });
            });
        },
        preConfirm: () => {
            return {
                primaryColor: document.getElementById('primaryColor').value,
                accentColor: document.getElementById('accentColor').value,
                fontSize: document.getElementById('fontSize').value,
                themeMode: document.querySelector('input[name="themeMode"]:checked').value,
                sidebarWidth: document.getElementById('sidebarWidth').value + 'px',
                borderRadius: document.getElementById('borderRadius').value + 'px',
                animationSpeed: document.getElementById('animationSpeed').value
            };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Save settings to localStorage
            localStorage.setItem('dashboardSettings', JSON.stringify(result.value));
            Swal.fire({
                icon: 'success',
                title: 'Settings Saved!',
                html: '<p style="font-size: 14px; color: #666;">Your dashboard customization has been saved and will persist across sessions.</p>',
                confirmButtonColor: '#0066cc',
                timer: 2500,
                showConfirmButton: false
            });
        } else if (result.isDismissed) {
            // Reload settings if cancelled
            loadDashboardSettings();
        }
    });
}

// Initialize settings on page load
document.addEventListener('DOMContentLoaded', function() {
    loadDashboardSettings();
});
