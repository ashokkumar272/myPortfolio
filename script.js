// Updated IDs based on the new HTML structure
const menuBtn = document.getElementById('menu-btn'); // Updated ID for the menu button
const menuList = document.getElementById('menuList'); // Menu list ID remains the same

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