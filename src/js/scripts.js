// 메뉴페이지 이미지 슬라이드
$(document).ready(function () {
  var num = 0;
  let left = 0;
  setInterval(function () {
    if (num < 2) {
      num++;
      left -= 390;
      $(".banner .banner__list").css("transform", `translate(${left}px)`);
      $(".banner .banner__list").css("transition", `all .5s`);
    } else {
      num = 0;
      left = 0;
      $(".ad .ad__list").css("transform", "translate(0)");
    }
  }, 3000);
});
// 메뉴페이지 이미지 슬라이드
$(document).ready(function () {
  var num = 0;
  let left = 0;
  setInterval(function () {
    
    if (num < 2) {
      num++;
      left -= 390;
      $(".ad .ad__list").css("transform", `translate(${left}px)`);
      $(".ad .ad__list").css("transition", `all .5s`);
    } else {
      num = 0;
      left = 0;
      $(".ad .ad__list").css("transform", "translate(0)");
    }
  }, 3000);
});
