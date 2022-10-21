import { $ } from '../util/functions';

let visible = true;
let header = '';
let content = '';
let modal: HTMLElement;

const rerender = () => {
	setupModal(modal);
};

export function setupModal(el: HTMLElement) {
	let display = visible ? 'flex' : 'none';
	modal = el;

	el.innerHTML = `
		<div class="modal-overlay" id="modalOverlay" style="display: ${display};">
			<div class="modal-body">
				<div class="modal-header">${header}</div>
				<div class="modal-content">${content}</div>
			</div>
		</div>
	`;

	$('#modalOverlay').addEventListener('click', () => setModalVisible(false));
}

export function setModalVisible(val: boolean) {
	visible = val;
	console.log(header);
	rerender();
}

export function setModalHeader(val: string) {
	header = val;
	rerender();
}

export function setModalContent(val: string) {
	content = val;
	rerender();
}
