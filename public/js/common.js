"use strict";

function eventHandler() {
	var infoBox = $('.s-interactive-map__info-block');
	var infoTitle = $('.s-interactive-map__info-title');
	var infoStatus = $('.s-interactive-map__info-status');
	var infoSquare = $('.s-interactive-map__info-square');
	$('.s-interactive-map__path').click(function () {
		var title = $(this).data('plot');
		var square = $(this).data('square');
		infoBox.removeClass('disabled');
		infoTitle.text("\u0423\u0447\u0430\u0441\u0442\u043E\u043A ".concat(title));

		if ($(this).hasClass('sell')) {
			infoStatus.css('background-color', 'rgba(13, 88, 100)');
			infoStatus.text("\u041F\u0440\u043E\u0434\u0430\u043D");
		} else if ($(this).hasClass('reserved')) {
			infoStatus.css('background-color', 'rgba(191, 222, 240)');
			infoStatus.text("\u0417\u0430\u0440\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u043E\u0432\u0430\u043D");
		} else {
			infoStatus.css('background-color', 'rgba(243, 127, 18)');
			infoStatus.text("\u0421\u0432\u043E\u0431\u043E\u0434\u0435\u043D");
		}

		;
		infoSquare.text("\u041F\u043B\u043E\u0449\u0430\u0434\u044C: ".concat(square));
	}); // console.log(square);
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}