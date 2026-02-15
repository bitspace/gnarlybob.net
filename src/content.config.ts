import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/data/writing' }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		description: z.string().optional(),
	}),
});

const travelResearch = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/data/travel-research/summer-2026' }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		destination: z.string(),
		compositeScore: z.number().optional(),
		modelsCount: z.number().optional(),
		tier: z.number().optional(),
		description: z.string().optional(),
		type: z.enum(['consensus', 'comparison']),
	}),
});

export const collections = { writing, travelResearch };
