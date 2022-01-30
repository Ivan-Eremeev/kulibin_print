//  Ivan Eremeev - 2021
//  Telegram: IvanMessage
//  Email: ivan.frontcoder@gmail.com

jQuery(document).ready(function ($) {

	// Брэйкпоинты js
	var	breakXl = 1600,
			breakLg = 1200,
			breakMd = 992,
			breakSm = 768,
			breakXs = 576;
	
	// GoogleMap
	function initGoogleMap() {
	  
	  var map = new google.maps.Map(document.getElementById('googleMap'), {
	    center: {lat: 55.80741828056986, lng: 37.54462199473369}, // Центр карты
	    zoom: 17, // Масштаб
	  });
	  // Стили карты
	  var styles = [
	    {
	      "elementType": "geometry",
	      "stylers": [
	        {
	          "color": "#f5f5f5"
	        }
	      ]
	    },
	    {
	      "elementType": "labels.icon",
	      "stylers": [
	        {
	          "visibility": "off"
	        }
	      ]
	    },
	    {
	      "elementType": "labels.text.fill",
	      "stylers": [
	        {
	          "color": "#616161"
	        }
	      ]
	    },
	    {
	      "elementType": "labels.text.stroke",
	      "stylers": [
	        {
	          "color": "#f5f5f5"
	        }
	      ]
	    },
	    {
	      "featureType": "administrative.land_parcel",
	      "elementType": "labels.text.fill",
	      "stylers": [
	        {
	          "color": "#bdbdbd"
	        }
	      ]
	    },
	    {
	      "featureType": "poi",
	      "elementType": "geometry",
	      "stylers": [
	        {
	          "color": "#eeeeee"
	        }
	      ]
	    },
	    {
	      "featureType": "poi",
	      "elementType": "labels.text.fill",
	      "stylers": [
	        {
	          "color": "#757575"
	        }
	      ]
	    },
	    {
	      "featureType": "poi.park",
	      "elementType": "geometry",
	      "stylers": [
	        {
	          "color": "#e5e5e5"
	        }
	      ]
	    },
	    {
	      "featureType": "poi.park",
	      "elementType": "labels.text.fill",
	      "stylers": [
	        {
	          "color": "#9e9e9e"
	        }
	      ]
	    },
	    {
	      "featureType": "road",
	      "elementType": "geometry",
	      "stylers": [
	        {
	          "color": "#ffffff"
	        }
	      ]
	    },
	    {
	      "featureType": "road.arterial",
	      "elementType": "labels.text.fill",
	      "stylers": [
	        {
	          "color": "#757575"
	        }
	      ]
	    },
	    {
	      "featureType": "road.highway",
	      "elementType": "geometry",
	      "stylers": [
	        {
	          "color": "#dadada"
	        }
	      ]
	    },
	    {
	      "featureType": "road.highway",
	      "elementType": "labels.text.fill",
	      "stylers": [
	        {
	          "color": "#616161"
	        }
	      ]
	    },
	    {
	      "featureType": "road.local",
	      "elementType": "labels.text.fill",
	      "stylers": [
	        {
	          "color": "#9e9e9e"
	        }
	      ]
	    },
	    {
	      "featureType": "transit.line",
	      "elementType": "geometry",
	      "stylers": [
	        {
	          "color": "#e5e5e5"
	        }
	      ]
	    },
	    {
	      "featureType": "transit.station",
	      "elementType": "geometry",
	      "stylers": [
	        {
	          "color": "#eeeeee"
	        }
	      ]
	    },
	    {
	      "featureType": "water",
	      "elementType": "geometry",
	      "stylers": [
	        {
	          "color": "#c9c9c9"
	        }
	      ]
	    },
	    {
	      "featureType": "water",
	      "elementType": "labels.text.fill",
	      "stylers": [
	        {
	          "color": "#9e9e9e"
	        }
	      ]
	    }
	  ];
	  map.setOptions({styles: styles});
	  // Добавить метку
	  var marker = new google.maps.Marker({
	    position: {lat: 55.80741828056986, lng: 37.54462199473369},
	    map: map,
	    icon: '../img/pointmap.svg', // Изображение маркера
	  });
	  // Контент метки всегда открыт
	  // infowindow.open(map, marker);
	  // Контент метки открывается при клике
	  // marker.addListener('click', function() {
	  //   infowindow.open(map, marker);
	  // });
	}
	if ($('#googleMap').length) {
	  initGoogleMap();
	}

	// Запрет перехода по ссылкам с хэшем
	$('a[href="#"]').click(function(e) {
		e.preventDefault();
	});

	// Выпадающее меню
	function dropMenu(btn) {
		var $this = undefined,
				drop = undefined,
				header = $('.header__container'),
				over = $('.menu__over'),
				modal = $('.modal');
		btn.on('click', function () {
			$this = $(this);
			drop = $('#' + $this.data('drop'));
			$this.toggleClass('active');
			drop.toggleClass('open');
			header.toggleClass('open')
			$(document).mouseup(function (e) {
				if (!$this.is(e.target)
					&& $this.has(e.target).length === 0
					&& !drop.is(e.target)
					&& drop.has(e.target).length === 0
					&& !modal.is(e.target)
					&& modal.has(e.target).length === 0) {
					$this.removeClass('active');
					drop.removeClass('open');
					header.removeClass('open');
				}
			});
			over.on('click', function () {
				$this.removeClass('active');
				drop.removeClass('open');
				header.removeClass('open');
			})
		})
	}
	dropMenu($('.js-menu-btn'));
	dropMenu($('.js-user-btn'));

	// Выпадайки при клике по кнопке
	// Задать блокам выпадайкам айдишник совпадающий с data-drop="" в кнопке для этого блока
	// Задать кнопкам .js-drop-btn и data-drop="" с айдишником блока выпадайки
	function dropBlock(btn) {
		var $this = undefined,
				drop = undefined,
				close = $('.js-drop-close');
		btn.on('click', function () {
			$this = $(this);
			drop = $('#' + $this.data('drop'));
			$this.toggleClass('active');
			drop.toggleClass('open');
			$(document).mouseup(function (e) {
				if (!$this.is(e.target)
					&& $this.has(e.target).length === 0
					&& !drop.is(e.target)
					&& drop.has(e.target).length === 0) {
					$this.removeClass('active');
					drop.removeClass('open');
				}
			});
		})
		close.on('click', function () {
			$('[data-drop="' + $(this).data('drop') +'"]').removeClass('active');
			$('#' + $(this).data('drop')).removeClass('open');
		})
	}
	dropBlock($('.js-drop-btn'));

	// Смена положения блока при изменении ширины окна
	// function(блок, куда переместить, куда вернуть)
	function replace(block, to, from, mediaBreak) {
		function replaceToggle() {
			if ($(window).width() <= mediaBreak) { // условие на ширину окна
				block.appendTo(to); // Переместить блок
			} else {
				block.appendTo(from); // Вернуть блок обратно
			}
		}
		replaceToggle();
		$(window).resize(function () {
			replaceToggle();
		})

	}
	replace($('#propertyReplace'), $('#propertyTo'), $('#propertyFrom'), breakMd);
	replace($('#propertyReplace2'), $('#propertyTo2'), $('#propertyFrom2'), breakMd);
	replace($('#socialReplace'), $('#socialTo'), $('#socialFrom'), breakSm);
	replace($('#postBlockReplace'), $('#postBlockTo'), $('#postBlockFrom'), breakMd);
	replace($('#postSidebarReplace'), $('#postSidebarTo'), $('#postSidebarFrom'), breakMd);
	replace($('#aboutBlockReplace'), $('#aboutBlockTo'), $('#aboutBlockFrom'), breakMd);

	// Вставка видео с ютуб
	function youtubeInsert() {
		$('.js_youtube').on('click', function () {
			var $this = $(this),
					url = iframe_url = "https://www.youtube.com/embed/" + $(this).attr('id') + "?autoplay=1&autohide=1",
					active = false;
			var iframe = $('<iframe/>', {
				'frameborder': '0',
				'src': iframe_url,
				'allow': 'autoplay',
			});
			// Убираем "Посмотрите видео" при воспроизведении
			$('.videoOver').hide();
			// Заменяем миниатюру HTML5 плеером с YouTube
			if (!active) {
				$this.append(iframe);	
				active = true;
			}
		})
	}
	youtubeInsert();

	// swiper sliderArticles
	if ($('#sliderArticles').length) {
		const sliderArticles = new Swiper('#sliderArticles', {
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			autoplay: true,
			pagination: {
				el: '.slider__pagination',
				clickable: true,
			},
			breakpoints: {
				1600: {
					slidesPerView: 4,
				},
				992: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 2,
				}
			}
		});
	}

	// swiper sliderDillers
	if ($('#sliderDillers').length) {
		const sliderDillers = new Swiper('#sliderDillers', {
			slidesPerView: 1,
			spaceBetween: 20,
			pagination: {
				el: '.dillers__pagination',
				clickable: true,
			},
			breakpoints: {
				1600: {
					slidesPerView: 4,
				},
				992: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 2,
				}
			}
		});
	}
	
	// swiper sliderInnovation1
	if ($('#sliderInnovation1').length) {
		const sliderInnovation1 = new Swiper('#sliderInnovation1', {
			slidesPerView: 'auto',
			spaceBetween: 20,
			loop: true,
			autoplay: {
				delay: 1,
				disableOnInteraction: false
			},
			speed: 5000,
			allowTouchMove: false,
		})
	}
	// swiper sliderInnovation2
	if ($('#sliderInnovation2').length) {
		const sliderInnovation2 = new Swiper('#sliderInnovation2', {
			slidesPerView: 'auto',
			spaceBetween: 20,
			loop: true,
			autoplay: {
				delay: 1,
				disableOnInteraction: false
			},
			speed: 6000,
			centeredSlides: true,
			allowTouchMove: false,
		})
	}
	// swiper sliderInnovation3
	if ($('#sliderInnovation3').length) {
		const sliderInnovation3 = new Swiper('#sliderInnovation3', {
			slidesPerView: 'auto',
			spaceBetween: 20,
			loop: true,
			autoplay: {
				delay: 1,
				disableOnInteraction: false
			},
			speed: 5000,
			allowTouchMove: false,
		})
	}

	// Выпадающее меню в footer
	function footerMenu() {
		let childin = $('.footer__childin');
		childin.children('a').on('click', function (e) {
			e.preventDefault();
			let $this = $(this);
					dropmenu = $(this).siblings('.footer__sublist');
			$this.toggleClass('active');
			dropmenu.stop().slideToggle();
		})
	}
	footerMenu();

	// Селекты
	function formStyleSelect() {
		if ($('.select select').length) {
			var _dropdown;
			var settings = { autoReinitialise: true };
			$('.select select').styler({
				selectPlaceholder: '',
				selectVisibleOptions: 8,
				onFormStyled: function () {
					_dropdown = $('.jq-selectbox__dropdown');
					_dropdown.find('ul').wrap('<div class="scroll-pane"/>');
				},
				onSelectOpened: function () {
					var _ul = $(this).find('.jq-selectbox__dropdown ul');
					var height = _ul.height();
					var _srollPane = _dropdown.find('.scroll-pane');
					_srollPane.height(height);
					_ul.css('max-height', 'none');
					_srollPane.jScrollPane(settings);
				}
			});
		}
	}
	formStyleSelect();

	// Скопировать текст в буфер при клике
	function copyText() {
		var successBlock = $('<div class="success">Скопировано</div>');
		$('body').prepend(successBlock);
		$('body').on('click', '.copy-text', function () {
			navigator.clipboard.writeText($(this).text());
			successBlock.addClass('open');
			setTimeout(function () {
				successBlock.removeClass('open');
			}, 1000)
		})
	}
	copyText();

	// Маска для полей || Inputmask
	function inputmask() {
		if ($('input[name="tel"]').length) {
			$('input[name="tel"]').inputmask("+7(999)999-99-99");
		}
		if ($('input[name="email"]').length) {
			$('input[name="email"]').inputmask("*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]");
		}
		if ($('input[name="serialnum"]').length) {
			$('input[name="serialnum"]').inputmask("9 9 9 9 9 9 9 9 9 9");
		}
	}
	inputmask();

	// Открыть скрытые символы в input passwod
	function passwordVisible() {
		$('.input--password .input__icon').on('click', function () {
			var input = $(this).siblings('input');
			if (input.attr('type') == 'password') {
				input.attr('type', 'text');
				$(this).addClass('active');
			}else {
				input.attr('type', 'password');
				$(this).removeClass('active');
			}
		})
	}
	passwordVisible();

	if ($('[data-fancybox]').length) {
		Fancybox.bind("[data-fancybox]", {
			Toolbar: {
				display: [
					// "zoom",
					// "slideshow",
					// "fullscreen",
					// "download",
					// "thumbs",
					"close",
				],
			},
			Image: {
				Panzoom: {
					maxScale: function () {
						return 0;
					},
				},
			},
		});	
	}

	// Переключение темы
	function goggleTheme() {
		var block = $('.header__checktheme'),
				iconLight = $('.header__checktheme-icon--light'),
				iconDark = $('.header__checktheme-icon--dark'),
				page = $('.page');
		block.on('click', function () {
			if (!page.hasClass('dark-theme')) {
				iconLight.removeClass('active');
				iconDark.addClass('active');
				page.addClass('dark-theme');
			}else {
				iconLight.addClass('active');
				iconDark.removeClass('active');
				page.removeClass('dark-theme');
			}
		})
	}
	goggleTheme();

});