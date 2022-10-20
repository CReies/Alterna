import { d } from './consts';

export const $ = (sel: string): HTMLElement => d.querySelector(sel)!;
export const $$ = (sel: string): NodeListOf<HTMLElement> =>
	d.querySelectorAll(sel)!;

export const parsePrice = (price: number): string => {
	return `$${new Intl.NumberFormat().format(price)}`;
};
