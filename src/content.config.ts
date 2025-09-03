import { file, glob } from 'astro/loaders'
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

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')

const epds = defineCollection({
  loader: file('src/content/epds/epds.json', {
    parser: (text) => {
      const raw = JSON.parse(text) as any[]
      return raw.map((item) => ({
        ...item,
        id: slugify(item.Product)
      }))
    }
  }),
  schema: () =>
    z.object({
      YearRegistered: z.string(),
      Company: z.string(),
      Country: z.string().optional(),
      Product: z.string(),
      ProductType: z.string(),
      Database: z.string(),
      Link: z.union([z.string().url(), z.literal(''), z.undefined()])
    })
})

export const collections = { projects, epds }
