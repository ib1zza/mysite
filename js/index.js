import anime from "./anime.js";

function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();

const reactLogoEl = document.querySelector(".header__logo");
const reactLogo = [...document.querySelectorAll(".react")];
const reactLogo1 = document.querySelector(".react");

console.log(reactLogo1);

const loopRotate = anime({
  targets: reactLogo,
  loop: true,
  duration: 4000,
  rotate: "1turn",
  easing: "linear",
});

loopRotate.start;

const h = (el) => {
  loopRotate.reverse();
};

const l = (el) => {
  loopRotate.reverse();
};

// animation.seek(animation.duration);

let scroll = scrollY;

const setScroll = (n) => (scroll = n);

reactLogoEl.addEventListener("mouseover", () => h(reactLogo));
reactLogoEl.addEventListener("mouseleave", () => l(reactLogo));

window.addEventListener("scroll", function () {
  setScroll(scrollY + "px");
  console.log(scroll);
  if (parseInt(scroll) > 1000) {
    console.log("true");
    
  }
});

if (parseInt(scroll) > 1000) {
  console.log("true");
}
