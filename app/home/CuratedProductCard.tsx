import React from 'react'
import Image from 'next/image';

interface Props {
    id: number;
    name: string;
    image: string;
}

const CuratedProductCard = (product:Props) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl sm:w-96">
    <figure>
        <Image src={product.image} alt={product.name} width={284} height={156} layout="responsive" />
    </figure>
    <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
    </div>
</div>
  )
}

export default CuratedProductCard