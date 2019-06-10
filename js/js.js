
window.addEventListener('DOMContentLoaded', function () {
	'use strict';

	let headerBurger = document.querySelector('.header__burger');

	headerBurger.onclick = function() {
		headerBurger.classList.toggle('header__burger--active');
	};

	function caculate() {
		let calcLength = document.querySelector('.calc__length'),
			calcWidth = document.querySelector('.calc__width'),
			calcThickness = document.querySelector('.calc__thickness'),
			calcVolume = document.querySelector('.calc__volume'),
			calcWeight = document.querySelector('.calc__weight'),
			calcBtnCall = document.querySelectorAll('.calc__btn-call');

		let appData = {
			length: 	[],		// Длинна
			width: 		[],		// Ширина
			thickness: 	[],		// Толщина
			volume: 	[],		// Объем
			weight: 	[],		// Масса
			selectValue:[]		// Наименование товара
		}

		let selectOne = document.querySelector('#one'),
			selectTwo = document.querySelector('#two'),
			selectThree = document.querySelector('#three'),
			selectFour = document.querySelector('#four'),
			calcSelect = document.querySelector('#calc__select');

		let selectValuePopap = document.querySelector('.select__value-popap'),
			volumeValue = document.querySelector('.volume__value');

		let popap = document.querySelector('.feedback'),
			close = document.querySelector('.feedback__close'),
			feedbackSubmit = document.querySelector('.feedback__submit');

		let calkCalcOne = document.querySelector('.calk__calc--one'),
			calkCalcTwo = document.querySelector('.calk__calc--two');

		let calc = document.querySelector('.calc');

		let calcBtnCallVolume = document.querySelector('.calc__btn-call--volume'),
			calcBtnCallWeight = document.querySelector('.calc__btn-call--weight');

		if (calcLength != undefined) {
			calc.addEventListener('mouseover', function(){
				appData.selectValue = calcSelect.value;
				if (appData.selectValue == "Пенополистирол самозатухающий" || appData.selectValue == "Бруски из пенополистирола") {
					calkCalcOne.classList.add('calk__calc--active');
					calkCalcTwo.classList.remove("calk__calc--active");
				} else if (appData.selectValue == "Дробленый пенополистирол" || appData.selectValue == "Вспененная гранула") {
					calkCalcTwo.classList.add('calk__calc--active');
					calkCalcOne.classList.remove("calk__calc--active");
				} else {
					calkCalcOne.classList.remove("calk__calc--active");
					calkCalcTwo.classList.remove("calk__calc--active");
				}
			});
			
			calcBtnCallVolume.addEventListener('click', function(){
				volumeValue.innerHTML = 'объемом ' + appData.volume + ' м<sup>3</sup>';
			});
			
			calcBtnCallWeight.addEventListener('click', function(){
				volumeValue.innerHTML = 'массой ' + appData.weight + ' кг';
			});
			
			[].forEach.call(calcBtnCall, function(button) {
				button.addEventListener('click', function() {
					selectValuePopap.innerHTML = appData.selectValue;
			
					popap.classList.add("feedback__show");
				});
			});
			close.addEventListener('click', function() {
				popap.classList.remove("feedback__show");
			});
			
			calcWeight.addEventListener('input', function() {
				appData.weight = calcWeight.value;
			});
			
			calcLength.addEventListener('input', function() {
				appData.length = calcLength.value;
				let l = appData.length,
					w = appData.width,
					t = appData.thickness;
				calcVolume.value = +l * +w * +t;
				appData.volume = calcVolume.value;
			});
			
			calcWidth.addEventListener('input', function() {
				appData.width = calcWidth.value;
				let l = appData.length,
					w = appData.width,
					t = appData.thickness;
				calcVolume.value = +l * +w * +t;
				appData.volume = calcVolume.value;
			});
			
			calcThickness.addEventListener('input', function() {
				appData.thickness = calcThickness.value;
				let l = appData.length,
					w = appData.width,
					t = appData.thickness;
				calcVolume.value = +l * +w * +t;
				appData.volume = calcVolume.value;
			});
		}
	}

	caculate();

	//табы


	tabRun('.info .tabs', '.info .tab__container', '.info .cotent');    
        
    function tabRun(z, x, c) {
		console.log("dsadas")
        let priceTabList = document.querySelectorAll(z),                    // Создаем переменную с табами
            priceTabItem = document.querySelector(x),                       // Создаем переменную с контейнером
            priceCotent = document.querySelectorAll(c);                         // Создаем переменную с контентом
        if (priceTabList.length > 0) {
            let hideTabContent = function(a) {                                        // Создаем функцию которая скрывает контент
                for (let i = a; i < priceCotent.length; i++) {
                    priceCotent[i].classList.remove('hide');
                    priceCotent[i].classList.add('hide');
                }
        
                for (let i = a; i < priceTabList.length; i++) {
                    priceTabList[i].classList.remove('active');
                }
            };
        
            hideTabContent(1);                                                  // Вызываем функцию с числом один что бы при цикле начиналось все не с первого элемента а со второго
        
            let showTabContent = function(b) {                                        // Создаем функцию которая показывает контент если он скрыт
                if (priceCotent[b].classList.contains('hide')) {
                    priceCotent[b].classList.remove('hide');
                }
        
                if (!priceCotent[b].classList.contains('hide')) {
                    priceTabList[b].classList.add('active');
                }        
            };    
            
            priceTabItem.addEventListener('click', function (event) {             //
                let target = event.target;
                if (target && target.classList.contains('tabs')) {
                    for (let i = 0; i < priceTabList.length; i++) {
                        if (target == priceTabList[i]) {
                            hideTabContent(0);
                            showTabContent(i);
                            break;
                        }
                    }
                }
            });  
        }
    }
	//Карусель

	slider ('.product__slider_container', '.product__prev', '.product__next');

	function slider (a, b, c) {
			
		let slideIndex = 1,
			slides = document.querySelectorAll(a),
			prev = document.querySelector(b),
			next = document.querySelector(c);
		if (slides.length > 0) {    
			let showSlides = function  (n) {

				if (n > slides.length) {
					slideIndex = 1;
				}

				if (n < 1) {
					slideIndex = slides.length;
				}

				slides.forEach((item) => item.style.display = 'none');
				
				slides[slideIndex - 1].style.display = 'flex';
			}

			showSlides(slideIndex);

			let plusSlides = function (n) {
				showSlides(slideIndex += n);
			}

			prev.addEventListener('click', function() {
				plusSlides(-1);
			});

			
			next.addEventListener('click', function() {
				plusSlides(1);
			});
		}        
	} 

	function popularSlider (a, b, c, d, e) {
			
		let slideIndex = 1,
			slides = document.querySelectorAll(a),
			prev = document.querySelector(b),
			next = document.querySelector(c),
			dotsWrap = document.querySelector(d),
        	dots = document.querySelectorAll(e);
		if (slides.length > 0) {    
			let showSlides = function  (n) {

				if (n > slides.length) {
					slideIndex = 1;
				}

				if (n < 1) {
					slideIndex = slides.length;
				}

				slides.forEach((item) => item.style.display = 'none');
				dots.forEach((item) => item.classList.remove('dot-active'));
				
				slides[slideIndex - 1].style.display = 'flex';
				dots[slideIndex - 1].classList.add('dot-active');
			}

			showSlides(slideIndex);

			let plusSlides = function (n) {
				showSlides(slideIndex += n);
			}

			let curentSlide = function(n) {
				showSlides(slideIndex = n);
			}

			prev.addEventListener('click', function() {
				plusSlides(-1);
			});

			
			next.addEventListener('click', function() {
				plusSlides(1);
			});

			dotsWrap.addEventListener('click', function(event) {
				for (let i = 0; i < dots.length + 1; i++) {
					if (event.target.classList.contains('popular__dot') && event.target == dots[i - 1]) {
						curentSlide(i);
					}
				}
			});
		}        
	} 
	
	popularSlider ('.popular__item', '.popular__prev', '.popular__next', '.popular__slider-dots', '.popular__dot');

	function categories () {
		let toolbarCollapse = document.querySelectorAll('.toolbar__collapse'),
			toolbarArrow = document.querySelectorAll('.toolbar__arrow'),
			toolbarContainerLinks = document.querySelectorAll('.toolbar__container-links');
		
		for (let i = 0; toolbarCollapse.length > i; i++) {
			toolbarContainerLinks[i].style.display = 'none';
			toolbarContainerLinks[0].style.display = 'flex';
			toolbarArrow[0].classList.add('toolbar__arrow--top');
			toolbarCollapse[i].addEventListener('click', function() {
				if (toolbarContainerLinks[i].style.display == 'none') {
					toolbarContainerLinks[i].style.display = 'flex';
					toolbarArrow[i].classList.add('toolbar__arrow--top');
				} else {
					toolbarContainerLinks[i].style.display = 'none';
					toolbarArrow[i].classList.remove('toolbar__arrow--top');
				}				
			})
		}
	}

	categories ()

	workExamples ('.product__big_image', '.workexamples__small_image'); 

	function workExamples (a, b) {
		let workexamplesBigImage = document.querySelectorAll(a),
			workexamplesSmallImage = document.querySelectorAll(b),
			shadowBlock = document.querySelectorAll('.shadow__block');
		if (workexamplesBigImage != undefined) {            
			for (let i = 0; workexamplesSmallImage.length > i; i++) {
				for (let a = 0; workexamplesBigImage.length > a; a++) {
					workexamplesBigImage[a].src = workexamplesSmallImage[0].src;
					shadowBlock[0].style.display = 'none';
					
					workexamplesSmallImage[i].addEventListener('click', function(){
						for (let c = 0; shadowBlock.length > c; c++) {
							shadowBlock[c].style.display = 'block';
						}
						workexamplesBigImage[a].src = workexamplesSmallImage[i].src;
						shadowBlock[i].style.display = 'none';
					}) 
				}                  
			}
		}        
	}

});