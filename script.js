// Set Current Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// WhatsApp Desktop FAB Logic
const waFab = document.getElementById('waFab');
const waPopup = document.getElementById('whatsappPopup');
const waClose = document.querySelector('.wa-close');

if (waFab && waPopup) {
    waFab.addEventListener('click', () => {
        waPopup.classList.toggle('active');
    });

    waClose.addEventListener('click', () => {
        waPopup.classList.remove('active');
    });

    document.addEventListener('click', (e) => {
        if (!waPopup.contains(e.target) && !waFab.contains(e.target) && waPopup.classList.contains('active')) {
            waPopup.classList.remove('active');
        }
    });
}

/* ==========================================================================
   Portfolio Data (Final 37 Images)
   ========================================================================== */
const portfolioData = [
    // NGO & Government (6 images)
    { id: 1, category: 'ngo', src: 'assets/images/ngo/ngo_1.jpg', title: 'Community Awareness', desc: 'Street Theatre' },
    { id: 2, category: 'ngo', src: 'assets/images/ngo/ngo_2.jpg', title: 'Public Initiative', desc: 'Street Theatre' },
    { id: 3, category: 'ngo', src: 'assets/images/ngo/ngo_3.jpg', title: 'Social Campaign', desc: 'Awareness Drive' },
    { id: 4, category: 'ngo', src: 'assets/images/ngo/ngo_4.jpg', title: 'Red Fort Campaign', desc: 'Historic Site Performance' },
    { id: 5, category: 'ngo', src: 'assets/images/ngo/ngo_5.jpg', title: 'National Water Mission', desc: 'Public Engagement' },
    { id: 6, category: 'ngo', src: 'assets/images/ngo/ngo_6.jpg', title: 'Mental Health Matter', desc: 'Ghaziabad Nagar Nigam' },

    // Corporate & Schools (12 images)
    { id: 7, category: 'office', src: 'assets/images/office/office_1.jpg', title: 'Road Safety Skit', desc: 'School Campaign' },
    { id: 8, category: 'office', src: 'assets/images/office/office_2.jpg', title: 'International Yoga Day', desc: 'Corporate Event' },
    { id: 9, category: 'office', src: 'assets/images/office/office_3.jpg', title: 'School Wellness', desc: 'Student Outreach' },
    { id: 10, category: 'office', src: 'assets/images/office/office_4.jpg', title: 'Axis Bank Campaign', desc: 'Financial Literacy' },
    { id: 11, category: 'office', src: 'assets/images/office/office_5.jpg', title: 'Community Participation', desc: 'School Outreach' },
    { id: 12, category: 'office', src: 'assets/images/office/office_6.jpg', title: 'School Courtyard', desc: 'Interactive Play' },
    { id: 13, category: 'office', src: 'assets/images/office/office_7.jpg', title: 'Consumer Rights', desc: 'Market Activation' },
    { id: 14, category: 'office', src: 'assets/images/office/office_8.jpg', title: 'Village Outreach', desc: 'Rural Awareness' },
    { id: 15, category: 'office', src: 'assets/images/office/office_9.jpg', title: 'Construction Safety', desc: 'Maruti Suzuki Campaign' },
    { id: 16, category: 'office', src: 'assets/images/office/office_10.jpg', title: 'Foundation Day', desc: 'Bureau of Indian Standards' },
    { id: 17, category: 'office', src: 'assets/images/office/office_11.jpg', title: 'Coal India Event', desc: 'Corporate Performance' },
    { id: 18, category: 'office', src: 'assets/images/office/office_12.jpg', title: 'Gender Summit', desc: 'Grameen Foundation' },

    // Ad Shoots & Brands (10 images)
    { id: 19, category: 'brand', src: 'assets/images/brand/brand_1.jpg', title: 'Professional Shoot', desc: 'Studio Setup' },
    { id: 20, category: 'brand', src: 'assets/images/brand/brand_2.jpg', title: 'Outdoor Production', desc: 'On-Location' },
    { id: 21, category: 'brand', src: 'assets/images/brand/brand_3.jpg', title: 'Medical Scene', desc: 'Cinematic Ad' },
    { id: 22, category: 'brand', src: 'assets/images/brand/brand_4.jpg', title: 'Green Screen', desc: 'VFX Setup' },
    { id: 23, category: 'brand', src: 'assets/images/brand/brand_5.jpg', title: 'Team Meeting', desc: 'Pre-production' },
    { id: 24, category: 'brand', src: 'assets/images/brand/brand_6.jpg', title: 'Director', desc: 'Vanity Van' },
    { id: 25, category: 'brand', src: 'assets/images/brand/brand_7.jpg', title: 'Lighting Check', desc: 'Studio Production' },
    { id: 26, category: 'brand', src: 'assets/images/brand/brand_8.jpg', title: 'Caravan', desc: 'Artist Transit' },
    { id: 27, category: 'brand', src: 'assets/images/brand/brand_9.jpg', title: 'Studio Rig', desc: 'Camera Setup' },
    { id: 28, category: 'brand', src: 'assets/images/brand/brand_10.jpg', title: 'Outdoor Direction', desc: 'On-Location' },

    // Theatre Plays (9 images)
    { id: 29, category: 'theatre', src: 'assets/images/theatre/theatre_1.jpg', title: 'Stage Performance', desc: 'Classic Play' },
    { id: 30, category: 'theatre', src: 'assets/images/theatre/theatre_2.jpg', title: 'Monologue', desc: 'Intense Drama' },
    { id: 31, category: 'theatre', src: 'assets/images/theatre/theatre_3.jpg', title: 'Emotional Scene', desc: 'Stage Production' },
    { id: 32, category: 'theatre', src: 'assets/images/theatre/theatre_4.jpg', title: 'Prop Work', desc: 'Creative Stage' },
    { id: 33, category: 'theatre', src: 'assets/images/theatre/theatre_5.jpg', title: 'Ensemble Cast', desc: 'Live Theatre' },
    { id: 34, category: 'theatre', src: 'assets/images/theatre/theatre_6.jpg', title: 'Classical Dance', desc: 'Cultural Production' },
    { id: 35, category: 'theatre', src: 'assets/images/theatre/theatre_7.jpg', title: 'Press & Media', desc: 'Hindustan Times Feature' },
    { id: 36, category: 'theatre', src: 'assets/images/theatre/theatre_8.jpg', title: 'Spotlight Scene', desc: 'Stage Play' },
    { id: 37, category: 'theatre', src: 'assets/images/theatre/theatre_9.jpg', title: 'Award Ceremony', desc: 'Felicitation' }
];

