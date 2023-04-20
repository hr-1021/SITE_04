$(function () {
  $('.hamburger').on('click', function () {
    if ($('.hamburger, #navi').hasClass('active')) {
      $('.hamburger, #navi').removeClass('active');
    } else {
      $('.hamburger, #navi').addClass('active');
    }
  });

  /*=================================================
  Inview（画面に表示されたタイミングで処理を実行）
  ===================================================*/
  // BBBが選ばれる理由（スライド左）
  $('.inview-slide-left').on('inview', function (event, isInView) {
    if (isInView) {
      // 要素が表示されたらslide-leftクラスを追加
      $(this).stop().addClass('slide-left');
    }
    // else {
    //   $(this).stop().removeClass('slide-left');
    // }
  });
  // BBBが選ばれる理由（スライド右）
  $('.inview-slide-right').on('inview', function (event, isInView) {
    if (isInView) {
      // 要素が表示されたらslide-rightクラスを追加
      $(this).stop().addClass('slide-right');
    }
    // else {
    //   $(this).stop().removeClass('slide-right');
    // }
  });

  // 受験生の声（ふきだし）
  $('.inview-balloon').on('inview', function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass('balloon');
    }
    // else {
    //   $(this).stop().removeClass('balloon');
    // }
  });
});