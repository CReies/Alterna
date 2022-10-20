import { $ } from '../util/functions';
import { setupProducts } from './Products';

export function setupMain(el: HTMLElement) {
	el.innerHTML = `
		<section class="index">
			<div class="title row">
				<h1>Alterna, Una tienda con estilo</h1>
			</div>
			<div class="row">
				<img src="src/assets/img/sample.jpeg" alt="Muestra" class="sample" />
			</div>
			<div class="row products" id="products"></div>
		</section>
		<section class="history">
			<article>
				<h2>Nuestra Historia</h2>
				<h4>Nuestros Principios</h4>
				<p>
					Imagina mezclar colores, patrones, tejidos y hasta símbolos ancestrales,
					todo esto dará como resultado una pieza de vestuario hipnotizante, pero lo
					más llamativo es la gente que trabaja tras ella. ALTERNA junto al trabajo de
					talentosos artesanos te abren la puerta al consumo responsable y la
					producción sustentable.Imagina
				</p>
			</article>
		</section>
	`;

	setupProducts($('#products'));
}
