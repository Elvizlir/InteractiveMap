function eventHandler() {

	let infoBox = $('.s-interactive-map__info-block')
	let infoTitle = $('.s-interactive-map__info-title')
	let infoStatus = $('.s-interactive-map__info-status')

	$('.s-interactive-map__path').click(function(){
		let title = $(this).data('plot');

		infoBox.removeClass('disabled');

		infoTitle.text(`Участок ${title}`);

		if ($(this).hasClass('sell')){
			infoStatus.css('background-color','#FF7373')
			infoStatus.text(`Продан`);
		} else if($(this).hasClass('reserved')){
			infoStatus.css('background-color','#64AAD0')
			infoStatus.text(`Зарезервирован`);
		} else {
			infoStatus.css('background-color','#65E080');
			infoStatus.text(`Свободен`);
		};
	});

};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}