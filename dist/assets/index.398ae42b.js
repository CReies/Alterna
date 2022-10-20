(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const u=document,r=i=>u.querySelector(i),l=i=>u.querySelectorAll(i),d=i=>`$${new Intl.NumberFormat().format(i)}`;function m(i){const o=a=>{const s=a.target;if(!s)return;const e=l(".menu-item");if(!s.classList.contains("active")){for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&e[t].classList.remove("active");s.classList.add("active")}};i.innerHTML=`
			<div class="logo-container">
				<img
					src="./assets/img/logo.jpeg"
					alt="alterna logo"
					class="logo" />
			</div>
			<div class="header-menu-container">
				<nav>
					<ul class="header-menu" id="headerMenu">
						<li><a href="#index" class="menu-item active">Inicio</a></li>
						<li><a href="#history" class="menu-item">Historia</a></li>
						<li><a href="#FAQ" class="menu-item">Preguntas Frecuentes</a></li>
						<li><a href="#mission" class="menu-item">Nuestra Misi\xF3n</a></li>
						<li><a href="#contact" class="menu-item">Contacto</a></li>
						<li><a href="#more" class="menu-item">M\xE1s</a></li>
					</ul>
				</nav>
			</div>
			<div class="header-social-container"></div>
	`,l(".menu-item").forEach(a=>{a.addEventListener("click",o)})}function n(i,o,a,s){i.innerHTML=`
		<div class="card">
			<div class="product-img">
				<img src="${o[0]}" alt="${s}" />
			</div>
			<div class="product-content">
				${s}	a partir de: ${d(a)}</div>
			</div>
		</div>
	`}function p(i){i.innerHTML=`
		<div class="product" id="mugProduct"></div>
		<div class="product" id="clockProduct"></div>
		<div class="product" id="posterProduct"></div>
	`;let o=[],a=[],s=[];for(let e=0;e<13;e++)e<=4&&a.push(`./assets/img/clock${e+1}.jpeg`),e<=5&&o.push(`./assets/img/mug${e+1}.jpeg`),e<=13&&s.push(`./assets/img/poster${e+1}.jpeg`);//! Blanco: $12k | Luminiscente: $15k | Magico: $20k
n(r("#mugProduct"),o,12e3,"Mugs"),n(r("#clockProduct"),a,12e3,"Relojes");//! 15x25: $10k | 20x30: $12k | 25x40 = $15k | 50x70: $55k | 100x70: $90k | Poliptico 150x90: $110k
n(r("#posterProduct"),s,12e3,"Posters")}function h(i){i.innerHTML=`
		<section class="index" id="index">
			<div class="title row">
				<h1>Alterna, Una tienda con estilo</h1>
			</div>
			<div class="row">
				<img src="./assets/img/sample.jpeg" alt="Muestra" class="sample" />
			</div>
			<div class="row products" id="products"></div>
		</section>
		<section class="history" id="history">
			<article>
				<h2>Nuestra Historia</h2>
				<h4>Nuestros Principios</h4>
				<p>
					Imagina mezclar colores, patrones, tejidos y hasta s\xEDmbolos ancestrales,
					todo esto dar\xE1 como resultado una pieza de vestuario hipnotizante, pero lo
					m\xE1s llamativo es la gente que trabaja tras ella. ALTERNA junto al trabajo de
					talentosos artesanos te abren la puerta al consumo responsable y la
					producci\xF3n sustentable.Imagina
				</p>
			</article>
		</section>
		<section class="FAQ" id="FAQ">
			<article>
				<h4>
					\xBFQU\xC9 PORCENTAJE DE LOS INGRESOS RECIBEN LOS ARTESANOS POR SUS PRODUCTOS?
				</h4>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil aperiam
					porro neque obcaecati dignissimos eaque ea excepturi debitis odio culpa,
					tempore vel hic sunt molestias at! Deleniti quisquam quam quod!
				</p>
			</article>
			<article>
				<h4>
					NO ESTOY INTERESADO EN COMPRAR LOS PRODUCTOS, \xBFDE QU\xC9 OTRA MANERA PUEDO
					AYUDAR?
				</h4>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil aperiam
					porro neque obcaecati dignissimos eaque ea excepturi debitis odio culpa,
					tempore vel hic sunt molestias at! Deleniti quisquam quam quod!
				</p>
			</article>
			<article>
				<h4>\xBFHAY OPORTUNIDADES PARA VOLUNTARIOS EN ALTERNA?</h4>
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
	`,p(r("#products"))}document.querySelector("#app").innerHTML=`
  <header id="header"></header>
  <main id="main"></main>
`;m(r("#header"));h(r("#main"));
