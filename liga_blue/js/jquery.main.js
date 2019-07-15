$(document).ready(function(){
	initTabs();
	initMobMenu();
	initOpenPopup();
	initAccordion();
	initFlip();
	initHoverAnimation ();
	initIonRangeSlider();
});

function initTabs(){
	$('.tabset ul.tab-control li a').on('click', function(){
		var thisHold = $(this).closest(".tabset");
		var _ind = $(this).closest('li').index();
		thisHold.children('.tab-body').children(".tab").removeClass('active');
		thisHold.children('.tab-body').children("div.tab:eq("+_ind+")").addClass('active');
		$(this).closest("ul").find(".active").removeClass("active");
		$(this).parent().addClass("active");
		return false;
	});
};

function initMobMenu(){
	$('.btn-open').on('click touchstart', function(){
		$(this).closest('#header').toggleClass('active');
		return false;
	});
}

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

function initAccordion() {
	if($('.accordion').length){
		$(".item .head").click(function(e){
			$(this).next().slideToggle(400,function(){
				$(this).parent().toggleClass('active');
			});
			e.preventDefault();
		})
	}
};

function initFlip() {
	if($(window).width() <= 890) {
		$('.inner-team').click(function() {
			var _this = $(this);
			$('.inner-team').addClass('animate-stop');
			_this.addClass('active');
			setTimeout(function(){
				_this.addClass('active-shadow');
			},600)
			
			setTimeout(function() {
				$('.inner-team').removeClass('active');
				$('.inner-team').removeClass('active-shadow');
				$('.inner-team').removeClass('animate-stop');
			}, 5000);
			return false;
		});
	}
}

function initHoverAnimation() {
	$('.item-team')
		.mouseenter(function(){
			if($(window).width() > 1023) {
				$('.inner-team').addClass('animate-stop');
			}
		})
		.mouseleave(function() {	
			if($(window).width() > 1023) {		
				setTimeout(function () {$('.inner-team').removeClass('animate-stop')},600);
			}
		})
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