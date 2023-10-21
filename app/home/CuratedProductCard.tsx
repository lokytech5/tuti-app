import React from 'react'
import Image from 'next/image';

interface Props {
    id: string;
    name: string;
    image: string;
}

const CuratedProductCard = (product:Props) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl sm:w-96 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
      <figure className="overflow-hidden rounded-t-lg">
        <Image src={product.image} alt={product.name} width={284} height={156} layout="responsive" className="object-cover" />
      </figure>
      <div className="card-body flex items-center"> 
        {/* Updated styles for product name to align with your guidelines */}
        <h2 className="product-name">{product.name}</h2>
      </div>
    </div>
  )
}

export default CuratedProductCard