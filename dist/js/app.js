// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

	$('.banner__banners').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		appendArrows: $(".arrovsprojects"),
		prevArrow: '<div class="ArrowPrev"></div>',
		nextArrow: '<div class="ArrowNext"></div>',
	});
	$('.information__stock').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		infinite: false,
		arrows: false,
	});
	$('.about__video').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		infinite: false,
		arrows: false,
	});
})
