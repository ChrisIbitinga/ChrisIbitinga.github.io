$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		loop:true,
		autoplay: true,
		margin:10,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:2,
				nav:false
			},
			1000:{
				items:5,
				nav:true,
				loop:false
			}
		}
	});
});