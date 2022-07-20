const searchBtn = document.querySelector(".header__search-btn");
const closeBtn = document.querySelector(".search__close-btn");
const searchBody = document.querySelector(".search__body");

searchBtn.addEventListener('click', () => {
	searchBody.classList.add('active-form');
});

closeBtn.addEventListener('click', () => {
	searchBody.classList.remove('active-form');
});

const menuActive = document.querySelectorAll(".menu__link");

menuActive.forEach(item => {
	item.addEventListener('click', () => {
		menuActive.classList.add('active-menu');
	});
});