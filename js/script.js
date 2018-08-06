$( document ).ready(function() {

	$(".albums").each( function( index, e ) {
	    $(e).attr( "id","album_"+index );
	});

	$('.albums').on('click', function(e){
		let $albumId = $(this).attr('id');
		$('#'+$albumId).find('div.fondo_modal').css('display', 'flex');
		e.preventDefault()

			$('#'+$albumId).find('div.fondo_modal').css('display', 'flex');

			$('.fa-times').click(function(e) {
					setTimeout( function(e) {
							$('#'+$albumId).find('div.fondo_modal').css('display', 'none');
					}, 10)
					e.preventDefault()
			})

			
			
	});

	$('.youtube_modal').click(function(e) {
			      url = $(this).attr("href");
			      window.open(url, '_blank');
			      e.preventDefault()
			      return false;
			});
	
	
	
	$(".carousel_img img").each( function( index, el ) {
	    $(el).addClass( "imagen" +"_"+index );
	});


	let $imgCarr= $( "#img_first" );	
	$('.arrow_container_right').on('click', function(e){
		$imgCarr.css("display", "none");
		$imgCarr  = $imgCarr.next();
		if($imgCarr.is(':hidden')) {
			$imgCarr.show()
		} else {
			$imgCarr = $("#img_first");
			$imgCarr.show();
		}
	});

	$('.arrow_container_left').on('click', function(e){
		$imgCarr.css("display", "none");
		$imgCarr  = $imgCarr.prev();
		if($imgCarr.is(':hidden')) {
			$imgCarr.show()
		}else {
			$imgCarr = $("#img_last");
			$imgCarr.show();
		}
	});

	$('.cierre_discografia_2').on('click', function(e){
			if ($('.albums_vivo_oculto').is(':hidden')) {
				$(".flecha_2").css("transform", "rotate(0deg)");	
				$('.albums_vivo_oculto').slideDown();
				if ((screen.width > 768)) {
					$('html,body').animate({
						 	scrollTop: $("#album_26").offset().top
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
						 	scrollTop: $("#album_0").offset().top
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
							scrollTop: $("#discografia").offset().top
						}, -7000);
					$('.albums_oculto_4').slideUp();
					$('.albums_oculto_3').slideUp();
					$('.albums_oculto_2').slideUp();
					$('.albums_oculto').slideUp();
			}
	});





	$(".botton_ham").click(function(event){
		if ($('.ham_img').css('top') == "0px") {
			$(".nav").slideToggle();
			$(".ham_img").css("top", "-100%")
			$(".close_img").css("left", "5px")
	    	event.stopImmediatePropagation();
	    } else {
	    	$(".nav").slideToggle();
	    	$(".ham_img").css("display", "inline-block")
			$(".ham_img").css("top", "0")
			$(".close_img").css("left", "-150%")
	    	event.stopImmediatePropagation();
	    }
	});




	$(document).click(function(e){
		if ($('.nav').is(':visible') && (screen.width <= 768)) {
				$('.nav').slideToggle();
				$(".ham_img").css("top", "0")
				$(".close_img").css("left", "-150%");
				e.stopImmediatePropagation();
		}
	});

 	
});