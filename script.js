// Toggle navbar
let menuIcon = document.querySelector('#small-menu');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-sort-asc');
    navbar.classList.toggle('active');
}


// Scroll section active link
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset =  sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active')
            })
        }
    })

    // remove toggle and navbar
    menuIcon.classList.remove('fa-sort-asc');
    navbar.classList.remove('active');
}
