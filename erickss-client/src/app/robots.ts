import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const BASEURL = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_BRANCH_URL ?? process.env.VERCEL_URL ??
        process.env.METADATA_BASE ?? `http://localhost:${process.env.PORT || 3000}`

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/cart', '/checkout']
        },
        sitemap: `${BASEURL}/sitemap.xml`,
    }
}