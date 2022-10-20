import { $$ } from '../util/functions';

export function setupHeader(el: HTMLElement) {
	const handleActive = (e: MouseEvent) => {
		const t = e.target as HTMLElement;
		if (!t) return;

		const navElements = $$('.menu-item');

		if (!t.classList.contains('active')) {
			for (const element in navElements) {
				if (Object.prototype.hasOwnProperty.call(navElements, element)) {
					const el = navElements[element];
					el.classList.remove('active');
				}
			}
			t.classList.add('active');
		}
	};

	el.innerHTML = `
			<div class="logo-container">
				<img
					src="src/assets/img/logo.jpeg"
					alt="alterna logo"
					class="logo" />
			</div>
			<div class="header-menu-container">
				<nav>
					<ul class="header-menu" id="headerMenu">
						<li><a href="#index" class="menu-item active">Inicio</a></li>
						<li><a href="#history" class="menu-item">Historia</a></li>
						<li><a href="#FAQ" class="menu-item">Preguntas Frecuentes</a></li>
						<li><a href="#mission" class="menu-item">Nuestra Misión</a></li>
						<li><a href="#contact" class="menu-item">Contacto</a></li>
						<li><a href="#more" class="menu-item">Más</a></li>
					</ul>
				</nav>
			</div>
			<div class="header-social-container"></div>
	`;

	$$('.menu-item').forEach(el => {
		el.addEventListener('click', handleActive);
	});
}
