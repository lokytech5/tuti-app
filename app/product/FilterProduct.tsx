import React from 'react'

const FilterProduct = () => {
  return (
    <div className="p-4 space-y-4">

    {/* Category and Size Dropdown */}
    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
      <div className="collapse-title text-xl font-medium">
        Categories and Sizes
      </div>
      <div className="collapse-content space-y-2"> 
        {/* Categories Dropdown */}
        <div>
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select className="select select-bordered w-full max-w-xs">
            <option>Category 1</option>
            <option>Category 2</option>
            <option>Category 3</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        
        {/* Sizes Dropdown */}
        <div>
          <label className="label">
            <span className="label-text">Size</span>
          </label>
          <select className="select select-bordered w-full max-w-xs">
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            {/* Add more sizes as needed */}
          </select>
        </div>
      </div>
    </div>

    {/* Filter by Price */}
    <div>
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
  )
}

export default FilterProduct