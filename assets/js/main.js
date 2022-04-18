const responsiveNav =()=>{
    const menu= document.querySelector('.menu');
    const nav= document.querySelector('.nav-list');
    const navList=document.querySelectorAll('.nav-list-items')

    menu.addEventListener('click',()=>{
        nav.classList.toggle('active');
    });

    navList.forEach((list, index)=>{
        list.style.animation= `navListFade 0.5s ease forwards ${index/ 7+1.5}s`;
        
    });
}

responsiveNav();