window.addEventListener("load", function () {
  // 창 닫기
  const modal = this.document.querySelector(".modal-wrap");
  const modalClose = this.document.querySelector(".modal-close");
  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // 스크롤 이벤트
  const topBtn = this.document.querySelector(".top-btn");
  this.window.addEventListener("scroll", function () {
    console.log("스크롤시작");
    // documentElement 는 전체
    if (this.document.documentElement.scrollTop > 100) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });
  //   스크롤 이동할 때 부드럽게 이동하는 코드
  topBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
