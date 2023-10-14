import { create } from "zustand";


interface FilterState {
 priceFilter: number | null;
 categoryFilter: string | null;
 sizeFilter: number | null;

  setPriceFilter: (price: number | null) => void;
  setCategoryFilter: (categoryId: string | null) => void;
  setSizeFilter: (size: number | null) => void;
  resetFilters: () => void;

}

export const useFilterStore = create<FilterState>((set) => ({
    priceFilter: null,
    categoryFilter: null,
    sizeFilter: null,

    setPriceFilter: (price) => set({ priceFilter: price }),
    setCategoryFilter: (categoryId) => set({ categoryFilter: categoryId }),
    setSizeFilter: (size) => set({ sizeFilter: size }),
    resetFilters: () => set({ priceFilter: null, categoryFilter: null, sizeFilter: null }),

}));
