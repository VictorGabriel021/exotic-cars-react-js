export interface ICars {
  id: string;
  model: string;
  brand: string;
  price: number;
  image: string;
  color: string;
}

export interface ICarsResponse {
  id: string;
  cars: ICars[];
  type: string;
  imageShowcase: string;
}
