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
const reactLogo = document.querySelector("#react");

const loopRotate = anime({
  targets: reactLogo,
  loop: true,
  duration: 4000,
  rotate: "1turn",
  easing: "linear",
});

// const scaleEl = anime({
//   targets: reactLogoEl,
//   duration: 1000,
//   scale: 2,
//   easing: "linear",
// });

loopRotate.start;

const h = (el) => {
  loopRotate.reverse();
};

const l = (el) => {
  loopRotate.reverse();
};

// animation.seek(animation.duration);

reactLogoEl.addEventListener("mouseover", () => h(reactLogo));
reactLogoEl.addEventListener("mouseleave", () => l(reactLogo));
