import React from 'react'
import { useFilterStore } from '../components/useFilterStore'
import useCategory from '../hooks/useCategory';
import LoadingSpinner from '../components/LoadingSpinner';
import useProducts from '../hooks/useProducts';

const FilterProduct = () => {
  const {categoryFilter, sizeFilter, priceFilter,
         setPriceFilter, setCategoryFilter, setSizeFilter  } = useFilterStore();

  const { data: categoryData, error, isLoading } = useCategory();
  const {data: priceData} = useProducts({ price: priceFilter});

  const handleCategoryChange = (categoryId: string) => {
        setCategoryFilter(categoryId);
        console.log("Updated categoryFilter:", categoryId);
  };
      
  const handleSizeChange = (size: number) => {
        setSizeFilter(size);
        console.log("Updated sizeFilter:", size);
  };
  return (
    <div className="w-full mt-2 p-4 space-y-4 lg:w-1/4">

    {/* Category and Size Dropdown */}
    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-primary">
      <div className="collapse-title text-xl font-medium">
        Filter by Categories
      </div>
      <div className="collapse-content space-y-2"> 
        {/* Categories Dropdown */}
           
        <ul className="menu w-56 rounded-box">
          {isLoading ? <li> <LoadingSpinner/></li> : 
          categoryData?.categories.map(category => (
            <li key={category._id}><a onClick={() => handleCategoryChange(category._id)}>{category.name}</a></li>
          ))}
          </ul>
        
        </div>
        </div>
        
        {/* Sizes Dropdown */}
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
      <div className="collapse-title text-xl font-medium">
        Filter by Inches
      </div>
      <div className="collapse-content space-y-2"> 
      
      <ul className="menu w-56 rounded-box">
      {isLoading ? <li> <LoadingSpinner/></li> : 
          categoryData?.categories.map(category => (
            <li key={category._id}><a onClick={() => handleSizeChange(category.inches)}>{category.inches} inches</a></li>
          ))}

          </ul>
         
        </div>
      </div>

    {/* Filter by Price */}
    <div className="flex flex-col justify-center w-full h-52 bg-base-300 rounded-box">
    <div className='mt-5 mb-5'>
      <label className="label">
        <span className="label-text">Filter by Price</span>
      </label>

      <input type="range"
       min={0} max="100" 
       value={priceFilter || 0}
       className="range" 
       step="25"
       onChange={(e) => setPriceFilter(Number(e.target.value))} />
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