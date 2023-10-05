import React from 'react'
import Image from 'next/image'
import { FaShoppingCart, FaEye, FaSearchPlus  } from 'react-icons/fa';

interface ProductCardProps {
    id:number;
    name: string;
    description: string;
    price: number;
    image: string;
    showDetailsButton?: boolean;
    showAddToCartButton: boolean; 
  }

const ProductCard = (product: ProductCardProps) => {
  return (
    <div className="card card-compact w-72 bg-netural-100 shadow-2xl">
      <figure>
        <Image src={product.image} alt={product.name} width={284} height={150} layout="responsive" />
      </figure>

      <div className="flex-grow flex flex-col justify-center items-center p-2">
                <div className="flex justify-between items-center w-full mb-2">
                    <h2 className="card-title text-1xl font-semibold text-primary-500">{product.name}</h2>
                    <p className="font-bold text-sm">#{product.price}</p>
                </div>
                <p className="text-sm">{product.description}</p>
            </div>
    
            <div className="flex justify-center items-center p-4">
                {product.showDetailsButton ? (
                    <div className="flex justify-between items-center w-full">
                        <button className="btn btn-primary">Details</button>
                        {product.showAddToCartButton &&
                            <button className="btn btn-secondary text-neutral-100 hover:bg-red-500 transition-colors duration-300">
                                Add to cart
                                <FaShoppingCart className="mr-2" size={15} />
                            </button>
                        }
                    </div>
                ) : (
                    product.showAddToCartButton &&
                    <button className="btn btn-accent text-neutral-100 hover:bg-red-500 transition-colors duration-300">
                        Add to cart
                        <FaShoppingCart className="mr-2" size={15} />
                    </button>
                )}
            </div>
        </div>
  )
}

export default ProductCard