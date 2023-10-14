import { create } from "zustand";


interface FilterState {
 sortOrder: string | null;
 categoryFilter: string | null;
 sizeFilter: number | null;

  setsortOrder: (price: string | null) => void;
  setCategoryFilter: (categoryId: string | null) => void;
  setSizeFilter: (size: number | null) => void;
  resetFilters: () => void;

}

export const useFilterStore = create<FilterState>((set) => ({
    sortOrder: null,
    categoryFilter: null,
    sizeFilter: null,

    setsortOrder: (price) => set({ sortOrder: price }),
    setCategoryFilter: (categoryId) => set({ categoryFilter: categoryId }),
    setSizeFilter: (size) => set({ sizeFilter: size }),
    resetFilters: () => set({ sortOrder: null, categoryFilter: null, sizeFilter: null }),

}));
