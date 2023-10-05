import React from 'react'
import Image from 'next/image'

interface ProductCardProps {
    id:number;
    name: string;
    description: string;
    image: string;
    showDetailsButton?: boolean;   // New
    showAddToCartButton?: boolean; 
  }

const ProductCard = (product: ProductCardProps) => {
  return (
    <div className="card card-compact w-72 bg-netural-100 shadow-2xl">
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
      </div>
      <figure>
        <Image src={product.image} alt={product.name} width={284} height={156} layout="responsive" />
      </figure>
    
      <div className="card-actions justify-between p-4">
    {product.showDetailsButton && <button className="btn btn-primary">View More</button>}
    {product.showAddToCartButton && <button className="btn btn-secondary">Buy Now</button>}
</div>

      </div>
  )
}

export default ProductCard