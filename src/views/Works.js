import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.params = params;
        this.list = ['tele2', 'modular', 'concepts18', 'kish', 'quickslim', 'concepts17', 'poptube']
    }
    mainFunction () {
        this.cursorAnimation();
       // this.routerTo();
    }
    getNext () {
        let id = this.list.indexOf(this.params.id);
        if (id === (this.list.length - 1)) {
            return this.list[0]
        }
        return this.list[id + 1]; 
    }
    getPrew () {
      let id = this.list.indexOf(this.params.id);
        if (id == 0 ) {
            return this.list[this.list.length - 1];
        }
        return this.list[id - 1]
    }
    getVideo(item) {
        switch (item) {
            case 'tele2': 
                return `<video src="/build/assets/works/Tl_1.mp4" autoplay muted loop="true"></video>`
                break;
            case 'modular' :
                return `<video src="/build/assets/video/hover/Md_Hover_1x.mp4" autoplay muted loop="true"></video>`
                break;
            case 'concepts18' : 
                return `<video src="/build/assets/works/Cnc_1.mp4" autoplay muted loop="true"></video>`
                break;
            case 'kish' : 
                return `<video src="/build/assets/works/Ks_1.mp4" autoplay muted loop="true"></video>`
                break;
            case 'quickslim': 
                return `<video src="/build/assets/works/QS_1.mp4" autoplay muted loop="true"></video>`
                break;
            case 'concepts17' : 
                return `<video src="/build/assets/works/Cp_1.mp4" autoplay muted loop="true"></video>`
                break;
            case 'poptube': 
                return `<video src="/build/assets/works/Pt_1.mp4" autoplay muted loop="true"></video>`
                break;
        }
    }
    modular() {
        return `
        <div class="about-text">
            <h2><span class="about-text-space"></span>Modular — <br/>
                generative layouts for portfolio
            Website creating by dynamic modular grid and 5x2//8x10 ratio. All content isn't commercial and using by
                presenting purposes</h2>
        </div>
        <div class="works-content">
            <video src="/build/assets/works/md_1.mp4" muted controls></video>
            <img src="/build/assets/works/md_2.png" alt="" />
            <video src="/build/assets/works/md_3.mp4" autoplay muted loop="true"></video>
        </div>
        <div class="about-text bottom-text">
            <h2>Role: UX/UI Design, Animation </h2>
            <h2>2019</h2>
        </div>
        `
    }
    tele2() {
        return `
        <div class="about-text">
            <h2><span class="about-text-space"></span>TELE2 — <br/>
            app for Kazakhstan mobile provider. Updating the existing app and create an easy flow for exchanging tariff resources. 
            </h2>
        </div>
        <div class="works-content">
            <video src="/build/assets/works/Tl_1.mp4" muted controls ></video>
            <img src="/build/assets/works/Tl_2.png" alt="" />
            <img src="/build/assets/works/Tl_3.png" alt="" />
            <img src="/build/assets/works/Tl_4.png" alt="" />
        </div>
        <div class="about-text bottom-text">
            <h2>Agency:
                <a href="https://www.nullgr.com/" target="_blank" data-link-blank>
                    Nullgravity
                </a>
            </h2>
            <h2>Role: UX/UI Design, Animation </h2>
            <h2>2018</h2>
        </div>
        `
    }
    conc18() {
        return `
        <div class="about-text">
            <h2><span class="about-text-space"></span>Concepts’18 — <br/>
            non-comercial concepts. Exploring modularity and experimenting with layers & depth in layouts
            </h2>
        </div>
        <div class="works-content">
            <video src="/build/assets/works/Cnc_1.mp4" autoplay muted loop="true"></video>
            <video src="/build/assets/works/Cnc_2.mp4" autoplay muted loop="true"></video>
            <video src="/build/assets/works/Cnc_3.mp4" autoplay muted loop="true"></video>
            <video src="/build/assets/works/Cnc_4.mp4" autoplay muted loop="true"></video>
            <img src="/build/assets/works/Cnc_5.png" alt="" />
        </div>
        <div class="about-text bottom-text">
            <h2>Role: UX/UI Design, Animation </h2>
            <h2>2018</h2>
        </div>
        `
    }
    kish() {
        return `
        <div class="about-text">
            <h2><span class="about-text-space"></span>Kish — <br/>
            personal website for presenting developers skills and competencies.  
            </h2>
        </div>
        <div class="works-content">
            <video src="/build/assets/works/Ks_1.mp4" autoplay muted loop="true"></video>
            <video src="/build/assets/works/Ks_2.mp4" autoplay muted loop="true"></video>
            <img src="/build/assets/works/Ks_3.png" alt="" />
            <video src="/build/assets/works/Ks_4.mp4" muted controls></video>
            
        </div>
        <div class="about-text bottom-text">
            <h2>Role: UX/UI Design, Animation </h2>
            <h2>2017</h2>
        </div>
        `
    }
    qslim() {
        return `
        <div class="about-text">
            <h2><span class="about-text-space"></span>QuickSlim — <br/>
            running app for weight loss. It creates the best city routes, tracks your calories and makes the online community   
            </h2>
        </div>
        <div class="works-content">
            <video src="/build/assets/works/QS_1.mp4" autoplay muted loop="true"></video>
            <img src="/build/assets/works/QS_2.png" alt="" />
            <img src="/build/assets/works/QS_3.png" alt="" />
        </div>
        <div class="about-text bottom-text">
          <h2>Agency:
                <a href="https://thinkmobiles.com/" target="_blank" data-link-blank>
                    Thinkmobiles
                </a>
          </h2>
          <h2>Role: UX/UI Design, Animation </h2>
          <h2>2017</h2>
        </div>
        `
    }
    conc17() {
        return `
        <div class="about-text">
            <h2><span class="about-text-space"></span>Concepts’17 — <br/>
            half-commercial concepts for agency and portfolio. Started mixing non-regular grid, layouts and cursor effects.
            </h2>
        </div>
        <div class="works-content">
            <video src="/build/assets/works/Cp_1.mp4" autoplay muted loop="true"></video>
            <video src="/build/assets/works/Cp_2.mp4" autoplay muted loop="true"></video>
            <video src="/build/assets/works/Cp_3.mp4" autoplay muted loop="true"></video>
            <img src="/build/assets/works/Cp_4.png" alt="" />
        </div>
        <div class="about-text bottom-text">
          <h2>Role: UX/UI Design, Animation </h2>
          <h2>2017</h2>
        </div>
        `
    }
    popTube() {
        return `
        <div class="about-text">
            <h2><span class="about-text-space"></span>PopTube — <br/>
            commercial concept of publishing platform for artist. 
            </h2>
        </div>
        <div class="works-content">
            <video src="/build/assets/works/Pt_1.mp4" muted controls></video>
            <video src="/build/assets/works/Pt_2.mp4" autoplay muted loop="true"></video>
            <img src="/build/assets/works/Pt_3.png" alt="" />
            <img src="/build/assets/works/Pt_4.png" alt="" />
        </div>
        <div class="about-text bottom-text">
          <h2>Agency:
                <a href="https://thinkmobiles.com/" target="_blank" data-link-blank>
                    Thinkmobiles
                </a>
          </h2>
          <h2>Role: UX/UI Design, Animation </h2>
          <h2>2016</h2>
        </div>
        `
    }
    getSlide() {
        switch (this.params.id) {
            case 'tele2':
                return this.tele2();
                break;
            case 'modular':
                return this.modular();
                break;
            case 'concepts18': 
                return this.conc18();
                break;
            case 'kish': 
                return this.kish();
                break;
            case 'quickslim': 
                return this.qslim();
                break;
            case 'concepts17':
                return this.conc17();
                break;
            case 'poptube':
                return this.popTube();
                break;
            default:
                return 'something is wrong'
        }
    }
    async getHtml() {
        return `
        <main class="works-container slideInUp" >
            ${this.getSlide()}

            <div class="works-nav">
           
            <div data-url="/works/${this.getPrew()}" class="works-nav-prew" data-link>
              <div class="works-nav-prew-video">
                  ${this.getVideo(this.getPrew())}
              </div>
              <svg width="85" height="29" viewBox="0 0 85 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.513 5.63763e-06C17.9745 5.28775 15.5997 9.25357 13.3887 11.8974L85 11.8974L85 17.1026L13.3887 17.1026C15.5997 19.7464 17.9745 23.7123 20.513 29L16.2139 29C11.0549 22.9687 5.65029 18.5071 -1.17012e-06 15.6154L-1.36514e-06 13.3846C5.65029 10.5755 11.0549 6.11397 16.2139 6.01347e-06L20.513 5.63763e-06Z" fill="white"/>
              </svg>
              <span>Prev</span>
              
            </div>
            <div data-url="/works/${this.getNext()}"  class="works-nav-next" data-link>
              <div class="works-nav-next-video">
                  ${this.getVideo(this.getNext())}
              </div>  
              <span>Next</span>
              <svg width="85" height="29" viewBox="0 0 85 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M64.487 29C67.0255 23.7123 69.4003 19.7464 71.6113 17.1026L0 17.1026L0 11.8974L71.6113 11.8974C69.4003 9.25356 67.0255 5.28775 64.487 0L68.7861 0C73.9451 6.03134 79.3497 10.4929 85 13.3846V15.6154C79.3497 18.4245 73.9451 22.886 68.7861 29H64.487Z" fill="white"/>
              </svg>
                        
            </div>
          </div>
          
        </main>
        `
    }
}