$(document).ready(function(){
    $('.mainlandphotovisa').on('click', function(){
      var src = $(this).attr('src');
      $('#modalImage').attr('src', src);
      $('#imageModal').fadeIn();
    });
  
    // 关闭模态框
    $('.close').on('click', function(){
      $('#imageModal').fadeOut();
    });
  
    // 点击模态框外部时关闭模态框
    $(window).on('click', function(event){
      if ($(event.target).is('.modal')) {
        $('#imageModal').fadeOut();
      }
    });
  });
  