import React from 'react'
import Image from 'next/image'

interface ProductCardProps {
    id:number;
    name: string;
    description: string;
    price: number;
    image: string;
    showDetailsButton: boolean;
    showAddToCartButton: boolean; 
  }

const ProductCard = (product: ProductCardProps) => {
  return (
    <div className="card card-compact w-72 bg-netural-100 shadow-2xl">
      <div className="card-body">
      <figure>
        <Image src={product.image} alt={product.name} width={284} height={156} layout="responsive" />
      </figure>
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <p>#{product.price}</p>
      </div>
    
      <div className="card-actions justify-between p-4">
    {product.showDetailsButton && <button className="btn btn-primary">Details</button>}
    {product.showAddToCartButton && <button className="btn bg-red-400">Add to Cart</button>}
</div>

      </div>
  )
}

export default ProductCard