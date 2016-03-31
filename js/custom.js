$(function(){
  "use strict";

    $(document).ready(function(){
      $('body').scrollspy({target: ".navbar", offset: 50});
      $("#navbar a").on('click', function(event) {
        event.preventDefault();

        // Store hash
        var hash = this.hash;
        // Store navbar height
        var startY = $(".navbar").height() * 2;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      });
    });
    //above code is from http://www.w3schools.com/bootstrap/bootstrap_ref_js_scrollspy.asp
/**
 * from stackoverflow: http://stackoverflow.com/questions/29646622/set-bootstrap-navbar-transparency-on-scroll
 */
    function checkScroll(){
        var startY = $('.navbar').height() * 2;

        if($(window).scrollTop() > startY){
            $('.navbar').addClass("scrolled");
        }else{
            $('.navbar').removeClass("scrolled");
        }
    }

    if($('.navbar').length > 0){
        $(window).on("scroll load resize", function(){
            checkScroll();
        });
    }

});
