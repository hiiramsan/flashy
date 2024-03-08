// script to change the color of logo and navlinks when scrolled down
document.addEventListener('scroll', ()=> {
    const logo = document.getElementById('logo');
    const navBtn = document.getElementById('navBtn');
    const navbarlink = document.querySelectorAll(".navbar-link");

    if(window.scrollY > 670 && window.scrollY < 2085) {
        // logo
        logo.classList.add('scrolled');
        
        //navbar button
        navBtn.classList.remove('navBtn');
        navBtn.classList.add('scr');

        //navbar links
        navbarlink.forEach(function(link) {
            link.classList.add('scrLink');
        });

    } else {
        // logo
        logo.classList.remove('scrolled');

        // navbar button
        navBtn.classList.add('navBtn');
        navBtn.classList.remove('scr');

        //navbarlinks
        navbarlink.forEach(function(link) {
            link.classList.remove('scrLink');
        });
       
    }

    console.log(window.scrollY);
})