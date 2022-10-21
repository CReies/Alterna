import { parsePrice } from '../util/functions';
import { IProduct } from '../util/types';
import _products from '../util/products.json';
import { setModalContent, setModalHeader, setModalVisible } from './Modal';

export function setupProduct(el: HTMLElement, product: IProduct) {
	const modalHeader = product.name;
	const modalContent = `

	`;

	const openModal = () => {
		setModalVisible(true);
		setModalHeader(modalHeader);
		setModalContent(modalContent);
	};

	el.innerHTML = `
		<div class="card">
			<div class="product-img">
				<img src="${product.images[0]}" alt="${product.name}" />
			</div>
			<div class="product-content">
				${product.name}	a partir de: ${parsePrice(product.prices[0].price)}</div>
			</div>
		</div>
	`;

	el.addEventListener('click', openModal);
}
