(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();function d(i){i.innerHTML=`
			<div class="logo-container">
				<img
					src="public/assets/img/logo.jpeg"
					alt="alterna logo"
					class="logo" />
			</div>
			<div class="header-menu-container">
				<nav>
					<ul class="header-menu" id="headerMenu">
						<li class="header-menu-item active" id="menuIndex">Inicio</li>
						<li class="header-menu-item" id="menuHistory">Historia</li>
						<li class="header-menu-item" id="menuFAQ">Preguntas Frecuentes</li>
						<li class="header-menu-item" id="menuMission">Nuestra Misi\xF3n</li>
						<li class="header-menu-item" id="menuContact">Contacto</li>
						<li class="header-menu-item" id="menuMore">M\xE1s</li>
					</ul>
				</nav>
			</div>
			<div class="header-social-container"></div>
	`}const a=document,o=i=>a.querySelector(i),u=i=>`$${new Intl.NumberFormat().format(i)}`;function l(i,t,c,r){console.log(i),console.log(o("#mugProduct")),i.innerHTML=`
		<div class="card">
			<div class="product-img">
				<img src="${t[0]}" alt="${r}" />
			</div>
			<div class="product-content">
				<div class="name">${r}</div>
				<div class="price">${u(c)}</div>
			</div>
		</div>
	`}function m(i){i.innerHTML=`
		<div class="product" id="mugProduct"></div>
		<div class="product" id="clockProduct"></div>
		<div class="product" id="posterProduct"></div>
	`;let t=[],c=[],r=[];for(let e=0;e<13;e++)e<=4&&c.push(`public/assets/img/clock${e+1}.jpeg`),e<=5&&t.push(`public/assets/img/mug${e+1}.jpeg`),e<=13&&r.push(`public/assets/img/poster${e+1}.jpeg`);//! Blanco: $12k | Luminiscente: $15k | Magico: $20k
l(o("#mugProduct"),t,12e3,"Mug"),l(o("#clockProduct"),c,3e4,"Clock");//! 15x25: $10k | 20x30: $12k | 25x40 = $15k | 50x70: $55k | 100x70: $90k | Poliptico 150x90: $110k
l(o("#posterProduct"),r,12e3,"Poster")}function p(i){i.innerHTML=`
		<div class="title row">
			<h1>Alterna, Una tienda con estilo</h1>
		</div>
		<div class="row">
			<img src="public/assets/img/sample.jpeg" alt="Muestra" class="sample" />
		</div>
		<div class="row products" id="products"></div>
	`,m(o("#products"))}document.querySelector("#app").innerHTML=`
  <header id="header"></header>
  <main id="main"></main>
`;d(o("#header"));p(o("#main"));
