function eventHandler() {

	let infoBox = $('.s-interactive-map__info-block')
	let infoTitle = $('.s-interactive-map__info-title')
	let infoStatus = $('.s-interactive-map__info-status')
	let infoSquare = $('.s-interactive-map__info-square')

	$('.s-interactive-map__path').click(function(){
		let title = $(this).data('plot');
		let square = $(this).data('square');

		infoBox.removeClass('disabled');

		infoTitle.text(`Участок ${title}`);

		if ($(this).hasClass('sell')){
			infoStatus.css('background-color','rgba(13, 88, 100)')
			infoStatus.text(`Продан`);
		} else if($(this).hasClass('reserved')){
			infoStatus.css('background-color','rgba(191, 222, 240)')
			infoStatus.text(`Зарезервирован`);
		} else {
			infoStatus.css('background-color','rgba(243, 127, 18)');
			infoStatus.text(`Свободен`);
		};

		
		infoSquare.text(`Площадь: ${square}`)
	});

	// console.log(square);


};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}