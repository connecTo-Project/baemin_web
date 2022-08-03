$(function () {
  var num = 0;

  setInterval(function () {
    if (num < 2) {
      num++;
      $("ul").animate(
        {
          left: "-=1200",
        },
        "slow"
      );
    } else {
      num = 0;
      $("ul").animate(
        {
          left: 0,
        },
        "slow"
      );
    }
  }, 3000);
});
