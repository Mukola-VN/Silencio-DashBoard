

const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const mobileOverlay = document.getElementById('mobileOverlay');

function toggleMobileMenu() {
  sidebar.classList.toggle('active');
  mobileOverlay.classList.toggle('active');
  document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : 'auto';
}

function closeMobileMenu() {
  sidebar.classList.remove('active');
  mobileOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Event listeners
menuToggle.addEventListener('click', toggleMobileMenu);
mobileOverlay.addEventListener('click', closeMobileMenu);

// Close menu on escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && sidebar.classList.contains('active')) {
    closeMobileMenu();
  }
});

// Close menu when clicking on nav items (mobile only)
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
  item.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      closeMobileMenu();
    }

    // Remove active class from all nav items
    navItems.forEach(nav => nav.classList.remove('active'));
    // Add active class to clicked item
    this.classList.add('active');
  });
});

// Theme toggle functionality (optional)
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', function () {
  // Add your theme switching logic here
  console.log('Theme toggle clicked');
});

// Handle window resize
window.addEventListener('resize', function () {
  if (window.innerWidth > 768) {
    closeMobileMenu();
  }
}); 