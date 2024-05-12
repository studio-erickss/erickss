
// const URL = "https://blog.alsiam.com";

// export default async function sitemap() {
//     const blog = await sanityFetch({
//         query: postsQuery,
//         tags: ["post"],
//     });

//     const posts = blog.map(({ slug, _updatedAt }) => ({
//         url: `${URL}/blog/${slug}`,
//         lastModified: _updatedAt,
//     }));

//     const routes = ["", "/blog", "/about",].map((route) => ({
//         url: `${URL}${route}`,
//         lastModified: new Date().toISOString(),
//     }));

//     return [...routes, ...posts];
// }

import { products } from '@/testdata'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const BASE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_BRANCH_URL ?? process.env.VERCEL_URL ??
        process.env.METADATA_BASE ?? `http://localhost:${process.env.PORT || 3000}`

    return [
        {
            url: `${BASE_URL}`,
            lastModified: new Date().toISOString()
        },
        {
            url: `${BASE_URL}/products`,
        },
        {
            url: `${BASE_URL}/contact-us`,
            lastModified: new Date().toISOString()
        },
        {
            url: `${BASE_URL}/design-services`,
            lastModified: new Date().toISOString()
        },
        ...products.map(product => ({ url: `${BASE_URL}/products/${product.slug}` }))
    ]
}