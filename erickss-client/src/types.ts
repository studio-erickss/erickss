export interface Product {
    id: string
    slug: string
    name: string
    mainImageUrl: string
    listPrice: number
    salePrice: number | null
    shortDescription: string | null
    longDescription: string | null
    images: string[]
    category: string
    measurements: Measurement
}

export interface Measurement {
    length: number
    width: number
    height: number
    unit: 'mm'
}

export interface Response {
    page: number
    totalCount: number
    count: number
    filterBy: string
    sortBy: string
    query: string
}

export interface ProductsResponse extends Response {
    results: Product[]
}
