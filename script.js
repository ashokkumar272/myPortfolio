// Updated IDs based on the new HTML structure
const menuBtn = document.getElementById('menu-btn');
const menuList = document.getElementById('menuList');
const menuItems = document.querySelectorAll('#menuList li a');

// Toggle the display of the menu list when the menu button is clicked
menuBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click event from propagating to the document
    if (menuList.style.display === 'none' || menuList.style.display === '') {
        menuList.style.display = 'flex';
    } else {
        menuList.style.display = 'none';
    }
});

// Close the menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !menuList.contains(e.target)) {
        menuList.style.display = 'none'; // Hide the menu
    }
});

// Close menu when a menu item is clicked (for mobile)
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuList.style.display = 'none';
    });
});

// Handle window resize to manage menu visibility
window.addEventListener('resize', () => {
    if (window.innerWidth > 860) {
        // If window is resized larger than mobile breakpoint
        // Hide mobile menu if it was open
        menuList.style.display = 'none';
    }
});