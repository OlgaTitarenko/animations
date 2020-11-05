import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
    }
    mainFunction = () =>  {
        this.cursorAnimation();
        let firstTime = -1;
        const link = document.querySelectorAll('h2 > .hover-this');
        const elements = document.querySelectorAll('.element');
        const cursor = document.querySelector('.cursor');

        const animateit = (e) => {
           
    
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
        const moveCursorHome = (e) => {
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
    async getHtml() {
        return `
        <main class="home-container">
    <div>
        <h2><a href="/works/1" class="hover-this" data-item="1">Tele2</a></h2>
        <div class="element">
            <video src="./static/assets/video/hover/Md_Hover_1x.mp4" autoplay muted loop="true"></video>
        </div>
    </div>
    <div>
        <h2><a href="/works/2" class="hover-this" data-item="0">Modular</a></h2>
        <div class="element">
            <video src="./static/assets/video/hover/Tl_Hover_1x.mp4" loop="true" autoplay muted></video>
        </div>
    </div>
    <div>
        <h2><a href="/works/3" class="hover-this" data-item="2">Concepts'18</a></h2>
        <div class="element">
            <video src="./static/assets/video/hover/Cnc_Hover_1x.mp4" loop="true" autoplay muted></video>
        </div>
    </div>
    <div>
        <h2><a href="/works/4" class="hover-this" data-item="3"> Kish </a></h2>
        <div class="element">
            <video src="./static/assets/video/hover/Ks_Hover_1x.mp4" loop="true" autoplay muted></video>
        </div>
    </div>
    <div>
        <h2><a href="/works/5" class="hover-this" data-item="4"> Quick slim</a></h2>
        <div class="element">
            <video src="./static/assets/video/hover/QS_Hover_1x.mp4" loop="true" autoplay muted></video>
        </div>
    </div>
    <div>
        <h2><a href="/works/6" class="hover-this" data-item="5">Concepts'17</a></h2>
        <div class="element">
            <video src="./static/assets/video/hover/Cp_Hover_1x.mp4" loop="true" autoplay muted></video>
        </div>
    </div>
    <div>
        <h2><a href="/works/7" class="hover-this" data-item="6"> Pop tube</a></h2>
        <div class="element">
            <video src="./static/assets/video/hover/Pt_Hover_1x.mp4" loop="true" autoplay muted></video>
        </div>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
            <filter id="glitch">

                <feTurbulence baseFrequency="0.06,0.036" numOctaves="1" seed="0" type="fractalNoise" x="0%"
                    y="0%" />

                <feColorMatrix in="warp" result="huedturb" type="hueRotate" values="90">
                    <animate attributeType="XML" attributeName="values" values="0;180;360" dur="2s"
                        repeatCount="indefinite" />
                </feColorMatrix>

                <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic"
                    in2="huedturb" x="0%" y="0%" />

            </filter>
        </defs>
    </svg>

</main>
        `;
    }
}