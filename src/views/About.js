import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
    }
    
    

    mainFunction() {
       this.cursorAnimation();

       //simpleParallax("para", 3);
      //  BackgroundCheck.init({
      //   targets: '.text',
      //   images: '.img',
      // });
      // BackgroundCheck.refresh();

      // document.querySelector('.parallax').addEventListener('scroll', () =>{ 
      //    BackgroundCheck.refresh()})
    }
    
    async getHtml() {
        return `
        <main class="about-container slideInUp" data-page="about">
          
          <div class="about-img">
            <img class="img" src="/build/assets/img/about.png" alt="" />
          </div>
          <div class="about-text">
                <p class='text'><span class="about-text-space"></span>Vitali Senevych is
                    a digital designer interested
                    in pop-culture, alternatives, music
                    and motion.
                </p>
                <p class='text'><span class="about-text-space"></span>He creates web & apps services, interactive and visual experience to fill that empty space. He works at the 
                  <a href="https://alty.co/" target="_blank" data-link-blank>Alty, </a> where he collaborates with equally passionate people on saucy projects.    
                </p>
              </div>

              <div class="about-text">
                <h2 class='text'><span class="about-text-space"></span>Aw & Achievements
                </h2>
                <p class='text'>
                  <a href="https://www.behance.net/gallery/47848749/Pop-Tube-Concept" target="_blank" data-link-blank>
                    behance — pop tube
                  </a>
                </p>
                <p class='text'>
                  <a href="https://www.csswinner.com/details/kish-personal-site/11751" target="_blank" data-link-blank>
                    csswinner — kish
                  </a>
                </p>
                <p class='text'>
                  <a href="https://www.uplabs.com/posts/mountains-sign-in" target="_blank" data-link-blank>
                    uplabs.web — mountains
                  </a>
                </p>
                <p class='text'>
                  <a href="https://onepagelove.com/vasyl-kish" target="_blank" data-link-blank>
                    onepagelove.featured — kish
                  </a>
                </p>
                <p>
                  <a href="https://www.behance.net/gallery/57207881/Quick-Slim-App" target="_blank" data-link-blank>
                    behance — quick slim
                  </a>
                </p>
                <p class='text'>
                  <a href="https://www.indigoawards.com/winners/545" target="_blank" data-link-blank>
                    indigoawards — kish
                  </a>
                </p>
              </div>

              <div class="about-text about-text_links">
                <h2 class='text'><span class="about-text-space"></span>Contacts
                </h2>
                <p class='text'>
                  <a href="mailto:vs@senevych.design" target="_blank" data-link-blank> vs@senevych.design </a>
                </p>                
                <p class='text'>
                  <a href="https://www.instagram.com/v.senevych/" target="_blank" data-link-blank>Instagram</a>, 
                  <a href="https://www.linkedin.com/in/senevych/" target="_blank" data-link-blank>LinkedIn</a>, 
                  <a href="https://www.facebook.com/senevych/" target="_blank" data-link-blank>Facebook</a>, 
                  <a href="https://www.behance.net/senevych" target="_blank" data-link-blank>Behance</a>, 
                  <a href="https://dribbble.com/senevych" target="_blank" data-link-blank>Dribbble</a>, 
                  <a href="https://vimeo.com/senevych" target="_blank" data-link-blank>Vimeo</a>
                </p>
                <p class='text'>
                  Kyiv, Ukraine
                </p>
              </div>
          



        <!--   
        <div class="parallax">
         

          <div class="about-text">
          <p><span class="about-text-space"></span>Vitali Senevych is
            the digital designer interested
            in pop-culture, alternatives, music
            and motion.
          </p>
          <p><span class="about-text-space"></span>He creates web & apps services, interactive and visual experience to fill that empty space. He works at the 
            <a href="https://alty.co/" target="_blank" data-link-blank>Alty, </a> where he collaborates with equally passionate people on saucy projects.    
          </p>
        </div>

        <div class="about-text">
          <h2><span class="about-text-space"></span>Achievements
          </h2>
          <p>
            <a href="https://www.behance.net/gallery/47848749/Pop-Tube-Concept" target="_blank" data-link-blank>
              behance — pop tube
            </a>
          </p>
          <p>
            <a href="https://www.csswinner.com/details/kish-personal-site/11751" target="_blank" data-link-blank>
              csswinner — kish personal site
            </a>
          </p>
          <p>
            <a href="https://www.uplabs.com/posts/mountains-sign-in" target="_blank" data-link-blank>
              uplabs.best in web — mountains
            </a>
          </p>
          <p>
            <a href="https://onepagelove.com/vasyl-kish" target="_blank" data-link-blank>
              onepagelove.featured — kish personal site
            </a>
          </p>
          <p>
            <a href="https://www.behance.net/gallery/57207881/Quick-Slim-App" target="_blank" data-link-blank>
              behance.interaction — quick slim
            </a>
          </p>
          <p>
            <a href="https://www.indigoawards.com/winners/545" target="_blank" data-link-blank>
              indigoawards — kish personal site
            </a>
          </p>
        </div>
        
        <div class="about-text about-text_links">
          <h2><span class="about-text-space"></span>Contacts
          </h2>
          <p>
            <a href="mailto:vs@senevych.design" target="_blank" data-link-blank> vs@senevych.design </a>
          </p>                
          <p>
            <a href="https://www.instagram.com/v.senevych/" target="_blank" data-link-blank>Instagram</a>, 
            <a href="https://www.linkedin.com/in/senevych/" target="_blank" data-link-blank>LinkedIn</a>, 
            <a href="https://www.facebook.com/senevych/" target="_blank" data-link-blank>Facebook</a>, 
            <a href="https://www.behance.net/senevych" target="_blank" data-link-blank>Behance</a>, 
            <a href="https://dribbble.com/senevych" target="_blank" data-link-blank>Dribbble</a>, 
            <a href="https://vimeo.com/senevych" target="_blank" data-link-blank>Vimeo</a>
          </p>
          <p>
            Kyiv, Ukraine
          </p>
        </div>
          </div>
        
        </section>
        
-->
 
        </main>
        `;
    }
}