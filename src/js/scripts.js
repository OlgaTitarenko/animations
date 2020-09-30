let firstTime = -1;
const link = document.querySelectorAll('h2 > .hover-this');
const cursor = document.querySelector('.cursor');
const elements = document.querySelectorAll('.element');

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

function moveCursor(e) {
    const { pageX: x, pageY: y } = e;
    if (!e.target.classList.contains('hover-this')) {
        if (firstTime !== -1) {
            elements[firstTime].classList.remove('hide');
            firstTime = -1;
        }
        
    }
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';

}

function mouse() {

    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', moveCursor);


};

mouse();

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
}/*
link.forEach(b => b.removeEventListener('mousemove', animateit));
link.forEach(b => b.removeEventListener('mouseleave', animateit));
window.removeEventListener('mousemove', moveCursor);*/