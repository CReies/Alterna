import { $ } from '../util/functions';
import { setupProducts } from './Products';

export function setupMain(el: HTMLElement) {
	el.innerHTML = `
		<div class="title row">
			<h1>Alterna, Una tienda con estilo</h1>
		</div>
		<div class="row">
			<img src="public/assets/img/sample.jpeg" alt="Muestra" class="sample" />
		</div>
		<div class="row products" id="products"></div>
	`;

	setupProducts($('#products'));
}
