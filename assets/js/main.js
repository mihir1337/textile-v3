(function ($) {
    'use strict';

    $(window).on("load", function() {

		background();

	    //preloader
		$("#preloader").delay(300).animate({
			"opacity" : "0"
			}, 500, function() {
			$("#preloader").css("display","none");
		});

	});

	// Nice select
	$('select').niceSelect();

	// change is-checked class on buttons
	$('.textile-category ul').each(function (i, buttonGroup) {
		var $buttonGroup = $(buttonGroup);
		$buttonGroup.on('click', 'li', function () {
			$buttonGroup.find('.active').removeClass('active');
			$(this).addClass('active');
		});
	});

	// change is-checked class on buttons
	$('.textile-innerpage-left ul').each(function (i, buttonGroup) {
		var $buttonGroup = $(buttonGroup);
		$buttonGroup.on('click', 'li', function () {
			$buttonGroup.find('.active').removeClass('active');
			$(this).addClass('active');
		});
	});

    // background image
	function background() {
			var img=$('.bg_img');
			img.css('background-image', function () {
			var bg = ('url(' + $(this).data('background') + ')');
			return bg;
		});
	}

	// hamburger menu active 
	$(".reg-btn, .register").on("click", function () {
		$(".overlay, .login-modal.register-modal").addClass("active");
	});

	$(".overlay, .crossbars").on("click", function () {
		$(".overlay, .login-modal.register-modal").removeClass("active");
	});

	$(".login, .login-btn").on("click", function () {
		$(".overlay, .login-modal").addClass("login-active");
	});

	$(".overlay, .crossbars, .register").on("click", function () {
		$(".overlay, .login-modal").removeClass("login-active");
	});

	$(".login").on("click", function () {
		$(".login-modal").removeClass("active");
	});

	$(".contact").on("click", function () {
		$(".overlay, .contact-modal").addClass("active");
	});

	$(".overlay, .crossbars").on("click", function () {
		$(".overlay, .contact-modal").removeClass("active");
	});

	$(".payment-mod").on("click", function () {
		$(".overlay, .payment-modal").addClass("active");
	});

	$(".overlay, .crossbars").on("click", function () {
		$(".overlay, .payment-modal").removeClass("active");
	});

	// hamburger menu active 
	$(".single-textile-item.v2").on("click", function () {
		$(".overlay, body").addClass("activepop");
	});

	$(".overlay, .popup-close").on("click", function () {
		$(".overlay, body").removeClass("activepop");
	});

	$(".contact").on("click", function () {
		$(".overlay, body").removeClass("activepop");
	});

	// hamburger menu active 
	$(".hamburger-menu-trigger").on("click", function () {
		$(".overlay, .textile-innerpage-left").addClass("active");
	});

	$(".overlay, .crossbars").on("click", function () {
		$(".textile-innerpage-left, .overlay").removeClass("active");
	});

})(jQuery);