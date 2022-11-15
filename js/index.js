// import anime from "./anime";

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

const reactLogoEl = document.getElementById("react");

const animate = (el) => {
  el.style.tran;
};
reactLogoEl.addEventListener("mouseenter", () => animate(reactLogoEl));

anime({
  targets: reactLogoEl,
  translateX: 270
});