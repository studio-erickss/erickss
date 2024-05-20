import { products } from '@/testdata'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const URL = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_BRANCH_URL ?? process.env.VERCEL_URL ??
        process.env.METADATA_BASE ?? `http://localhost:${process.env.PORT || 3000}`
    const BASE_URL = URL.startsWith('http') ? URL : `https://${URL}`

    return [
        {
            url: `${BASE_URL}`,
            lastModified: new Date("2024-05-12T16:44:16.388Z").toISOString()
        },
        {
            url: `${BASE_URL}/products`,
            lastModified: new Date().toISOString()
        },
        // {
        //     url: `${BASE_URL}/contact-us`,
        //     lastModified: new Date().toISOString()
        // },
        // {
        //     url: `${BASE_URL}/design-services`,
        //     lastModified: new Date().toISOString()
        // },
        ...products.map(product => ({ url: `${BASE_URL}/products/${product.slug}`, lastModified: new Date().toISOString() }))
    ]
}