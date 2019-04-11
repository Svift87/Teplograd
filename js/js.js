'use strict';

let headerBurger = document.querySelector('.header__burger');

headerBurger.onclick = function() {
	headerBurger.classList.toggle('header__burger--active');
};

let calcLength = document.querySelector('.calc__length'),
	calcWidth = document.querySelector('.calc__width'),
	calcThickness = document.querySelector('.calc__thickness'),
	calcVolume = document.querySelector('.calc__volume'),
	calcBtnCall = document.querySelector('.calc__btn-call');

let appData = {
	length: 	[],		// Длинна
	width: 		[],		// Ширина
	thickness: 	[],		// Толщина
	volume: 	[],		// Объем
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



calcBtnCall.addEventListener('click', function() {
	appData.selectValue = calcSelect.value;
	
	selectValuePopap.innerHTML = appData.selectValue;
	volumeValue.innerHTML = appData.volume;
	
	popap.classList.add("feedback__show");
});

close.addEventListener('click', function() {
	popap.classList.remove("feedback__show");
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





