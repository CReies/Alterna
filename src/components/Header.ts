export function setupHeader(el: HTMLElement) {
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
						<li class="header-menu-item active" id="menuIndex">Inicio</li>
						<li class="header-menu-item" id="menuHistory">Historia</li>
						<li class="header-menu-item" id="menuFAQ">Preguntas Frecuentes</li>
						<li class="header-menu-item" id="menuMission">Nuestra Misión</li>
						<li class="header-menu-item" id="menuContact">Contacto</li>
						<li class="header-menu-item" id="menuMore">Más</li>
					</ul>
				</nav>
			</div>
			<div class="header-social-container"></div>
	`;
}
