import { $ } from '../util/functions';
import _products from '../util/products.json';
import { IProduct } from '../util/types';
import { setupProduct } from './Product';

const products = _products as IProduct[];

export function setupProducts(el: HTMLElement) {
	el.innerHTML = `
		<div class="product" id="mugProduct"></div>
		<div class="product" id="clockProduct"></div>
		<div class="product" id="posterProduct"></div>
	`;

	setupProduct($('#mugProduct'), products[0]);
	setupProduct($('#clockProduct'), products[1]);
	setupProduct($('#posterProduct'), products[2]);
}
