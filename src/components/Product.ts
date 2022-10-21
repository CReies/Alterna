import { $, parsePrice } from '../util/functions';
import { IProduct } from '../util/types';
import _products from '../util/products.json';
import { setModalContent, setModalHeader, setModalVisible } from './Modal';
import { setupImg } from './Img';

export function setupProduct(el: HTMLElement, product: IProduct) {
	const prices = product.prices.map(
		price => `<li>${price.name}: ${parsePrice(price.price)}</li>`
	);

	let actualImage = 0;

	const modalHeader = `<h2>${product.name}</h2>`;

	const modalContent = `
		<div class="img-container">
			<button id="prevImg"><</button>
			<img alt="${product.name}" id="${product.name}-Img" />
			<button id="nextImg">></button>
		</div>
		<div class="product-detail">
			<div class="description">${product.description}</div>
			<div class="prices">
				<ul>
					${prices.toString().replaceAll(',', '')}
				</ul>
			</div>
		</div>
	`;

	const openModal = () => {
		setModalVisible(true);
		setModalContent(modalContent);
		setModalHeader(modalHeader);
		setupImg(
			$(`#${product.name}-Img`) as HTMLImageElement,
			product.images[actualImage]
		);
		$('#nextImg').addEventListener('click', () => {
			++actualImage;
			if (actualImage >= product.images.length) {
				actualImage = 0;
			}
			setupImg(
				$(`#${product.name}-Img`) as HTMLImageElement,
				product.images[actualImage]
			);
		});
		$('#prevImg').addEventListener('click', () => {
			--actualImage;
			if (actualImage < 0) {
				actualImage = product.images.length - 1;
			}
			setupImg(
				$(`#${product.name}-Img`) as HTMLImageElement,
				product.images[actualImage]
			);
		});
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
