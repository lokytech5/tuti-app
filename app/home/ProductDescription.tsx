import React from 'react'

const ProductDescription = () => {
  return (
     <section className="bg-primary"> 
      <div className="flex justify-center mt-10">
      <div className="artboard artboard-horizontal phone-3">
        <div className="p-6 space-y-4">
        <div className="badge badge-info gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  info
</div>
          <h2 className="text-lg font-semibold text-center">Detailed Product/Service Descriptions</h2>
          <p className="text-sm text-gray-600">
            If you're selling products or services, provide more in-depth information about their features, benefits, and what sets them apart.
          </p>
          <div className="flex justify-center mt-4">
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
     
      </section>
  )
}

export default ProductDescription