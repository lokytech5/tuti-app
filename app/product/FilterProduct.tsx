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
    <div className="flex flex-col justify-center w-full h-52 bg-base-300 rounded-box">
    <div className='mt-5 mb-5'>
      <label className="label">
        <span className="label-text">Filter by Price</span>
      </label>
      <input type="range" min={0} max="100" value="25" className="range" step="25" />
      <div className="w-full flex justify-between text-xs px-2">
      <span>|</span>
      <span>|</span>
      <span>|</span>
      <span>|</span>
      <span>|</span>
</div>
    </div>
    </div>

    </div>
  )
}

export default FilterProduct