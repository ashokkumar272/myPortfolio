const menuBtn = document.getElementById('menubtn');
const menuList = document.getElementById('menuList');

menuBtn.addEventListener('click', ()=>{
    if(menuList.style.display === 'none' || menuList.style.display === '' ){
        menuList.style.display = 'flex';
    }
    else{
        menuList.style.display = 'none';
    }

});
document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !menuList.contains(e.target)) {
        menuList.style.display = 'none'; // Hide the menu
    }
});

// const menuBtn = document.getElementById('menubtn');
// const menuList = document.getElementById('menuList');

// menuBtn.addEventListener('click', () => {
//     menuList.classList.toggle('visible');
// });


