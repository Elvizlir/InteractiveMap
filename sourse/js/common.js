function eventHandler() {



	let preInfo = $('.s-interactive-map__info-block--info');
	let infoBox = $('.s-interactive-map__info-block--main');
	let infoStatus = $('.s-interactive-map__info-status');
	let infoSquare = $('.s-interactive-map__info-square');


	let infoInner = $('.s-interactive-map__info-inner--js')

	$('.s-interactive-map__path').click(function () {
		let number = $(this).data('number');

		let status = $(this).data('status');
		let square = $(this).data('square');
		let price = $(this).data('price');
		let fixedPrice = 50000;


		let squarePrice = price * square;
		let fullPrice = squarePrice + fixedPrice;


		preInfo.addClass('disabled')
		infoBox.removeClass('disabled');

		infoStatus.text(`Участок: ${number}`);

		if (status == "sell") {
			infoStatus.css('background-color', 'rgba(13, 88, 100)')
			infoInner.html(`
			<div class="s-interactive-map__infoline">
			<div class="s-interactive-map__infoline-title">Площадь(в сотках)
			</div>
			<div class="s-interactive-map__infoline-value">${square}
			</div>
		</div>
		<div class="s-interactive-map__infoline">
			<div class="s-interactive-map__infoline-title">Статус
			</div>
			<div class="s-interactive-map__infoline-value"> Продан
			</div>
		</div>
			`)
		} else if (status == "reserved") {
			infoStatus.css('background-color', 'rgba(191, 222, 240)')
			infoInner.html(`
			<div class="s-interactive-map__infoline">
			<div class="s-interactive-map__infoline-title">Площадь(в сотках)
			</div>
			<div class="s-interactive-map__infoline-value">${square}
			</div>
		</div>
		<div class="s-interactive-map__infoline">
			<div class="s-interactive-map__infoline-title">Статус
			</div>
			<div class="s-interactive-map__infoline-value">Зарезервирован
			</div>
		</div>
		<div class="s-interactive-map__infoline">
			<div class="s-interactive-map__infoline-title">Ценовая категория(за сотку)
			</div>
			<div class="s-interactive-map__infoline-value">${price.toLocaleString()} руб.
			</div>
		</div>
		<div class="s-interactive-map__infoline">
			<div class="s-interactive-map__infoline-title">Стоимость земли
			</div>
			<div class="s-interactive-map__infoline-value">${squarePrice.toLocaleString()} руб.
			</div>
		</div>
		<div class="s-interactive-map__infoline">
			<div class="s-interactive-map__infoline-title">Дополнительно оплачивается
			</div>
			<div class="s-interactive-map__infoline-value"> ${fixedPrice.toLocaleString()} руб.
			</div>
		</div>
		<div class="s-interactive-map__infoline">
			<div class="s-interactive-map__infoline-title">Полная стоимость участка
			</div>
			<div class="s-interactive-map__infoline-value"> ${fullPrice.toLocaleString()} руб.
			</div>
		</div>
			`)
		} else {
			infoStatus.css('background-color', 'rgba(243, 127, 18)');
			infoInner.html(`
			<div class="s-interactive-map__infoline">
			<div class="s-interactive-map__infoline-title">Площадь(в сотках)
			</div>
			<div class="s-interactive-map__infoline-value">${square}
			</div>
		</div>
		<div class="s-interactive-map__infoline">
			<div class="s-interactive-map__infoline-title">Статус
			</div>
			<div class="s-interactive-map__infoline-value">Свободен
			</div>
		</div>
		<div class="s-interactive-map__infoline">
			<div class="s-interactive-map__infoline-title">Ценовая категория(за сотку)
			</div>
			<div class="s-interactive-map__infoline-value">${price.toLocaleString()} руб.
			</div>
		</div>
		<div class="s-interactive-map__infoline">
			<div class="s-interactive-map__infoline-title">Стоимость земли
			</div>
			<div class="s-interactive-map__infoline-value">${squarePrice.toLocaleString()} руб.
			</div>
		</div>
		<div class="s-interactive-map__infoline">
			<div class="s-interactive-map__infoline-title">Дополнительно оплачивается
			</div>
			<div class="s-interactive-map__infoline-value"> ${fixedPrice.toLocaleString()} руб.
			</div>
		</div>
		<div class="s-interactive-map__infoline">
			<div class="s-interactive-map__infoline-title">Полная стоимость участка
			</div>
			<div class="s-interactive-map__infoline-value"> ${fullPrice.toLocaleString()} руб.
			</div>
		</div>
			`)
		};

	});

	let btnUp = document.querySelector('.s-interactive-map__zoom--up');
	let btnDown = document.querySelector('.s-interactive-map__zoom--down');

	btnUp.addEventListener('click', function (e) {
		zoom(1.25, true);
	})
	btnDown.addEventListener('click', function (e) {
		zoom(0.8, true);
	})

	let zoomMap = document.querySelector('.s-interactive-map__map-wrap');


	let controller = panzoom(zoomMap, {
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

};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

$(window).on('load', function () {
	let path = $('.s-interactive-map__path');

	path.each(function () {
		if ($(this).data('status') == 'sell') {
			$(this).addClass('sell');
		}
		if ($(this).data('status') == 'reserved') {
			$(this).addClass('reserved');
		}
	})

});