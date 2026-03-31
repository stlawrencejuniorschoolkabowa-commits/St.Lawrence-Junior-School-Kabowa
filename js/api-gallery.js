// Gallery API Integration

// Load gallery images
async function loadGallery() {
    console.log('=== GALLERY LOADING START ===');
    const container = document.getElementById('galleryContainer');
    if (!container) {
        console.error('❌ Gallery container not found!');
        return;
    }
    console.log('✓ Container found:', container);

    try {
        const url = API_BASE_URL + '/gallery/list.php';
        console.log('Fetching from:', url);
        
        const response = await API.get('/gallery/list.php');
        console.log('Response received:', response);
        console.log('Number of images:', response.data ? response.data.length : 0);
        
        if (response.data) {
            console.log('First image data:', response.data[0]);
        }

        if (response.success && response.data && response.data.length > 0) {
            console.log('✓ Success! Displaying', response.data.length, 'images');
            displayGallery(response.data);
        } else {
            console.warn('⚠ No images found in database');
            container.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 80px 20px; color: #999;">
                    <i class="fas fa-images" style="font-size: 4rem; margin-bottom: 20px; opacity: 0.3;"></i>
                    <h3 style="color: #666; margin-bottom: 10px;">No Gallery Images Yet</h3>
                    <p>Images uploaded through the admin dashboard will appear here.</p>
                </div>
            `;
        }
    } catch (error) {
        console.error('❌ Error loading gallery:', error);
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 80px 20px; color: #999;">
                <i class="fas fa-exclamation-circle" style="font-size: 4rem; margin-bottom: 20px; color: #dc3545;"></i>
                <h3 style="color: #666; margin-bottom: 10px;">Error Loading Gallery</h3>
                <p style="color: #dc3545;">${error.message}</p>
            </div>
        `;
    }
    console.log('=== GALLERY LOADING END ===');
}

// Display gallery images
function displayGallery(images) {
    console.log('=== DISPLAY GALLERY START ===');
    console.log('Images to display:', images);
    
    const container = document.getElementById('galleryContainer');
    if (!container) {
        console.error('❌ Container not found!');
        return;
    }

    // Store images globally for lightbox
    window.galleryImages = images;

    // Build HTML - display all images without category grouping
    let html = '';
    
    images.forEach((img, index) => {
        const imagePath = `../backend/${img.image_url}`;
        console.log(`Image ${index}: ${imagePath}, Category: ${img.category}`);
        
        html += `
            <div class="gallery-item medium" data-category="${img.category}" data-aos="zoom-in" data-aos-delay="${index * 50}">
                <img src="${imagePath}" alt="${img.title}" loading="lazy" onerror="console.error('Failed to load image:', this.src); this.style.border='3px solid red';">
                <div class="gallery-overlay">
                    <div class="gallery-info">
                        <h4>${img.title}</h4>
                        ${img.description ? `<p>${img.description}</p>` : ''}
                    </div>
                    <button class="view-btn gallery-view-btn" onclick="openLightbox(${index})">
                        <i class="fas fa-search-plus"></i>
                    </button>
                </div>
            </div>
        `;
    });

    console.log('Generated HTML length:', html.length);
    container.innerHTML = html;
    console.log('✓ Gallery HTML inserted into container');
    
    // Log all categories found
    const categories = [...new Set(images.map(img => img.category))];
    console.log('Categories found in images:', categories);
    
    console.log('=== DISPLAY GALLERY END ===');
    
    // Reinitialize AOS for new elements
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
    
    console.log('✓ Gallery display complete - no filters needed');
}

// Get category icon (kept for potential future use)
function getCategoryIcon(category) {
    const icons = {
        'Academics': 'book',
        'Sports': 'futbol',
        'Events': 'calendar-alt',
        'Facilities': 'building'
    };
    return icons[category] || 'image';
}

// Initialize gallery page
if (window.location.pathname.includes('Gallery-redesign.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        loadGallery();
    });
}
