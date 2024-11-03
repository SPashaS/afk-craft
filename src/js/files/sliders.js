/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, EffectFade, Thumbs } from 'swiper/modules';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
  //BildSlider
  let sliders = document.querySelectorAll(
    '[class*="__swiper"]:not(.swiper-wrapper)'
  );
  if (sliders) {
    sliders.forEach((slider) => {
      slider.parentElement.classList.add('swiper');
      slider.classList.add('swiper-wrapper');
      for (const slide of slider.children) {
        slide.classList.add('swiper-slide');
      }
    });
  }
}

const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
  let swiper;

  breakpoint = window.matchMedia(breakpoint);

  const enableSwiper = function (className, settings) {
    swiper = new Swiper(className, settings);

    if (callback) {
      callback(swiper);
    }
  };

  const checker = function () {
    // console.log('CHANGE');
    if (breakpoint.matches) {
      console.log('da');
      return enableSwiper(swiperClass, swiperSettings);
    } else {
      if (swiper !== undefined) {
        console.log('net');
        swiper.destroy(true, true);
        return;
      }
    }
  };

  breakpoint.addEventListener('change', checker);
  checker();
};

const someFunc = (instance) => {
  if (instance) {
    instance.on('slideChange', function (e) {
      console.log('*** mySwiper.activeIndex', instance.activeIndex);
    });
  }
};

// Инициализация слайдеров
function initSliders() {
  // Добавление классов слайдера
  // при необходимости отключить

  bildSliders();

  // Перечень слайдеров

  if (document.querySelector('.product__carousels')) {
    const thumbsSwiper = new Swiper('.thumbs-carousel__slider', {
      // Подключаем модули слайдера
      // для конкретного случая
      //modules: [Navigation, Pagination],
      modules: [Navigation, Thumbs],
      direction: 'vertical',
      // effect: 'fade',
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },

      // observer: true,
      // observeParents: true,
      slidesPerView: 5,
      spaceBetween: 10,
      // autoHeight: true,
      speed: 800,
      // touchRatio: 0,
      //simulateTouch: false,
      // loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      // pagination: {
      // 	el: '.service__pagination',
      // 	clickable: true,
      // },
      // Arrows
      navigation: {
        prevEl: '.thumbs-carousel__navigation .thumbs-carousel__btn_prev',
        nextEl: '.thumbs-carousel__navigation .thumbs-carousel__btn_next',
      },

      on: {},
    });

    new Swiper('.main-carousel__slider', {
      // Подключаем модули слайдера
      // для конкретного случая
      //modules: [Navigation, Pagination],
      modules: [Navigation, EffectFade, Thumbs],
      effect: 'fade',
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },

      // observer: true,
      // observeParents: true,
      slidesPerView: 1,
      // spaceBetween: 10,
      // autoHeight: true,
      speed: 800,
      // touchRatio: 0,
      //simulateTouch: false,
      // loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      // pagination: {
      // 	el: '.service__pagination',
      // 	clickable: true,
      // },
      // Arrows
      navigation: {
        prevEl: '.promo__slider-nav .slider-nav-n__btn_prev',
        nextEl: '.promo__slider-nav .slider-nav-n__btn_next',
      },
      thumbs: {
        swiper: thumbsSwiper,
      },
      // breakpoints: {
      // 	0: {
      // 		slidesPerView: 1,
      // 		spaceBetween: 30,
      // 	},
      // 	// 320: {
      // 	// 	slidesPerView: "auto",
      // 	// 	spaceBetween: 28,
      // 	// },
      // 	// 768: {
      // 	// 	slidesPerView: 2,
      // 	// 	spaceBetween: 30,
      // 	// },
      // 	// 992: {
      // 	// },
      // 	// 1268: {
      // 	// 	slidesPerView: 1,
      // 	// 	spaceBetween: 44,
      // 	// },
      // },

      on: {},
    });
  }

  if (document.querySelector('.carousel__body')) {
    new Swiper('.carousel__slider', {
      // Подключаем модули слайдера
      // для конкретного случая
      //modules: [Navigation, Pagination],
      modules: [Navigation],
      // effect: 'fade',
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },

      // observer: true,
      // observeParents: true,
      slidesPerView: 6,
      spaceBetween: 20,
      // autoHeight: true,
      speed: 800,
      // touchRatio: 0,
      //simulateTouch: false,
      // loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      // pagination: {
      // 	el: '.service__pagination',
      // 	clickable: true,
      // },
      // Arrows
      navigation: {
        prevEl: '.carousel__nav .carousel__btn_prev',
        nextEl: '.carousel__nav .carousel__btn_next',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // 320: {
        // 	slidesPerView: "auto",
        // 	spaceBetween: 28,
        // },
        768: {
        	slidesPerView: 2,
        	// spaceBetween: 20,
        },
        992: {
          slidesPerView: 4,
        },
        1366: {
        	slidesPerView: 6,
        },
      },

      on: {},
    });
  }

  // if (document.querySelector('.promotion__slider')) {
  // 	resizableSwiper (
  // 		'(max-width: 992px)',
  // 		'.promotion__slider', {
  // 			// Подключаем модули слайдера
  // 			// для конкретного случая
  // 			//modules: [Navigation, Pagination],
  // 			modules: [Navigation],

  // 			// effect: 'fade',
  // 			// autoplay: {
  // 			//   delay: 2500,
  // 			//   disableOnInteraction: false,
  // 			// },

  // 			// observer: true,
  // 			// observeParents: true,
  // 			slidesPerView: 1,
  // 			spaceBetween: 0,
  // 			// autoHeight: true,
  // 			speed: 800,
  // 			// touchRatio: 0,
  // 			//simulateTouch: false,
  // 			//loop: true,
  // 			//preloadImages: false,
  // 			//lazy: true,
  // 			// Dotts
  // 			// pagination: {
  // 			// 	el: '.service__pagination',
  // 			// 	clickable: true,
  // 			// },
  // 			// Arrows
  // 			navigation: {
  // 				nextEl: `.promotion__slider .slider-nav-n .slider-nav-n__btn_next`,
  // 				prevEl: `.promotion__slider .slider-nav-n .slider-nav-n__btn_prev`,
  // 			},
  // 			// breakpoints: {
  // 			// 	0: {
  // 			// 		slidesPerView: 1,
  // 			// 		spaceBetween: 30,
  // 			// 	},
  // 			// 	// 320: {
  // 			// 	// 	slidesPerView: "auto",
  // 			// 	// 	spaceBetween: 28,
  // 			// 	// },
  // 			// 	// 768: {
  // 			// 	// 	slidesPerView: 2,
  // 			// 	// 	spaceBetween: 30,
  // 			// 	// },
  // 			// 	// 992: {
  // 			// 	// },
  // 			// 	// 1268: {
  // 			// 	// 	slidesPerView: 1,
  // 			// 	// 	spaceBetween: 44,
  // 			// 	// },
  // 			// },

  // 			on: {

  // 			}
  // 		}
  // 	)
  // }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();

  let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector('.swiper-scrollbar');
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener('load', function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
