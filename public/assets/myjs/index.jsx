require('index.scss');
$(function () {
  $('[data-rel^=lightcase]').lightcase();
  $('.expend-btn').each(function(){
    $("img" ,"#"+$(this).data("id")).each(function(i,e) {
      //$(this).css("transition-delay",i*0.1 + "s");
    });
    $(this).click(function() {
       $("#"+$(this).data("id")).toggleClass("vis");
    });
  });

});

// onload = function(){
//   $('.expend-btn').each(function(){
//     $(this).data("h", $("#"+$(this).data("id"))[0].offsetHeight );
//     console.log($("#"+$(this).data("id"))[0].offsetHeight);
//     $("#"+$(this).data("id")).css({
//       height: 0,
//       opacity: 0
//     });
//     $(this).click(function() {
//       if($("#"+$(this).data("id")).css("height") !==  $(this).data("h")+"px" ){
//         $("#"+$(this).data("id")).css({
//           height: $(this).data("h"),
//           opacity: 1
//         });
//       }else{
//         $("#"+$(this).data("id")).css({
//           height: 0,
//           opacity: 0
//         });
//       }
//     });
//   });
// };
