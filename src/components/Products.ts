import { $ } from '../util/functions';
import { setupProduct } from './Product';

export function setupProducts(el: HTMLElement) {
	el.innerHTML = `
		<div class="product" id="mugProduct"></div>
		<div class="product" id="clockProduct"></div>
		<div class="product" id="posterProduct"></div>
	`;

	let mugImgsPaths: string[] = [];
	let clockImgsPaths: string[] = [];
	let posterImgsPaths: string[] = [];

	for (let i = 0; i < 13; i++) {
		if (i <= 4) {
			clockImgsPaths.push(`public/assets/img/clock${i + 1}.jpeg`);
		}
		if (i <= 5) {
			mugImgsPaths.push(`public/assets/img/mug${i + 1}.jpeg`);
		}
		if (i <= 13) {
			posterImgsPaths.push(`public/assets/img/poster${i + 1}.jpeg`);
		}
	}

	//! Blanco: $12k | Luminiscente: $15k | Magico: $20k
	setupProduct($('#mugProduct'), mugImgsPaths, 12000, 'Mug');

	setupProduct($('#clockProduct'), clockImgsPaths, 12000, 'Clock');

	//! 15x25: $10k | 20x30: $12k | 25x40 = $15k | 50x70: $55k | 100x70: $90k | Poliptico 150x90: $110k
	setupProduct($('#posterProduct'), posterImgsPaths, 12000, 'Poster');
}
