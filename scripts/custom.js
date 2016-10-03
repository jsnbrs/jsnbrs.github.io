$(function() {
  "use strict";

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
    }, 800, function() {

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });
  //above smooth scrolling is from http://www.w3schools.com/bootstrap/bootstrap_ref_js_scrollspy.asp


  function checkScroll() {
    var startY = $('.navbar').height() * 2;

    if($(window).scrollTop() > startY){
      $('.navbar').addClass("scrolled");
    } else {
      $('.navbar').removeClass("scrolled");
    }
  }

  if($('.navbar').length > 0) {
    $(window).on("scroll load resize", function(){
      checkScroll();
      });
    }
  //above navbar transparency on scroll from stackoverflow: http://stackoverflow.com/questions/29646622/set-bootstrap-navbar-transparency-on-scroll


  $('img.img-circle').hover(sourceSwap, sourceSwap);

  function sourceSwap() {
    var $this = $(this);
    var newSource = $this.data('alt-src');

    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
  }


  $('.gallery-item').hover(function () {
      $(this).find('.img-title').fadeIn(300);
  }, function() {
      $(this).find('.img-title').fadeOut(200);
  });

});
