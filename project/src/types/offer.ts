type HouseType = 'Apartment' | 'Room' | 'House' | 'Hotel';

export interface Offer {
  id: number;
  title: string;
  previewImage: string;
  description: string;
  isPremium: boolean;
  houseType: HouseType;
  rating: number;
  bedrooms: number;
  maxPeople: number;
  price: number;
  conveniences: string[];
  hostInfo: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  city : {
    name: string;
    location : {
      lat: number;
      lng:number;
    };
  };
}


export type Offers = Offer[];
