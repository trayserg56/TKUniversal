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
		responsive: [
			{
			breakpoint: 1000,
			settings: "unslick"
			}
			]
	});
	$('.about__video').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		infinite: false,
		arrows: false,
	});
	$(".mobilefilter__offer").click(function(){
		$(".mobile__items").removeClass("none");
		$(".mobile__items").addClass("block");
	});
	$(".mobile__filter__back").click(function(){
		$(".mobile__items").removeClass("block");
		$(".mobile__items").addClass("none");
	});
	$(".header__mobile__burger").click(function(){
		$(".header__mobile").addClass("nonemobile");
		$(".header__mobile__content").removeClass("nonemobile");
	});
	$(".header__mobile__close").click(function(){
		$(".header__mobile__content").addClass("nonemobile");
		$(".header__mobile").removeClass("nonemobile");
	});
})
