/* global FastClick, renderIcons, ymaps, alert */

$(function () {
	'use strict';

	// Attach fastclick for mobiles (https://github.com/ftlabs/fastclick)
	FastClick.attach(document.body);

	// Swipebox
	$('.swipebox').swipebox({
		useSVG: false
	});

	if ($('.offices-list .map-holder').length > 0) {
		$.getScript('http://api-maps.yandex.ru/2.1/?lang=ru_RU', function () {
			ymaps.ready(function () {
				$('.offices-list .map-holder').each(function () {
					var address = $(this).data('address');
					var mapHolderID = $(this).attr('id');

					ymaps.geocode(address, { results: 1 }).then(function (res) {
						// Выбираем первый результат геокодирования.
						var firstGeoObject = res.geoObjects.get(0);
						var myPlacemark = new ymaps.Placemark(firstGeoObject.geometry.getCoordinates(), { content: address });

						// Создаем карту с нужным центром.
						var map = new ymaps.Map(mapHolderID, {
							center: firstGeoObject.geometry.getCoordinates(),
							zoom: 16,
							controls: ['zoomControl']
						});

						map.behaviors.disable(['drag', 'rightMouseButtonMagnifier', 'leftMouseButtonMagnifier', 'multiTouch', 'dblClickZoom', 'scrollZoom']);
						map.geoObjects.add(myPlacemark);
					}, function (err) {
						// Если геокодирование не удалось, сообщаем об ошибке.
						alert(err.message);
					});
				});
			});
		});
	}

	// Main slider
	$('.main-promo-slider').owlCarousel({
		slideSpeed: 400,
		loop: true,
		autoWidth: true,
		pagination: true,
		navigation: false,
		items: 1,
		singleItem: true
	});

	$('.main-our-works .works-slider, .type-page-our-works .works-slider').owlCarousel({
		slideSpeed: 400,
		loop: true,
		autoWidth: true,
		pagination: false,
		navigation: true,
		navigationText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
		items: 1,
		singleItem: true,
		afterInit: function (elem) {
			renderIcons($(elem).get(0));
			$(elem).after('<div class="slider-counter"><strong>1</strong> / ' + $(elem).find('.item').length + '</div>');
		},
		afterMove: function () {
			$(this.$elem[0]).parents().find('.slider-counter strong').text(this.currentItem + 1);
		}
	});

	// (function () {
	// 	var slideout = new Slideout({
	// 		panel: $('.site-wrapper').get(0),
	// 		menu: $('.slideout-menu').get(0),
	// 		padding: 230,
	// 		tolerance: 70
	// 	});

	// 	$('.js-slideout-handler').on('click', function (event) {
	// 		event.preventDefault();
	// 		slideout.toggle();
	// 	});
	// })();

	$('.js-slideout-handler').on('click', function (event) {
		event.preventDefault();
		$('.slideout-menu').addClass('menu-open');
	});

	$('.slideout-menu').on('click', '.close-link', function (event) {
		event.preventDefault();
		$('.slideout-menu').removeClass('menu-open');
	});

	// User reviews
	$('.user-reviews .reviews-slider').owlCarousel({
		slideSpeed: 400,
		loop: true,
		autoWidth: true,
		pagination: false,
		navigation: true,
		navigationText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
		items: 1,
		singleItem: true,
		afterInit: function (elem) {
			renderIcons($(elem).get(0));
			$(elem).before('<div class="slider-counter"><span data-icon="comment-count-circle"></span><span class="count"><strong>1</strong> / ' + $(elem).find('.item').length + '</span></div>');
			renderIcons($(elem).prev('.slider-counter').get(0));
		},
		afterMove: function () {
			$(this.$elem[0]).parents().find('.slider-counter strong').text(this.currentItem + 1);
		}
	});

	// Action slider
	$('.type-action-promo .action-slider').owlCarousel({
		slideSpeed: 400,
		loop: true,
		autoWidth: true,
		pagination: true,
		navigation: false,
		items: 1,
		singleItem: true
	});

	// Scrollbar for responsive tables
	$('.table-wrapper').mCustomScrollbar({
		axis: 'x',
		scrollbarPosition: 'outside',
		scrollInertia: 0,
		mouseWheel: {
			enable: false
		}
	});

	// Tooltips
	$('[data-toggle="tooltip"]').tooltip({
		trigger: 'click'
	});

	$(document).on('show.bs.tooltip', function (event) {
		$(event.target).text('X');
	}).on('hide.bs.tooltip', function (event) {
		$(event.target).text('?');
	});

});
