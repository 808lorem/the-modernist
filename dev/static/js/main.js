;
// Начинать писать отсюда!!!!
$(document).ready(function(){
	$('.js_top-slider').slick({
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '.slider__arrow_prev',
		nextArrow: '.slider__arrow_next',
	});
	

	$('.services__column').hover(function() {
		$(this).toggleClass('active');
	});
	
	$('.lastest-work__column').hover(function() {
		$(this).toggleClass('active');
	});
});