 // Animacja scrolla, dodanie hash do adresu

 		$(function($) {
			$('a[href^="#"]').click(function (e) {
				e.preventDefault(); 
				var target = $(this).attr('href'); 
				$('body,html').animate({
					scrollTop: $(target).offset().top, 
				}, 1000);
				// location.hash = target;
				$('.navbar-collapse').collapse('hide'); 
				$('.navbar-toggle').removeClass('active'); 
			});
		});

		$(function() { 
			$(".navbar-toggle").on("click", function () {
    		$(this).toggleClass("active");
			});
		});


    $(document).ready(function() {
    $().fancybox({

    });
});


$(document).ready(function(){
    $('.viewMoreGallery').click(function(event){
        $('.hidden-content-gallery').slideToggle();
        $(".viewMoreGallery").html($(this).text() == 'show less' ? 'view more' : 'show less');
    });
});
$(document).ready(function(){
    $('.viewMoreBlog').click(function(event){
        $('.hidden-content-blog').slideToggle();
         $(".viewMoreBlog").html($(this).text() == 'show less' ? 'view more' : 'show less');
    });

});

