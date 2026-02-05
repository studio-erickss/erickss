'use client';
import React from 'react';
import Image from "next/image";
import {Product} from "@/types";

function ProductImage({product}: {product: Product}) {
    return (
        <Image className="rounded-t-lg absolute inset-0 w-full h-full object-cover" fill sizes={'auto'} priority={true}
               src={product.mainImageUrl} alt={`Product Image - ${product.name}`}
               placeholder='blur' blurDataURL='/erickss-logo-compressed.png'
        />
    );
}

export default ProductImage;