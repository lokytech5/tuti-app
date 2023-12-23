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

export interface RegisterUserData {
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
  email: string;
  avatar: string;
}
export interface VerifyUserRequest {
  token: string;
}

export interface VerifyUserResponse {
  message: string;
}

export interface OrderItem {
  id: string;
  product: {
    id: string;
    name: string;
    price: number;
  };
  quantity: number;
  subtotal: number;
}

export interface OrderShipping {
  name: string;
  address: string;
  city: string;
  state: string;
  postalCode: number | string;
  phone: string;
  method: string;
  cost: number;
}

export interface OrderUser {
  id: string;
  name: string;
  email: string;
}

export interface OrderCreationResponse {
  id: string;
  user: OrderUser;
  items: OrderItem[];
  totalPrice: number;
  status: string;
  orderDate: string;
  shipping: OrderShipping;
}

export interface OrderCompletionResponse {
  id: string;
  user: OrderUser;
  items: OrderItem[];
  totalPrice: number;
  status: string;
  orderDate: string;
  shipping: OrderShipping;
}

export interface NotificationPreferences {
  emailNotifications: boolean;
  pushNotifications: boolean;
}

export interface UserProfile {
  notificationPreferences: NotificationPreferences;
  _id: string;
  email: string;
  resetPasswordToken: string | null;
  username: string;
  avatar: string | null;
  isVerified: boolean;
  emailVerificationToken: string;
  isAdmin: boolean;
  __v: number;
  profile?: {
    firstName: string;
    lastName: string;
    phone: string;
  };
}

export interface UserProfileResponse {
  user: UserProfile;
}

export interface UpdateProfileRequest {
  profile: {
    firstName?: string;
    lastName?: string;
    phone?: string;
  }
}

export interface AvatarUploadResponse {
  message: string;
  user: UserProfile;
}

export interface InitializePaymentRequest {
  email: string;
  amount: number;
}

export interface InitializePaymentResponse {
  status: string;
  message: string;
  data: {
    authorization_url: string;
    access_code: string;
    reference: string;
  };
}

export interface VerifyTransactionRequest {
  reference: string;
}

export interface VerifyTransactionResponse {
  status: boolean;
  message: string;
  data: {
    id: number;
    domain: string;
    status: string;
    reference: string;
    receipt_number: null | string;
    amount: number;
    message: null | string;
    gateway_response: string;
    paid_at: null | string;
    created_at: string;
    channel: string;
    currency: string;
    ip_address: string;
    metadata: number;
    customer: {
      id: number;
      first_name: null | string;
      last_name: null | string;
      email: string;
      customer_code: string;
      phone: null | string;
      risk_action: string;
    };
  };
}

export interface ForgotPasswordData {
  email: string;
}
export interface ForgotPasswordResponse {
  message: string;
}

export interface ResetPasswordData {
  newPassword: string;
  confirmPassword: string;
  token: string;
  otp: string;
}
export interface ResetPasswordResponse {
  message: string;
}
