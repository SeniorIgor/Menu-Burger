import './../styles/style.scss';

document.addEventListener('DOMContentLoaded', () => {
	const elem = document.querySelector('.header__burger');
	const menu = document.querySelector('.header__menu');

	if (elem && menu) {
		elem.addEventListener('click', () => {
			elem.classList.toggle('active');
			menu.classList.toggle('active');
			document.body.classList.toggle('lock');
		});
	}
});