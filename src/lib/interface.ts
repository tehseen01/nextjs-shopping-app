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

export interface IColor {
  name: string;
  hexCode: string;
}

export interface ISize {
  name: string;
  measurement: string;
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
  colors?: IColor[];
  sizes?: ISize[];
  highlights?: string[];
  discountPrice?: number;
}

export interface IAllProducts {
  page: number;
  totalPages: number;
  totalProducts: number;
  products: IProduct[];
}
