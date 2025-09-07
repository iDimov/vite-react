export type Review = {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};

export type GalleryItem = {
  original: string;
  thumb: string;
};

export type Truck = {
  id: string;
  name: string;
  rating: number;
  reviews: Review[];
  location: string;
  price: number;
  gallery: GalleryItem[];
  description: string;
  form: string;          
  length: string;       
  width: string;         
  height: string;        
  tank: string;          
  consumption: string;
  transmission: string;

  AC?: boolean;
  TV?: boolean;
  bathroom?: boolean;
  kitchen?: boolean;
  microwave?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  water?: boolean;
  gas?: boolean;
  engine?: string;  
};

export type TrucksState = {
  trucks: Truck[];  
  selectedTruck: Truck | null;
  isLoading: boolean;
  error: string | null;
};
