import { $, parsePrice } from '../util/functions';

export function setupProduct(
	el: HTMLElement,
	imgs: string[],
	price: number,
	name: string
) {
	console.log(el);
	console.log($('#mugProduct'));
	el.innerHTML = `
		<div class="card">
			<div class="product-img">
				<img src="${imgs[0]}" alt="${name}" />
			</div>
			<div class="product-content">
				<div class="name">${name}</div>
				<div class="price">${parsePrice(price)}</div>
			</div>
		</div>
	`;
}
