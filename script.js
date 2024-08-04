var typed = new Typed(".multiple-text" , {
    strings: ["Frontend Developer" , "Java Developer" ,"DSA Developer" , "MERN Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
})

document.addEventListener('DOMContentLoaded', function() {
    var resumeButton = document.getElementById('resume-button');
    var resumePopup = document.getElementById('resume-popup');
    var closeBtn = document.querySelector('.popup .close-btn');

    resumeButton.addEventListener('click', function() {
        resumePopup.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        resumePopup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === resumePopup) {
            resumePopup.style.display = 'none';
        }
    });
});


//       toogle icon navbar 
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
};

// NAVBAR ACTIVE SECTION 

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + "]").classList.add('active');
            });
        };
    });
    // STICKY NAVBAR 
    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);

    // remove toggle icon and nevbar when click navbar link(scroll) 
    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');

};