$(document).ready(function(){
	initOpenPopup();
	initIonRangeSlider();
	initImgBg();
	initMobMenu();
});

function initOpenPopup(){
	$('[data-popup]').click(function (e) {
	    if(!$(e.target).is(':submit')){
	        var id = $(this).data('popup');
	        $(id).toggleClass('active');
	        e.preventDefault();
	    }
	});
	$(document).on('click',function(e) {
	    if ($(e.target).closest('.popup-holder').length || $(e.target).closest('[data-popup]').length) return;
	    $('.popup-holder').removeClass('active');
	    e.stopPropagation();
	});
	$('.popup-holder').on('click','.close, .bg',function () {
	    $('.popup-holder').removeClass('active');
	});
}

function initIonRangeSlider() {
	$( "#slider-range" ).slider({
	range: "max",
	min: 0,
	 step: 0.5,
	max: 790,
	values: [ 269.50 ],
	slide: function( event, ui ) {
		$( "#amount" ).val(ui.values[ 0 ]+' waves');
	}
	});
	$( "#amount" ).val( $("#slider-range" ).slider( "values", 0 )+' waves');
}

function initImgBg() {
	if($('.box-bg').length){
		$('.box-bg').each(function(){
			var _src = $(this).find('.img-bg').attr('src');
			$(this).css({
				'background-image':'url('+_src+')'
			});
		});
	}
}

function initMobMenu() {
	$('.btn-open').on('click touchstart', function(){
		$(this).closest('#nav').toggleClass('active');
		$(this).closest('#header').toggleClass('active');
		return false;
	});
}