const navMobile = document.querySelector(".navMobile");
const navPc = document.querySelector(".navPC");
const navWrapper = document.querySelector(".navWrapper");

window.addEventListener("scroll", (e) => {
  const scrollPosition = document.documentElement.scrollTop;

  //mobile navbar animation
  if (navMobile) {
    if (scrollPosition > 90) {
      navMobile.style.setProperty("transform", "translateY(70px)");
    } else {
      navMobile.style.setProperty("transform", "translateY(0px)");
    }
  }
  //pc navbar animation
  if (scrollPosition > 96) {
    navPc.style.top = "20px";
    navWrapper.style.boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
  } else {
    navPc.style.top = "0px";
    navWrapper.style.boxShadow = null;
  }
});
