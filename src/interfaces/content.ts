export interface IContent {
	id: number;
	title: string;
	body: string;
	image: string;
	layout: 'row' | 'row-reverse';
	color: string;
	backgroundColor: string;
}