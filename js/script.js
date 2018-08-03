$( document ).ready(function() {

	

	$('.cierre_discografia_2').on('click', function(e){
			if ($('.albums_vivo_oculto').is(':hidden')) {
				$(".flecha_2").css("transform", "rotate(0deg)");	
				$('.albums_vivo_oculto').slideDown();
				if ((screen.width > 768)) {
					$('html,body').animate({
						 	scrollTop: $("#albums_vivo_visible").offset().top
					 });
				}
				e.preventDefault();
			} else if ($('.albums_vivo_oculto_2').is(':hidden')) {
				$('.albums_vivo_oculto_2').slideDown();
				if ((screen.width > 768)) {
					$('html,body').animate({
						 	scrollTop: $(".albums_vivo_oculto").offset().top
					 	});
				}
				e.preventDefault();
			}  else if ($('.albums_vivo_oculto_3').is(':hidden')) {
				$('.albums_vivo_oculto_3').slideDown();
				if ((screen.width > 768)) {
					$('html,body').animate({
						 	scrollTop: $(".albums_vivo_oculto_2").offset().top
						 });
				}
				$(".flecha_2").css("transform", "rotate(180deg)");					
				e.preventDefault();
			}  else if ($('.albums_vivo_oculto_3').is(':visible')) {
				$(".flecha_2").css("transform", "rotate(0deg)");
				if ((screen.width > 768)) {
					$('html,body').animate({
							scrollTop: $(".cierre_discografia").offset().top
						});
						$('.albums_vivo_oculto_3').slideUp();
					$('.albums_vivo_oculto_2').slideUp();
					$('.albums_vivo_oculto').slideUp();
				} else {
					$('html,body').animate({
							scrollTop: $(".cierre_discografia").offset().top
						}, -7000);
						$('.albums_vivo_oculto_3').slideUp();
					$('.albums_vivo_oculto_2').slideUp();
					$('.albums_vivo_oculto').slideUp();
				}
				
				e.preventDefault();
			}
	});

	$('.cierre_discografia').on('click', function(ev){
			if ($('.albums_oculto').is(':hidden')) {
				$(".flecha").css("transform", "rotate(0deg)");	
				$('.albums_oculto').slideDown();
				if ((screen.width > 768)) {
					$('html,body').animate({
						 	scrollTop: $("#album_visible").offset().top
					 	});
				}
				ev.preventDefault();
			} else if ($('.albums_oculto_2').is(':hidden')) {
				$('.albums_oculto_2').slideDown();
				if ((screen.width > 768)) {
					$('html,body').animate({
						 	scrollTop: $(".albums_oculto").offset().top
						 });
				}
				ev.preventDefault();
			} else if ($('.albums_oculto_3').is(':hidden')) {
				$('.albums_oculto_3').slideDown();
				if ((screen.width > 768)) {
					$('html,body').animate({
						 	scrollTop: $(".albums_oculto_2").offset().top
					 	});
				}
				ev.preventDefault();
			} else if ($('.albums_oculto_4').is(':hidden')) {
				$('.albums_oculto_4').slideDown();
				if ((screen.width > 768)) {
					$('html,body').animate({
							scrollTop: $(".albums_oculto_4").offset().top
					 	});
				}
				$(".flecha").css("transform", "rotate(180deg)");
				ev.preventDefault();
			} else if ($('.albums_oculto_4').is(':visible') && (screen.width > 768) ) {
				$(".flecha").css("transform", "rotate(0deg)");
				$('.albums_oculto_4').slideUp();
				$('.albums_oculto_3').slideUp();
				$('.albums_oculto_2').slideUp();
				$('.albums_oculto').slideUp();
			} else {
					$('html,body').animate({
							scrollTop: $(".discografia").offset().top
						}, -7000);
					$('.albums_oculto_4').slideUp();
					$('.albums_oculto_3').slideUp();
					$('.albums_oculto_2').slideUp();
					$('.albums_oculto').slideUp();
			}
	});


	$(".botton_ham").on("click", function(event){
			$(".nav").slideDown();
	    	event.stopImmediatePropagation();			    
	});

	$('*:not(.botton_ham)').on('click', function(e){
		if ($('.nav').is(':visible') && (screen.width <= 768)) {
				$('.nav').slideUp();
				e.stopImmediatePropagation();
		}
	});


});