export interface ICategory {
  _id: string;
  value: string;
  label: string;
  icon: string;
}

export interface IBrand {
  _id: string;
  value: string;
  label: string;
}

export interface IProduct {
  _id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  rating?: number;
  type?: string;
  stock?: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  colors?: (string | { name: string; hexCode: string })[];
  sizes?: (string | { name: string; measurement: string })[];
  highlights?: string[];
  discountPrice?: number;
}

export interface IAllProducts {
  page: number;
  totalPages: number;
  totalProducts: number;
  products: IProduct[];
}
