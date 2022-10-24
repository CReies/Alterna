(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();const v=document,t=s=>v.querySelector(s),p=s=>v.querySelectorAll(s),g=s=>`$${new Intl.NumberFormat().format(s)}`;function y(s){const e=r=>{const a=r.target;if(!a)return;const i=p(".menu-item");if(!a.classList.contains("active")){for(const o in i)Object.prototype.hasOwnProperty.call(i,o)&&i[o].classList.remove("active");a.classList.add("active")}};s.innerHTML=`
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
	`,p(".menu-item").forEach(r=>{r.addEventListener("click",e)})}let f=!1,h="",x="",b;const m=()=>{E(b)};function E(s){let e=f?"flex":"none";b=s,s.innerHTML=`
		<div class="modal-overlay" id="modalOverlay" style="display: ${e};">
			<div class="modal-body">
				<div class="modal-header">${h}</div>
				<div class="modal-content">${x}</div>
			</div>
		</div>
	`,t("#modalOverlay").addEventListener("click",r=>{r.currentTarget===r.target&&q(!1)},!0)}function q(s){f=s,m()}function L(s){h=s,m()}function j(s){x=s,m()}const A=[{name:"Mugs",description:"Mugs personalizados con cualquier foto o im\xE1gen.",prices:[{name:"Blanco",price:12e3},{name:"Luminiscente",price:15e3},{name:"M\xE1gico",price:2e4}],images:["././assets/img/mug1.jpeg","././assets/img/mug2.jpeg","././assets/img/mug3.jpeg","././assets/img/mug4.jpeg","././assets/img/mug5.jpeg"]},{name:"Posters",description:`P\xF3sters personalizados en madera e impresi\xF3n en vinilo full color.
 Si quieres otros tama\xF1os tambi\xE9n podemos hacerlo. Puedes personalizarlo con la foto o imagen que quieras.`,prices:[{name:"15x25",price:1e4},{name:"20x30",price:12e3},{name:"25x40",price:15e3},{name:"50x70",price:55e3},{name:"100x70",price:9e4},{name:"Poliptico 1.50x90",price:11e4}],images:["././assets/img/poster1.jpeg","././assets/img/poster2.jpeg","././assets/img/poster3.jpeg","././assets/img/poster4.jpeg","././assets/img/poster5.jpeg","././assets/img/poster6.jpeg","././assets/img/poster7.jpeg","././assets/img/poster8.jpeg","././assets/img/poster9.jpeg","././assets/img/poster10.jpeg","././assets/img/poster11.jpeg","././assets/img/poster12.jpeg","././assets/img/poster13.jpeg"]},{name:"Relojes",description:`Relojes personalizados con la foto o im\xE1gen que desees.
Si desean otra medida tambi\xE9n se puede realizar`,prices:[{name:"30x30",price:3e4}],images:["././assets/img/clock1.jpeg","././assets/img/clock2.jpeg","././assets/img/clock3.jpeg","././assets/img/clock4.jpeg"]}];function c(s,e){s.src=e}function l(s,e){const r=e.prices.map(u=>`<li>${u.name}: ${g(u.price)}</li>`);let a=0;const i=`<h2>${e.name}</h2>`,o=`
		<div class="img-container">
			<button id="prevImg"><</button>
			<img alt="${e.name}" id="${e.name}-Img" />
			<button id="nextImg">></button>
		</div>
		<div class="product-detail">
			<div class="description">${e.description}</div>
			<div class="prices">
				<ul>
					${r.toString().replaceAll(",","")}
				</ul>
			</div>
		</div>
	`,n=()=>{q(!0),j(o),L(i),c(t(`#${e.name}-Img`),e.images[a]),t("#nextImg").addEventListener("click",()=>{++a,a>=e.images.length&&(a=0),c(t(`#${e.name}-Img`),e.images[a])}),t("#prevImg").addEventListener("click",()=>{--a,a<0&&(a=e.images.length-1),c(t(`#${e.name}-Img`),e.images[a])})};s.innerHTML=`
		<div class="card">
			<div class="product-img">
				<img src="${e.images[0]}" alt="${e.name}" />
			</div>
			<div class="product-content">
				${e.name}	a partir de: ${g(e.prices[0].price)}</div>
			</div>
		</div>
	`,s.addEventListener("click",n)}const d=A;function O(s){s.innerHTML=`
		<div class="product" id="mugProduct"></div>
		<div class="product" id="clockProduct"></div>
		<div class="product" id="posterProduct"></div>
	`,l(t("#mugProduct"),d[0]),l(t("#clockProduct"),d[1]),l(t("#posterProduct"),d[2])}function P(s){s.innerHTML=`
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
					Nuestro emprendimiento ALTERNA inicia en el a\xF1o 2019 producto de la pandemia
					en el cual hubo un aumento del esp\xEDritu empresarial.
				</p>
				<p>
					Teniendo en cuenta el conocimiento en el sector de la publicidad, y el gusto
					por el arte y el dise\xF1o, decidimos comenzar con nuestro emprendimiento, el
					cual tiene como producto principal la realizaci\xF3n de retablos personalizados
					que se pueden realizar con cualquier imagen o fotograf\xEDa, ofrecemos variedad
					de medidas est\xE1ndar y si la persona desea una medida en espec\xEDfico tambi\xE9n la
					realizamos.
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
					Somos una empresa de origen nacional con el objetivo de ofrecer productos de
					decoraci\xF3n de interiores. Estamos comprometidos con nuestros clientes y nos
					enfocamos en sus necesidades. Encontramos soluciones integrales que se adapten
					productivamente a ellos, nuestra misi\xF3n es llevar arte a sus vidas.
				</p>
				<p>
					Nos diferenciamos por nuestros exclusivos productos y el constante inter\xE9s por
					la innovaci\xF3n que aplicamos sustancialmente al desarrollo diario de nuestra
					empresa, desarrollamos CALIDAD, nos preocupamos por nuestros clientes y por
					qu\xE9 cada uno de nuestros productos fabricados logre satisfacer plenamente sus
					necesidades, somos responsables con nuestro trabajo y las personas son nuestro
					compromiso m\xE1s importante.
				</p>
				<p>
					Queremos llegar a cada hogar, empresa, y dise\xF1ar en ellos un medio de
					expresi\xF3n. Tenemos precios muy competitivos y exequibles, por esa raz\xF3n
					queremos que ustedes conozcan cada uno de nuestros productos decorativos.
				</p>
			</article>
		</section>
		<section class="contact" id="contact">
			<h2>Contacto</h2>
			<form>
			<div class="form-group">
				<label for="name">Su Nombre</label>
				<input type="text" name="name" id="name" placeholder="Jose" />
			</div>
			<div class="form-group">
				<label for="name">Su correo</label>
				<input
				type="email"
				name="email"
				id="email"
				placeholder="alguien@ejemplo.com" />
			</div>
			<div class="form-group">
				<label for="comment">Un comentario</label>
				<textarea
				name="comment"
				id="comment"
				placeholder="Me gusta lo que hacen">
				</textarea>
			</div>
			<button id="submit">Enviar</button>
</form>

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
	`,O(t("#products")),E(t("#modal")),t("#submit").addEventListener("click",e=>{e.preventDefault()})}document.querySelector("#app").innerHTML=`
  <header id="header"></header>
  <main id="main"></main>
`;y(t("#header"));P(t("#main"));
