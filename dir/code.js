function cursor() {

    const link = document.querySelectorAll('h2 > .hover-this');
    const cursor = document.querySelector('.cursor');

    function moveCursor(e) {

        const { pageX: x, pageY: y } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';

    }
    function animateit(e) {
        const item = this;
        cursor.classList.add("cursor-hover");
        if (e.type === 'mouseleave') {
            cursor.classList.remove("cursor-hover");
        }
    }
    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', moveCursor);
};

cursor();

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
