export interface SiteDataProps {
  name: string
  title: string
  description: string
  useViewTransitions?: boolean // defaults to false. Set to true to enable some Astro 3.0 view transitions
  author: {
    name: string
    email: string
  }
  defaultImage: {
    src: string
    alt: string
  }
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: 'SALVIS',
  // Your website's title and description (meta fields)
  title: 'SALVIS — BREEAM, LEED & ESG Certification Experts',
  description:
    'Company providing consultancy and certification in the field of BREEAM, LEED, EU Taxonomy, ESG and carbon neutrality',
  useViewTransitions: false,
  // Your information!
  author: {
    name: 'Tomas Meleg',
    email: 'tomas.meleg@gmail.com'
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: '/logos/logo_salvis.svg',
    alt: 'SALVIS logo'
  }
}

export default siteData
