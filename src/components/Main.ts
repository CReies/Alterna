import { $ } from '../util/functions';
import { setupModal } from './Modal';
import { setupProducts } from './Products';

export function setupMain(el: HTMLElement) {
	el.innerHTML = `
		<section class="index" id="index">
			<div class="title row">
				<h1>Alterna, Una tienda con estilo</h1>
			</div>
			<div class="row">
				<img src="src/assets/img/sample.jpeg" alt="Muestra" class="sample" />
			</div>
			<div class="row products" id="products"></div>
		</section>
		<section class="history" id="history">
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
		<section class="FAQ" id="FAQ">
			<article>
				<h4>
					¿QUÉ PORCENTAJE DE LOS INGRESOS RECIBEN LOS ARTESANOS POR SUS PRODUCTOS?
				</h4>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil aperiam
					porro neque obcaecati dignissimos eaque ea excepturi debitis odio culpa,
					tempore vel hic sunt molestias at! Deleniti quisquam quam quod!
				</p>
			</article>
			<article>
				<h4>
					NO ESTOY INTERESADO EN COMPRAR LOS PRODUCTOS, ¿DE QUÉ OTRA MANERA PUEDO
					AYUDAR?
				</h4>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil aperiam
					porro neque obcaecati dignissimos eaque ea excepturi debitis odio culpa,
					tempore vel hic sunt molestias at! Deleniti quisquam quam quod!
				</p>
			</article>
			<article>
				<h4>¿HAY OPORTUNIDADES PARA VOLUNTARIOS EN ALTERNA?</h4>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil aperiam
					porro neque obcaecati dignissimos eaque ea excepturi debitis odio culpa,
					tempore vel hic sunt molestias at! Deleniti quisquam quam quod!
				</p>
			</article>
		</section>
		<section class="mission" id="mission">
			<article>
				<h2>Mision</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil aperiam
					porro neque obcaecati dignissimos eaque ea excepturi debitis odio culpa,
					tempore vel hic sunt molestias at! Deleniti quisquam quam quod!
				</p>
			</article>
		</section>
		<section class="contact" id="contact">
			<h2>Contacto</h2>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, aliquam.
				Autem nulla ad suscipit vero corporis dolorum voluptatibus consequatur
				corrupti, voluptatem omnis laborum tempore, quos aliquam. Officiis dolore
				aspernatur molestias.
			</p>
		</section>
		<section class="more" id="more">
			<h2>More</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
				reprehenderit quae? Provident sit, magnam rerum natus ad unde odio,
				perferendis voluptatum doloremque voluptate in eos deleniti odit blanditiis
				officiis possimus!
			</p>
		</section>
		<div class="modal" id="modal"></div>
	`;

	setupProducts($('#products'));
	setupModal($('#modal'));
}
