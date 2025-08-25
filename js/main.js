window.addEventListener("load", function () {
  // 모든 a태그 기본 동작 막기
  const links = this.document.querySelectorAll("a");
  links.forEach(function (lnk) {
    // console.log(link);
    // 내장태그 e 또는 event로 인식한다.
    lnk.addEventListener("click", function (event) {
      // 기본동작 막기 - 위로가기 방지
      event.preventDefault();
    });
  });

  // 각기 요소를 변수에 담아놓는다.
  const nav = document.querySelector(".nav");
  const headerBg = document.querySelector(".header-bg");
  // nav에 마우스 엔터 했을때 즉 호버했을때
  nav.addEventListener("mouseenter", function () {
    headerBg.style.height = "400px";
  });
  // nav에 마우스 리브 했을때 즉 호버를 안했을때
  nav.addEventListener("mouseleave", function () {
    headerBg.style.height = "0px";
  });



  // 비주얼 버튼

});