const portfolioGrid = document.getElementById('portfolioGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderPortfolio(filter = 'ngo') {
    portfolioGrid.innerHTML = '';
    
    let filteredData = portfolioData.filter(item => item.category === filter);

    // Standard rectangular grid rendering
    filteredData.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'portfolio-item';
        
        div.innerHTML = `
            <img src="${item.src}" alt="${item.title}" loading="lazy">
            <div class="portfolio-overlay">
                <h4>${item.title}</h4>
                <span>${item.desc}</span>
            </div>
        `;

        div.addEventListener('click', () => openLightbox(filteredData, index));
        portfolioGrid.appendChild(div);
    });
}

// Initial render
renderPortfolio();

// Filtering
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderPortfolio(btn.getAttribute('data-filter'));
    });
});

/* ==========================================================================
   Lightbox Logic
   ========================================================================== */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDesc = document.getElementById('lightboxDesc');
const btnPrev = document.getElementById('lightboxPrev');
const btnNext = document.getElementById('lightboxNext');
const btnClose = document.getElementById('lightboxClose');

let currentLightboxData = [];
let currentIndex = 0;

function openLightbox(data, index) {
    currentLightboxData = data;
    currentIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; 
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function updateLightboxContent() {
    const item = currentLightboxData[currentIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = item.desc;
}

function showNext() {
    currentIndex = (currentIndex + 1) % currentLightboxData.length;
    updateLightboxContent();
}

function showPrev() {
    currentIndex = (currentIndex - 1 + currentLightboxData.length) % currentLightboxData.length;
    updateLightboxContent();
}

if (btnClose && btnNext && btnPrev) {
    btnClose.addEventListener('click', closeLightbox);
    btnNext.addEventListener('click', showNext);
    btnPrev.addEventListener('click', showPrev);

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
    });

    let touchStartX = 0;
    lightbox.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});

    lightbox.addEventListener('touchend', e => {
        const touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX - 50) showNext();
        if (touchEndX > touchStartX + 50) showPrev();
    }, {passive: true});
}
