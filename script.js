const menuBtn = document.getElementById('menubtn');
const menuList = document.getElementById('menuList');

menuBtn.addEventListener('click', ()=>{
    if(menuList.style.display === 'none' || menuList.style.display === '' ){
        menuList.style.display = 'flex';
    }
    else{
        menuList.style.display = 'none';
    }

})

// const menuBtn = document.getElementById('menubtn');
// const menuList = document.getElementById('menuList');

// menuBtn.addEventListener('click', () => {
//     menuList.classList.toggle('visible');
// });


