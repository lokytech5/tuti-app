import React from 'react'
import ProductCard from '../components/ProductCard';

const ProductPage = () => {

  const sampleProduct = [{
    id: 1,
    name: "Sample Product",
    description: "This is a sample product description.",
    price: 99.99,
    image: '/images/hairs4.jpeg',  // Replace with your image path
    showDetailsButton: true,
    showAddToCartButton: true
  }, {
    id: 2,
    name: "Sample Product",
    description: "This is a sample product description.",
    price: 99.99,
    image: '/images/hairs4.jpeg',  // Replace with your image path
    showDetailsButton: true,
    showAddToCartButton: true
  }, {
    id: 3,
    name: "Sample Product",
    description: "This is a sample product description.",
    price: 99.99,
    image: '/images/hairs4.jpeg',  // Replace with your image path
    showDetailsButton: true,
    showAddToCartButton: true
  }, {
    id: 3,
    name: "Sample Product",
    description: "This is a sample product description.",
    price: 99.99,
    image: '/images/hairs4.jpeg',  // Replace with your image path
    showDetailsButton: true,
    showAddToCartButton: true
  }, {
    id: 3,
    name: "Sample Product",
    description: "This is a sample product description.",
    price: 99.99,
    image: '/images/hairs4.jpeg',  // Replace with your image path
    showDetailsButton: true,
    showAddToCartButton: true
  }, ] ;
  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-cover h-96 flex md:bg-center" style={{ backgroundImage: `url('/images/background2.jpg')` }}></div>
     
      <div className="flex flex-col lg:flex-row mt-5 items-start">
        {/* Filter Section */}
        <div className="w-full mt-2 p-4 space-y-4 lg:w-1/4">

    {/* Category and Size Dropdown */}
    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-primary">
      <div className="collapse-title text-xl font-medium">
        Categories
      </div>
      <div className="collapse-content space-y-2"> 
        {/* Categories Dropdown */}
       
         
        <ul className="menu w-56 rounded-box">
               <li><a>Item 1</a></li>
               <li><a>Item 2</a></li>
               <li><a>Item 3</a></li>
        </ul>
        
        </div>
        </div>
        
        {/* Sizes Dropdown */}
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
      <div className="collapse-title text-xl font-medium">
        Size
      </div>
      <div className="collapse-content space-y-2"> 
      
      <ul className="menu w-56 rounded-box">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
            <li><a>Item 3</a></li>
      </ul>
         
        </div>
      </div>
      
    

    {/* Filter by Price */}
    <div className="flex flex-col space-y-4 w-full h-52 bg-base-300 rounded-box">
    <div className='mt-5 mb-5'>
      <label className="label">
        <span className="label-text">Filter by Price</span>
      </label>
      <input type="range" min={0} max="100" value="40" className="range" />
    </div>

    {/* Filter by Product */}
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">Filter by Product</span> 
        <input type="checkbox" checked className="checkbox" />
      </label>
    </div>
    </div>

    </div>
    
   {/* Product Cards Section */}
        <div className="flex-grow p-4 space-y-4">
          <div className='flex flex-wrap justify-center mx-auto px-2'>
          {sampleProduct.map((product, index) =>(
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 my-2">
            <ProductCard
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            showAddToCartButton={true}
            showDetailsButton={true}/>
            </div>
          ))}
           </div>
          {/* <ProductCard id={0} name={''} description={'hello loksoman'} price={0} image={''} showAddToCartButton={false} {...sampleProduct} /> */}
          {/* Add more ProductCards or loop through an array of products to render them */}
        </div>
      </div>
    </div>

 
  )
}

export default ProductPage