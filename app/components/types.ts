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
    reviews: any[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    viewCount: number;
  }

export interface ProductResponse {
    product?: Product[];
    latestProducts?: Product[];
    totalPages: number;
  }

export interface LatestProductResponse {
    latestProducts: Product[];
    totalPages: number;
}

export interface CuratedCollection {
  _id: string;
  name: string;
  description: string;
  bannerImage: string;
  product: Product[];
}

export interface CuratedCollectionResponse {
  collections: CuratedCollection[];
}

export interface CategoryResponse {
  categories: Category[];
  totalPages: number;
}

export interface SingleProductResponse {
  product: Product;
}

export interface RegisterUserData{
  username: string;
  password: string;
  email: string;
}

export interface RegisterUserResponse {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
}

export interface LoginUserData {
  username: string;
  password: string;
}

export interface LoginUserResponse {
  token: string;
  username: string;
  _id: string;
}

// For the verify user functionality
export interface VerifyUserRequest {
  token: string;
}

export interface VerifyUserResponse {
  message: string;
}