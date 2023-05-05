import type { BlockContent, Company } from '@types';

export interface Project {
	body: BlockContent[];
	client: Company;
	mainImage: string;
	publishedAt: string;
	secondaryImages: string[];
	seoDescription: string;
	skills: string[];
	slug: string;
	title: string;
	url: string;
}
