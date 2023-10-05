import React from 'react'
import Image from 'next/image'

interface ProductCardProps {
    id:number;
    name: string;
    description: string;
    image: string;
    showBuyButton?: boolean;  // Optional prop for the Buy Now button
  }

const ProductCard = (product: ProductCardProps) => {
  return (
    <div className="card card-compact w-64 bg-netural-100 shadow-2xl">
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
      </div>
      <figure>
        <Image src={product.image} alt={product.name} width={284} height={156} layout="responsive" />
      </figure>
      {product.showBuyButton && (
        <div className="card-actions justify-end p-4">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      )}
    </div>
  )
}

export default ProductCard