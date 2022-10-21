export interface IProduct {
	name: string;
	prices: [{ name: string; price: number }];
	description: string;
	images: string[];
}
