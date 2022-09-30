/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */
export interface Locals {
	userid: string;
}

export type BlogAttributes = {
	published: boolean
	publishedOn: string
	lastModifiedOn: string
	title: string
	author: string
	excerpt: string
	coverImage: {
		coverUrl: string
		url: string
		accreditation: string
		alt: string
	}
	canonicalLinks: string
}

export type Blog = BlogAttributes & {
	html: string
	readingTime: string
	slug: string
}