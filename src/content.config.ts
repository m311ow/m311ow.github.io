import { file, glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')

const Categories = z.enum(['breeam', 'leed', 'leed o+m', 'taxonomy-eu'])
type Category = z.infer<typeof Categories> // "breeam" | "leed" | "leed-om" | "taxonomy-eu"

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
      category: z.array(Categories).optional(),
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

const epds = defineCollection({
  loader: file('src/content/epds/epds.json', {
    parser: (text) => {
      const raw = JSON.parse(text) as any[]
      return raw.map((item) => ({
        ...item,
        id: slugify(item.product)
      }))
    }
  }),
  schema: () =>
    z.object({
      year_registered: z.string(),
      company: z.string(),
      country: z.string(),
      product: z.string(),
      product_type: z.string(),
      database: z.string(),
      link: z.union([z.string().url(), z.literal(''), z.undefined()])
    })
})

export const collections = { projects, epds }
