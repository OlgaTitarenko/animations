export default class{
    constructor(params) {
       
    }
    cursorAnimation = () => {
        const cursor = document.querySelector('.cursor');
        const links = document.querySelectorAll('[data-link]');
        cursor.classList.remove("cursor-hover");
        const animateit = (e) => {
            cursor.classList.add("cursor-hover");
            if (e.type === 'mouseleave') {
                cursor.classList.remove("cursor-hover");
            }
        }
        links.forEach(b => b.removeEventListener('mousemove', animateit));
        links.forEach(b => b.removeEventListener('mouseleave', animateit));

        links.forEach(b => b.addEventListener('mousemove', animateit));
        links.forEach(b => b.addEventListener('mouseleave', animateit));
    }
    async getHtml() {
        return "";
    }
}