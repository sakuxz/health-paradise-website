require('index.scss');
$(function () {
  $('[data-rel^=lightcase]').lightcase();
  $('.expend-btn').each(function(){
    $(this).data("h", $("#"+$(this).data("id"))[0].offsetHeight );
    $("#"+$(this).data("id")).css({
      height: 0,
      opacity: 0
    });
    $(this).click(function() {
      if($("#"+$(this).data("id")).css("height") === '0px'){
        $("#"+$(this).data("id")).css({
          height: $(this).data("h"),
          opacity: 1
        });
      }else{
        $("#"+$(this).data("id")).css({
          height: 0,
          opacity: 0
        });
      }
    });
  });

  
});
