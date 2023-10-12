export interface Category {
    _id: string;
    name: string;
    description: string;
    image: string;
    colors: string[];
    inches: number;
    __v: number;
  }

export interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: Category;
    stock: number;
    averageRating: number;
    reviews: any[]; // Define a more detailed type for reviews if you have the structure
    createdAt: string;
    updatedAt: string;
    __v: number;
  }

export interface ProductResponse {
    product: Product[];
    totalPages: number;
  }