import React from 'react'
import { useFilterStore } from '../components/useFilterStore'
import useCategory from '../hooks/useCategory';
import LoadingSpinner from '../components/LoadingSpinner';
import useProducts from '../hooks/useProducts';

const FilterProduct = () => {
  const {categoryFilter, sizeFilter, sortOrder,
         resetFilters, setsortOrder, setCategoryFilter, setSizeFilter  } = useFilterStore();

  const { data: categoryData, error, isLoading } = useCategory();
  const {data: priceData} = useProducts({ sortOrder: sortOrder});

  const handleCategoryChange = (categoryId: string) => {
        resetFilters();
        setCategoryFilter(categoryId);
        console.log("Updated categoryFilter:", categoryId);
  };
      
  const handleSizeChange = (size: number) => {
    resetFilters();
        setSizeFilter(size);
        console.log("Updated sizeFilter:", size);
  };
  return (
    <div className="w-full mt-2 p-4 space-y-4 lg:w-1/4">

    {/* Category and Size Dropdown */}
    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-primary text-primary-content">
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
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-primary text-primary-content">
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
    <div className="flex flex-col items-center justify-center w-full h-52 rounded-box p-4 space-y-4 bg-primary text-primary-content">
    <div className="w-full max-w-xs">
      <label className="label">
        <span className="label-text">Sort by Price</span>
      </label>

      <select 
      className="select select-bordered w-full mt-2 bg-secondary text-secondary-content"
      value={sortOrder || ''}
      onChange={(e) => setsortOrder(e.target.value)}
    >
      <option value=''>Select Order</option>
      <option value='asc'>Low to High</option>
      <option value='desc'>High to Low</option>
    </select>
      
    </div>

    <div className="w-full max-w-xs">
    <button className="btn bg-error text-error-content hover:bg-error-focus w-full" onClick={resetFilters}>Reset All Filters</button>
    </div>
    </div>
    

    </div>
  )
}

export default FilterProduct