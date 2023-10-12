import React from 'react'

const FilterProduct = () => {
  return (
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
  )
}

export default FilterProduct