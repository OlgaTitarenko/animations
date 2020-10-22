
'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),
            new Route('about', 'about.html'),
            new Route('works?:id', 'works.html'),

        ]);

    }
    init();

    function homeFunction() {
        let firstTime = -1;
        const main = app.querySelector('main');

        const link = main.querySelectorAll('h2 > .hover-this');
        const elements = main.querySelectorAll('.element');

        function animateit(e) {
            cursor.classList.add("cursor-hover");
    
            const index = e.target.dataset.item;
            const hoverVideo = elements[index].querySelector('video');
    
            if (e.type === 'mousemove') {
                if (elements[index].classList.contains('hide')) {
                    elements[index].classList.remove('hide')
                }
                if (firstTime != -1 && firstTime != index) {
                    elements[index].classList.add('show');
                }
                elements[index].classList.add('active');
                if (hoverVideo) {
                    hoverVideo.play();
                }
            }
            if (e.type === 'mouseleave') {
                cursor.classList.remove("cursor-hover");
                if (firstTime != -1) {
                    elements[firstTime].classList.add('hide');
                    elements[index].classList.remove('show');
                }
                elements[index].classList.remove('active');
                if (hoverVideo) {
                    hoverVideo.pause();
                    hoverVideo.currentTime = 0;
                }
    
    
            }
            firstTime = index;
        }

        function moveCursorHome (e) {
            if (!e.target.classList.contains('hover-this')) {
                if (firstTime !== -1) {
                    elements[firstTime].classList.remove('hide');
                    firstTime = -1;
                }
    
            }
        }
        link.forEach(b => b.removeEventListener('mousemove', animateit));
        link.forEach(b => b.removeEventListener('mouseleave', animateit));
        window.removeEventListener('mousemove', moveCursorHome);


        link.forEach(b => b.addEventListener('mousemove', animateit));
        link.forEach(b => b.addEventListener('mouseleave', animateit));
        window.addEventListener('mousemove', moveCursorHome);
    }

    function aboutFunction() {
        const main = app.querySelector('main');
        const link = main.querySelectorAll('a');
        const imageP = main.querySelector('#parallax-img');

        function animateit(e) {
            cursor.classList.add("cursor-hover");
            if (e.type === 'mouseleave') {
                cursor.classList.remove("cursor-hover");
            }
        }

        function parallaxImg() {
            const value = window.scrollY;
            imageP.style.top = 0.6*value + 'px';
        }
        link.forEach(b => b.removeEventListener('mousemove', animateit));
        link.forEach(b => b.removeEventListener('mouseleave', animateit));
        window.removeEventListener('scroll',parallaxImg);

        link.forEach(b => b.addEventListener('mousemove', animateit));
        link.forEach(b => b.addEventListener('mouseleave', animateit));
        window.addEventListener('scroll',parallaxImg);
       
    }

    function worksFunction() {
        const main = app.querySelector('main');
        const prev = main.querySelector('.prev');
        const next = main.querySelector('.next');
        let slideIndex = 1;

        showSlides(slideIndex);
        prev.removeEventListener('click', minusSlides);
        next.removeEventListener('click', plusSlides);

        prev.addEventListener('click', minusSlides);
        next.addEventListener('click', plusSlides);
    
        function plusSlides() {
            showSlides(slideIndex += 1);
        }
        function minusSlides() {
            showSlides(slideIndex -= 1);
        }
    
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
    
        function showSlides(n) {
            var i;
            var slides = main.getElementsByClassName("mySlides");
            console.log(slides);
            if (n > slides.length) {slideIndex = 1}    
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
      
            slides[slideIndex-1].style.display = "block";  
        }

    }
    
    function checkPage() {
        const main = app.querySelector('main');
        if (main.classList.contains('home-container')) {
            homeFunction();
        }
        if (main.classList.contains('about-container')) {
            aboutFunction();
        }
        if (main.classList.contains('works-container')) {
            worksFunction();
        }

    }

    const app = document.getElementById('app');
    const cursor = document.querySelector('.cursor');
    app.removeEventListener('DOMNodeInserted', checkPage);
    app.addEventListener('DOMNodeInserted', checkPage);

    function moveCursor(e) {
        const { pageX: x, pageY: y } = e;
       
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';

    }
    function mouse() {
        window.addEventListener('mousemove', moveCursor);
    };
    window.removeEventListener('mousemove', moveCursor);

    mouse();

}());
        


/*
function showPage(event) {
    const pages = document.querySelectorAll('main');
    pages.forEach(page =>  {if (event.target.dataset.page === page.dataset.page) {
        page.hidden=false;
        page.classList.add('slideInUp')
    } else {
        page.hidden=true;
        page.classList.remove('slideInUp');
    }
    });


    //console.log(event.target.dataset.page);
}
link.forEach(b => b.removeEventListener('mousemove', animateit));
link.forEach(b => b.removeEventListener('mouseleave', animateit));
window.removeEventListener('mousemove', moveCursor);*/