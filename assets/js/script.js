$(document).ready(function() {
    
    
    /* Scroll on buttons */
    $('.js--scroll-to-newArrivals').click(function () {
       $('html, body').animate({scrollTop: $('.js--newArrivalSection').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-womenSection').click(function () {
       $('html, body').animate({scrollTop: $('.js--womenSection').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-menSection').click(function () {
       $('html, body').animate({scrollTop: $('.js--menSection').offset().top}, 1000); 
    });

    $('.js--scroll-to-sportsWearSection').click(function () {
       $('html, body').animate({scrollTop: $('.js--sportswearSection').offset().top}, 1000); 
    });
    
    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    


});