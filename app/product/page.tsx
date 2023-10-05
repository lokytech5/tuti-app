import React from 'react'
import ProductCard from '../components/ProductCard';
import hair1 from '../../public/images/hair3.jpg'
import Footer from '../components/Footer';

const ProductPage = () => {
  const sampleProducts = [
    {
      id: 1,
      name: "Product 1",
      description: "This is product 1 description.",
      price: 29.99,
      image: "/path-to-your-image.jpg",
      showDetailsButton: true,
      showAddToCartButton: true,
    },
    // ... Add more sample products as needed
  ];
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Header */}
      <header className="bg-pink-500 text-white p-6">
        <h1 className="text-2xl font-bold">Elegance Weavons</h1>
        <p>Discover luxury and beauty</p>
      </header>

      {/* Product Grid */}
      <section className="p-6 bg-white">
        <h2 className="text-2xl font-semibold mb-6 text-pink-600">Our Exclusive Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sampleProducts.map(product => (
            <ProductCard key={product.id}  {...product} />
          ))}
        </div>
      </section>

      {/* Note: I'm omitting the footer since you mentioned you already have one. */}
    </div>
  )
}

export default ProductPage