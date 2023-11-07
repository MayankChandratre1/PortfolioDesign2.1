 
      $(window).ready(function (e) {
        $(".home-text").css("opacity","0");
        $("body").css({
         overflow:"hidden"
        })
        $(".about-text").css("opacity","0")
         setTimeout(removeLoader, 3000);
      });
      function removeLoader() {
         $(".loader-back").fadeOut(900, function () {
            $(".loader-back").remove();
            $("body").css({
               overflowY:"scroll"
              });
            $(".home-text").animate(
                {
                    opacity:"1",
                    right:0,
                },900
            );
         });
      }

$(window).scroll(()=>{
   if($("#aboutme").offset().top <= $(window).scrollTop()){
      $(".about-text").animate(
         {
             opacity:"1",
             right:0,
         },900
     );
   }
})
