import { $ } from '../util/functions';

let visible = false;
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

	$('#modalOverlay').addEventListener(
		'click',
		e => {
			if (e.currentTarget !== e.target) return;
			setModalVisible(false);
		},
		true
	);
}

export function setModalVisible(val: boolean) {
	visible = val;
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
