"use strict";

function eventHandler() {
	var preInfo = $('.s-interactive-map__info-block--info');
	var infoBox = $('.s-interactive-map__info-block--main');
	var infoStatus = $('.s-interactive-map__info-status');
	var infoSquare = $('.s-interactive-map__info-square');
	var infoInner = $('.s-interactive-map__info-inner--js');
	$('.s-interactive-map__path').click(function () {
		var number = $(this).data('number');
		var status = $(this).data('status');
		var square = $(this).data('square');
		var price = $(this).data('price');
		var fixedPrice = 50000;
		var squarePrice = price * square;
		var fullPrice = squarePrice + fixedPrice;
		preInfo.addClass('disabled');
		infoBox.removeClass('disabled');
		infoStatus.text("\u0423\u0447\u0430\u0441\u0442\u043E\u043A: ".concat(number));

		if (status == "sell") {
			infoStatus.css('background-color', 'rgba(13, 88, 100)');
			infoInner.html("\n\t\t\t<div class=\"s-interactive-map__infoline\">\n\t\t\t<div class=\"s-interactive-map__infoline-title\">\u041F\u043B\u043E\u0449\u0430\u0434\u044C(\u0432 \u0441\u043E\u0442\u043A\u0430\u0445)\n\t\t\t</div>\n\t\t\t<div class=\"s-interactive-map__infoline-value\">".concat(square, "\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"s-interactive-map__infoline\">\n\t\t\t<div class=\"s-interactive-map__infoline-title\">\u0421\u0442\u0430\u0442\u0443\u0441\n\t\t\t</div>\n\t\t\t<div class=\"s-interactive-map__infoline-value\"> \u041F\u0440\u043E\u0434\u0430\u043D\n\t\t\t</div>\n\t\t</div>\n\t\t\t"));
		} else if (status == "reserved") {
			infoStatus.css('background-color', 'rgba(191, 222, 240)');
			infoInner.html("\n\t\t\t<div class=\"s-interactive-map__infoline\">\n\t\t\t<div class=\"s-interactive-map__infoline-title\">\u041F\u043B\u043E\u0449\u0430\u0434\u044C(\u0432 \u0441\u043E\u0442\u043A\u0430\u0445)\n\t\t\t</div>\n\t\t\t<div class=\"s-interactive-map__infoline-value\">".concat(square, "\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"s-interactive-map__infoline\">\n\t\t\t<div class=\"s-interactive-map__infoline-title\">\u0421\u0442\u0430\u0442\u0443\u0441\n\t\t\t</div>\n\t\t\t<div class=\"s-interactive-map__infoline-value\">\u0417\u0430\u0440\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u043E\u0432\u0430\u043D\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"s-interactive-map__infoline\">\n\t\t\t<div class=\"s-interactive-map__infoline-title\">\u0426\u0435\u043D\u043E\u0432\u0430\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F(\u0437\u0430 \u0441\u043E\u0442\u043A\u0443)\n\t\t\t</div>\n\t\t\t<div class=\"s-interactive-map__infoline-value\">").concat(price.toLocaleString(), " \u0440\u0443\u0431.\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"s-interactive-map__infoline\">\n\t\t\t<div class=\"s-interactive-map__infoline-title\">\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0435\u043C\u043B\u0438\n\t\t\t</div>\n\t\t\t<div class=\"s-interactive-map__infoline-value\">").concat(squarePrice.toLocaleString(), " \u0440\u0443\u0431.\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"s-interactive-map__infoline\">\n\t\t\t<div class=\"s-interactive-map__infoline-title\">\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F\n\t\t\t</div>\n\t\t\t<div class=\"s-interactive-map__infoline-value\"> ").concat(fixedPrice.toLocaleString(), " \u0440\u0443\u0431.\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"s-interactive-map__infoline\">\n\t\t\t<div class=\"s-interactive-map__infoline-title\">\u041F\u043E\u043B\u043D\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u043A\u0430\n\t\t\t</div>\n\t\t\t<div class=\"s-interactive-map__infoline-value\"> ").concat(fullPrice.toLocaleString(), " \u0440\u0443\u0431.\n\t\t\t</div>\n\t\t</div>\n\t\t\t"));
		} else {
			infoStatus.css('background-color', 'rgba(243, 127, 18)');
			infoInner.html("\n\t\t\t<div class=\"s-interactive-map__infoline\">\n\t\t\t<div class=\"s-interactive-map__infoline-title\">\u041F\u043B\u043E\u0449\u0430\u0434\u044C(\u0432 \u0441\u043E\u0442\u043A\u0430\u0445)\n\t\t\t</div>\n\t\t\t<div class=\"s-interactive-map__infoline-value\">".concat(square, "\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"s-interactive-map__infoline\">\n\t\t\t<div class=\"s-interactive-map__infoline-title\">\u0421\u0442\u0430\u0442\u0443\u0441\n\t\t\t</div>\n\t\t\t<div class=\"s-interactive-map__infoline-value\">\u0421\u0432\u043E\u0431\u043E\u0434\u0435\u043D\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"s-interactive-map__infoline\">\n\t\t\t<div class=\"s-interactive-map__infoline-title\">\u0426\u0435\u043D\u043E\u0432\u0430\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F(\u0437\u0430 \u0441\u043E\u0442\u043A\u0443)\n\t\t\t</div>\n\t\t\t<div class=\"s-interactive-map__infoline-value\">").concat(price.toLocaleString(), " \u0440\u0443\u0431.\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"s-interactive-map__infoline\">\n\t\t\t<div class=\"s-interactive-map__infoline-title\">\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0435\u043C\u043B\u0438\n\t\t\t</div>\n\t\t\t<div class=\"s-interactive-map__infoline-value\">").concat(squarePrice.toLocaleString(), " \u0440\u0443\u0431.\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"s-interactive-map__infoline\">\n\t\t\t<div class=\"s-interactive-map__infoline-title\">\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F\n\t\t\t</div>\n\t\t\t<div class=\"s-interactive-map__infoline-value\"> ").concat(fixedPrice.toLocaleString(), " \u0440\u0443\u0431.\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"s-interactive-map__infoline\">\n\t\t\t<div class=\"s-interactive-map__infoline-title\">\u041F\u043E\u043B\u043D\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u043A\u0430\n\t\t\t</div>\n\t\t\t<div class=\"s-interactive-map__infoline-value\"> ").concat(fullPrice.toLocaleString(), " \u0440\u0443\u0431.\n\t\t\t</div>\n\t\t</div>\n\t\t\t"));
		}

		;
	});
	var btnUp = document.querySelector('.s-interactive-map__zoom--up');
	var btnDown = document.querySelector('.s-interactive-map__zoom--down');
	$('.s-interactive-map__close--js').click(function (e) {
		$(this).parent().toggleClass('disabled');
	});
	btnUp.addEventListener('click', function (e) {
		zoom(1.25, true);
	});
	btnDown.addEventListener('click', function (e) {
		zoom(0.8, true);
	});
	var zoomMap = document.querySelector('.s-interactive-map__map-wrap');
	var controller = panzoom(zoomMap, {
		maxZoom: 2.5,
		minZoom: 1,
		panOnlyWhenZoomed: !0,
		bounds: true,
		zoomDoubleClickSpeed: 1,
		boundsPadding: 1,
		transformOrigin: {
			x: 0.5,
			y: 0.5
		}
	});

	function zoom(scale, isSmooth) {
		if (scale) {
			var transform = controller.getTransform();
			console.log(transform);
			var deltaX = transform.x;
			var deltaY = transform.y;
			var offsetX = scale + deltaX;
			var offsetY = scale + deltaY;

			if (isSmooth) {
				controller.smoothZoom(offsetX, offsetY, scale);
			} else {
				controller.zoomTo(offsetX, offsetY, scale);
			}
		}
	}
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

$(window).on('load', function () {
	var path = $('.s-interactive-map__path');
	path.each(function () {
		if ($(this).data('status') == 'sell') {
			$(this).addClass('sell');
		}

		if ($(this).data('status') == 'reserved') {
			$(this).addClass('reserved');
		}
	});
});