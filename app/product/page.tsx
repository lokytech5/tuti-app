"use client"
import ErrorAlert from '../components/ErrorAlert';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import ProductCard from '../components/ProductCard';
import useProducts from '../hooks/useProducts';
import FilterProduct from './FilterProduct';


const ProductPage = () => {

const { data, error, isLoading } = useProducts();

  if(isLoading) return <LoadingSpinner/>
  if(error) return <ErrorAlert message={error.message}/>

  
  return (
    <>
    <div className="min-h-screen bg-gray-100">
      <div className="bg-cover h-96 flex md:bg-center" style={{ backgroundImage: `url('/images/background2.jpg')` }}></div>
     
      <div className="flex flex-col lg:flex-row mt-5 items-start">
        
        <FilterProduct/>
    
        <div className="flex-grow p-4 space-y-4">
          <div className='flex flex-wrap justify-center mx-auto px-2'>
          {data?.product?.map((product, index) =>(
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 my-2">
            <ProductCard
            id={product._id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            showAddToCartButton={true}
            showDetailsButton={true}/>
            </div>
          ))}
           </div>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  )
}

export default ProductPage