import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
  }
  mainFunction = () => {
    this.cursorAnimation();
    this.hoverVideo();
 
  }

  hoverVideo() {
    let activeTexture = -1;
    let transitionTimer = 0;
    let to = 0;
    let from = 0;
    let first = false;

    const list = document.querySelectorAll('.hover-this');

    // set up our WebGL context and append the canvas to our wrapper
    const curtains = new Curtains({
      container: "canvas",
      watchScroll: false, // no need to listen for the scroll in this example
      pixelRatio: Math.min(1.5, window.devicePixelRatio) // limit pixel ratio for performance
    });

    // handling errors
    curtains.onError(() => {
      // we will add a class to the document body
      document.body.classList.add("no-curtains", "curtains-ready");

      // display an error message
      document.getElementById("enter-site").innerHTML = "There has been an error while initiating the WebGL context.";
    }).onContextLost(() => {
      // on context lost, try to restore the context
      curtains.restoreContext();
    });

    // get our plane element
    const planeElements = document.getElementsByClassName("multi-textures");

    const vs = `
          precision mediump float;
          // default mandatory variables
          attribute vec3 aVertexPosition;
          attribute vec2 aTextureCoord;
          uniform mat4 uMVMatrix;
          uniform mat4 uPMatrix;
          // our texture matrices
          // displacement texture does not need to use them
          uniform mat4 firstTextureMatrix;
          uniform mat4 secondTextureMatrix;
          // custom variables
          varying vec3 vVertexPosition;
          varying vec2 vTextureCoord;
          varying vec2 vFirstTextureCoord;
          varying vec2 vSecondTextureCoord;
          // custom uniforms
          uniform float uTransitionTimer;
          void main() {
              gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
              // varyings
              // use original texture coords for our displacement
              vTextureCoord = aTextureCoord;
              // use texture matrices for our videos
              vFirstTextureCoord = (firstTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
              vSecondTextureCoord = (secondTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
              vVertexPosition = aVertexPosition;
          }
      `;

    const fs = `
          precision mediump float;
          varying vec3 vVertexPosition;
          varying vec2 vTextureCoord;
          varying vec2 vFirstTextureCoord;
          varying vec2 vSecondTextureCoord;
          // custom uniforms
          uniform float uTransitionTimer;
          uniform float uFrom;
          uniform float uTo;
          // our textures samplers
          // notice how it matches our data-sampler attributes
          uniform sampler2D firstTexture;
          uniform sampler2D secondTexture;
          uniform sampler2D thirdTexture;
          uniform sampler2D fourthTexture;
          uniform sampler2D fifthTexture;
          uniform sampler2D sixthTexture;
          uniform sampler2D seventhTexture;
          uniform sampler2D displacement;

          vec4 getTextureByIndex(float index, vec2 vUv){
            vec4 result;
            if(index==0.){
                result = texture2D(firstTexture,vUv);
            }
            if(index==1.){
                result = texture2D(secondTexture,vUv);
            }
            if(index==2.){
                result = texture2D(thirdTexture,vUv);
            }
            if(index==3.){
              result = texture2D(fourthTexture,vUv);
            }
            if(index==4.){
              result = texture2D(fifthTexture,vUv);
            }
            if(index==5.){
              result = texture2D(sixthTexture,vUv);
            }
            if(index==6.){
              result = texture2D(seventhTexture,vUv);
            }
            return result;
        }


          void main() {
              // our displacement texture
              // i'll be using the fragment shader seen here : https://tympanus.net/codrops/2018/04/10/webgl-distortion-hover-effects/
              vec4 displacementTexture = texture2D(displacement, vTextureCoord);
              float displacementFactor = (cos(uTransitionTimer / (60.0 / 3.141592)) + 1.0) / 2.0;
              float effectFactor = 1.0;
              
              vec2 firstDisplacementCoords = vec2(vFirstTextureCoord.x - (1.0 - displacementFactor) * (displacementTexture.r * effectFactor), vFirstTextureCoord.y);
              vec2 secondDisplacementCoords = vec2(vSecondTextureCoord.x + displacementFactor * (displacementTexture.r * effectFactor), vSecondTextureCoord.y);
              vec4 firstDistortedColor = getTextureByIndex(uFrom, firstDisplacementCoords);
              vec4 secondDistortedColor = getTextureByIndex(uTo, secondDisplacementCoords);
              vec4 finalColor = mix(secondDistortedColor, firstDistortedColor, displacementFactor);
              // handling premultiplied alpha
              finalColor = vec4(finalColor.rgb * finalColor.a, finalColor.a);
              gl_FragColor = finalColor;
          }
      `;

    // some basic parameters
    const params = {
      vertexShader: vs,
      fragmentShader: fs,
      uniforms: {
        transitionTimer: {
          name: "uTransitionTimer",
          type: "1f",
          value: 0,
        },
        from: {
          name: "uFrom",
          type: "1f",
          value: 0,
        },
        to: {
          name: "uTo",
          type: "1f",
          value: 0,
        }
      }
    };

    const multiTexturesPlane = new Plane(curtains, planeElements[0], params);

    // create our plane
    multiTexturesPlane.onReady(() => {
      // display the button
      document.body.classList.add("curtains-ready");

      // click to play the videos
      
      function animateVideo(arg) {

        let element;
        if (arg.classList) {
          element = arg;
        } else {
          element = arg.target
        }

        if (activeTexture === -1) {
          document.body.classList.add("video-started");
          activeTexture = +element.dataset.item;

          multiTexturesPlane.playVideos();
          transitionTimer = 0;

          multiTexturesPlane.uniforms.to.value = activeTexture;
          curtains.nextRender(() => {
            multiTexturesPlane.videos.forEach((video, key) => {
              if (key !== activeTexture) {
                video.pause();
              }
            });
          });
        } else {
          if (activeTexture === +element.dataset.item) {
            return null;
          }

          from = activeTexture;
          multiTexturesPlane.uniforms.from.value = activeTexture;

          activeTexture = +element.dataset.item;
          // transitionTimer = 0;
          multiTexturesPlane.uniforms.to.value = activeTexture;
          first = true;
          multiTexturesPlane.videos[activeTexture].play();
        }
      }

      function hideVideo(arg) {
        let element;
        if (arg.classList) {
          element = arg;
        } else  {
          element = arg.target
        }
        if (element.classList.contains('hover-this')) {
          return null;
        }
        if (activeTexture !== -1) {
          document.body.classList.remove("video-started");
          activeTexture = -1;
        }
      }

      
      let timer = null;

      function scrollCursor(e) {
        if(timer !== null) {
          clearTimeout(timer);
        }
        timer = setTimeout(function() {
          const cursor = document.querySelector('.cursor');
         
          const element = document.elementFromPoint(parseInt(cursor.style.left), parseInt(cursor.style.top));

          if (element.classList.contains('hover-this')) {
            animateVideo(element);
          } else {
            hideVideo(element);
          }
        }, 150);
      }

      list.forEach(item => {
        item.removeEventListener("mousemove", animateVideo);
        //item.addEventListener('scroll', scrollCursor);
      });
      document.querySelector('.home-container').removeEventListener('mousemove', hideVideo)
      window.removeEventListener('scroll',scrollCursor);

      list.forEach(item => {
        item.addEventListener("mousemove", animateVideo);
        //item.addEventListener('scroll', scrollCursor);
      });
      document.querySelector('.home-container').addEventListener('mousemove', hideVideo)
      window.addEventListener('scroll',scrollCursor);

    }).onRender(() => {

      // if(activeTexture === 1) {
      //     // lerp values to smoothen animation
      //     transitionTimer = (1 - 0.05) * transitionTimer + 0.05 * 60;

      //     // transition is over, pause previous video
      //     if(transitionTimer >= 59 && transitionTimer !== 60) {
      //         transitionTimer = 60;
      //         multiTexturesPlane.videos[0].pause();
      //     }
      // }
      // else {
      //     // lerp values to smoothen animation
      //     transitionTimer = (1 - 0.05) * transitionTimer;

      //     // transition is over, pause previous video
      //     if(transitionTimer <= 1 && transitionTimer !== 0) {
      //         transitionTimer = 0;
      //         multiTexturesPlane.videos[1].pause();
      //     }
      // }

      // update our transition timer uniform

      if (first && transitionTimer === 60) {
        first = false;
        transitionTimer = 0;
      }
      transitionTimer = (1 - 0.05) * transitionTimer + 0.05 * 60;

      // transition is over, pause previous video
      if (transitionTimer >= 59 && transitionTimer !== 60) {
        transitionTimer = 60;
        multiTexturesPlane.videos.forEach((video, key) => {
          if (key !== activeTexture) {
            video.pause();
          }
        });
      }

      multiTexturesPlane.uniforms.transitionTimer.value = transitionTimer;
    });
  }

  async getHtml() {
    return `
        <main class="home-container">
          
          <div id="page-wrap">

            <div id="canvas"></div>

            <div class="list ">
              <h2>
                <a href="/works/1" class="hover-this" data-item="0" data-link>Tele2</a>
              </h2>
              <h2>
                <a href="/works/2" class="hover-this" data-item="1" data-link>Modular</a>
              </h2>
              <h2>
                <a href="/works/3" class="hover-this" data-item="2" data-link>Concepts'18</a>
              </h2>
              <h2>
                <a href="/works/4" class="hover-this" data-item="3" data-link>Kish</a>
              </h2>
              <h2>
                <a href="/works/5" class="hover-this" data-item="4" data-link>Quick slim</a>
              </h2>
              <h2>
                <a href="/works/6" class="hover-this" data-item="5" data-link>Concepts'17</a>
              </h2>
              <h2>
                <a href="/works/7" class="hover-this" data-item="6" data-link>Pop tube</a>
              </h2>
            </div>

            <div class="multi-textures-wrapper">
              <div class="flex-wrapper multi-textures">
                <img src="build/assets/img/displacement.jpg" data-sampler="displacement">
                <video src="./build/assets/video/hover/Md_Hover_1x.mp4" data-sampler="firstTexture"></video>
                <video src="./build/assets/video/hover/Tl_Hover_1x.mp4" data-sampler="secondTexture"></video>
                <video src="./build/assets/video/hover/Cnc_Hover_1x.mp4" data-sampler="thirdTexture"></video>
                <video src="./build/assets/video/hover/Ks_Hover_1x.mp4" data-sampler="fourthTexture"></video>
                <video src="./build/assets/video/hover/QS_Hover_1x.mp4" data-sampler="fifthTexture"></video>
                <video src="./build/assets/video/hover/Cp_Hover_1x.mp4" data-sampler="sixthTexture"></video>
                <video src="./build/assets/video/hover/Pt_Hover_1x.mp4" data-sampler="seventhTexture"></video>
              </div>
            </div>
            
              <span id="enter-site">
              </span>
          </div>

        </main>
        `;
  }
}
