'use strict';

let headerBurger = document.querySelector('.header__burger');

headerBurger.onclick = function() {
	headerBurger.classList.toggle('header__burger--active');
};

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





