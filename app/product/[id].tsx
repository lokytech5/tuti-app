import { useRouter } from 'next/router';
import React from 'react'

const ProductDetailsPage = () => {
    const router = useRouter();
  const { id } = router.query;
  return (
    <div>ProductDetailsPage</div>
  )
}

export default ProductDetailsPage