$(document).ready(function(){
    // 点击图片放大
    $('.mainlandvisaphoto img, .mainlandphotovisa img').on('click', function(){
      $(this).toggleClass('enlarged');
    });
  
    // 鼠标离开时恢复正常大小
    $('.mainlandvisaphoto img, .mainlandphotovisa img').on('mouseleave', function(){
      if ($(this).hasClass('enlarged')) {
        $(this).removeClass('enlarged');
      }
    });
  });
  