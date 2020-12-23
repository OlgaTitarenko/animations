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
                  <p><span class="about-text-space"></span>He creates web & apps services, interactive and visual experience to fill that empty space. He works at the 
                    <a href="" target="_blank" data-link>Alty, </a> where he collaborates with equally passionate people on saucy projects.    
                  </p>
                </div>
                <div class="about-text">
                  <h2><span class="about-text-space"></span>Awards & Achievements
                  </h2>
                  <p>
                    <a href="https://www.behance.net/gallery/47848749/Pop-Tube-Concept" target="_blank" data-link>
                      behance — pop tube
                    </a>
                  </p>
                  <p>
                    <a href="https://www.csswinner.com/details/kish-personal-site/11751" target="_blank" data-link>
                      csswinner — kish personal site
                    </a>
                  </p>
                  <p>
                    <a href="https://www.uplabs.com/posts/mountains-sign-in" target="_blank" data-link>
                      uplabs.best in web — mountains
                    </a>
                  </p>
                  <p>
                    <a href="https://onepagelove.com/vasyl-kish" target="_blank" data-link>
                      onepagelove.featured — kish personal site
                    </a>
                  </p>
                  <p>
                    <a href="https://www.behance.net/gallery/57207881/Quick-Slim-App" target="_blank" data-link>
                      behance.interaction — quick slim
                    </a>
                  </p>
                  <p>
                    <a href="https://www.indigoawards.com/winners/545" target="_blank" data-link>
                      indigoawards — kish personal site
                    </a>
                  </p>
                </div>
                <div class="about-text about-text_links">
                  <h2><span class="about-text-space"></span>Contacts
                  </h2>
                  <p>
                    <a href="mailto:vs@senevych.design" target="_blank" data-link> vs@senevych.design </a>
                  </p>                
                  <p>
                    <a href="https://www.instagram.com/v.senevych/" target="_blank" data-link>Instagram</a>, 
                    <a href="https://www.linkedin.com/in/senevych/" target="_blank" data-link>LinkedIn</a>, 
                    <a href="https://www.facebook.com/senevych/" target="_blank" data-link>Facebook</a>, 
                    <a href="https://www.behance.net/senevych" target="_blank" data-link>Behance</a>, 
                    <a href="https://dribbble.com/senevych" target="_blank" data-link>Dribbble</a>, 
                    <a href="https://vimeo.com/senevych" target="_blank" data-link>Vimeo</a>
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