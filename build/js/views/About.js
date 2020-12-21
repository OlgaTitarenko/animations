import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
    }
    mainFunction = () =>  {
       this.cursorAnimation();
       
    }
    
                 
    async getHtml() {
        return `
        <main class="about-container slideInUp" data-page="about">

<div class='wrapper'>
      <section class="section parallax bg1">
        <div class='about-info'>
        <div class="about-text">
        <p><span class="about-text-space"></span>Vitali Senevych is
          the digital designer interested
          in pop-culture, alternatives, music
          and motion.
        </p>
        <p><span class="about-text-space"></span>He creates web & apps services, interactive and visual experience to fill that empty space. He works at the Alty, where he collaborates with equally passionate people on saucy projects.    
        </p>
      </div>
      <div class="about-text">
        <h2><span class="about-text-space"></span>Awards & Achievements
        </h2>
        <p>
          behance — pop tube
        </p>
        <p>
          csswinner — kish personal site
        </p>
        <p>
          uplabs.best in web — mountains
        </p>
        <p>
          onepagelove.featured — kish personal site
        </p>
        <p>
          behance.interaction — quick slim
        </p>
        <p>
          indigoawards — kish personal site
        </p>
      </div>
      <div class="about-text about-text_links">
        <h2><span class="about-text-space"></span>Contacts
        </h2>
        <p>
          <a href="mailto:vs@senevych.design" target="_blank"> vs@senevych.design </a>
        </p>                
        <p>
          <a href="https://www.instagram.com/v.senevych/" target="_blank">Instagram</a>, 
          <a href="https://www.linkedin.com/in/senevych/" target="_blank">LinkedIn</a>, 
          <a href="https://www.facebook.com/senevych/" target="_blank">Facebook</a>, 
          <a href="https://www.behance.net/senevych" target="_blank">Behance</a>, 
          <a href="https://dribbble.com/senevych" target="_blank">Dribbble</a>, 
          <a href="https://vimeo.com/senevych" target="_blank">Vimeo</a>
        </p>
        <p>
          Kyiv, Ukraine
        </p>
      </div>
        </div>
      </section>
</div>


        
        
        
    </main>
        `;
    }
}