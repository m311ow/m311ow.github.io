import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'
// TODO: EVENTUALLY REMOVE OPTIONAL() AND LEAVE IT ONLY WHERE IT MAKES SENSE
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      certificate: z.string().optional(),
      floor_area: z.string().optional(),
      location_city: z.string().optional(),
      location_country: z.string().optional(),
      category: z.array(z.string()).optional(),
      client: z.string().optional(),
      image_cover: image(),
      image_certificate_1: image().optional(),
      image_certificate_2: image().optional(),
      image_1: image().optional(),
      image_2: image().optional(),
      image_3: image().optional(),
      tags: z.array(z.string()).optional()
    })
})

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { projects }
