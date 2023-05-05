import { sanityClient } from '@lib/sanity';

import { postsQuery } from '@queries/posts';

import { caseStudiesQuery } from '@root/src/queries/caseStudies';
import { Project, Post } from '@root/src/types';

export default async function sitemap() {
	const blogPosts: Post[] = await sanityClient.fetch(postsQuery());
	const caseStudies: Project[] = await sanityClient.fetch(caseStudiesQuery());

	const blogRoutes = blogPosts.map(({ slug, publishedAt }) => ({
		url: `https://mahmoudirshaid.com/blog/${slug}`,
		lastModified: new Date(publishedAt).toISOString().split('T')[0],
		priority: 0.65,
	}));
	const caseStudiesRoutes = caseStudies.map(({ slug, publishedAt }) => ({
		url: `https://mahmoudirshaid.com/project/${slug}`,
		lastModified: new Date(publishedAt).toISOString().split('T')[0],
		priority: 0.65,
	}));
	const staticRoutes = [
		'',
		'/about',
		'/blog',
		'/project',
		'/contact',
		'/recruiters',
		'/uses',
	].map((route) => {
		return {
			url: `https://mahmoudirshaid.com${route}`,
			lastModified: new Date().toISOString().split('T')[0],
			priority: route === '' ? 1 : 0.8,
		};
	});

	return [...staticRoutes, ...blogRoutes, ...caseStudiesRoutes];
}
