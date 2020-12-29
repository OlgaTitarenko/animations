import Home from './Home.js';
import About from './About.js';
import Works from './Works.js';
const cursor = document.querySelector('.cursor');

function isMobile() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    cursor.style.display = 'none';
    return null;
  }

  function moveCursor(e) {
    const {
      clientX: x,
      clientY: y
    } = e;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
  }

  function mouse() {
    window.addEventListener('mousemove', moveCursor);
  }

  ;
  window.removeEventListener('mousemove', moveCursor);
  mouse();
}

isMobile();

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);
  return Object.fromEntries(keys.map((key, i) => {
    return [key, values[i]];
  }));
};

const navigateTo = url => {
  window.scrollTo(0, 0);
  document.querySelector('#app').classList.remove('hide');
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [{
    path: "/",
    view: Home
  }, {
    path: "/works/:id",
    view: Works
  }, {
    path: "/about",
    view: About
  }];
  const potentialMatches = routes.map(route => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
      isMatch: location.pathname === route.path
    };
  });
  let match = potentialMatches.find(potentialMatche => potentialMatche.result !== null);

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname]
    };
  }

  const view = new match.route.view(getParams(match));
  document.querySelector('#app').innerHTML = await view.getHtml();
  view.mainFunction();
};

window.removeEventListener('popstate', router);
window.addEventListener('popstate', router);
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      document.querySelector('#app').classList.add('hide');
      setTimeout(() => navigateTo(e.target.href), 1000);
    } else if (e.target.parentNode.matches("[data-link]")) {
      document.querySelector('#app').classList.add('hide');
      setTimeout(() => navigateTo(e.target.parentNode.dataset.url), 1000);
    }
  });
  router();
});