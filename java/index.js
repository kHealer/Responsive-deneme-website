$(function(){

  
      $(".close").click(function(){
       
        $("#mobile-form").css("display","none");

      });
 

      pagesized = $(window).innerWidth() / 30; // Proportionate font size to page
      pagesized = Math.max(pagesized, 14); // Set size to be no less than 14 px
      pagesized = Math.min(pagesized, 60); // & No greater than 30 px
      $('#sol_taraf h3').css('font-size', pagesized); // Set body default font size
      /* */

      
      pagesized2 = $(window).innerWidth() / 30; // Proportionate font size to page
      pagesized2 = Math.max(pagesized2, 14); // Set size to be no less than 14 px
      pagesized2 = Math.min(pagesized2, 50); // & No greater than 30 px
      $('#sol_taraf2 h3').css('font-size', pagesized2); // Set body default font size
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop:true,
    margin:10,
    nav:true,
	autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    center: true,
    navText: [
	    "<i class='fa fa-angle-left'></i>",
	    "<i class='fa fa-angle-right'></i>"
	],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  });
});