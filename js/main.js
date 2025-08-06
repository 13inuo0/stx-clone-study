window.addEventListener("load", function () {

    // nav에 마우스 엔터 했을때 즉 호버했을때
  const nav = document.querySelector(".nav");
  const headerBg = document.querySelector(".header-bg");
  nav.addEventListener("mouseenter", function () {
    headerBg.style.height = "400px";
  });
   // nav에 마우스 리브 했을때 즉 호버를 안했을때
   nav.addEventListener("mouseleave", function () {
    headerBg.style.height = "0px";
  });
});
