import { parsePrice } from '../util/functions';

export function setupProduct(
	el: HTMLElement,
	imgs: string[],
	price: number,
	name: string
) {
	el.innerHTML = `
		<div class="card">
			<div class="product-img">
				<img src="${imgs[0]}" alt="${name}" />
			</div>
			<div class="product-content">
				${name}	a partir de: ${parsePrice(price)}</div>
			</div>
		</div>
	`;
}
