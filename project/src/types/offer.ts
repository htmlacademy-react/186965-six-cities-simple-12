type HouseType = 'Apartment' | 'Room' | 'House' | 'Hotel';

export interface CardOffer {
  id: number;
  image: string;
  isPremium: boolean;
  price: number;
  title: string;
  houseType: HouseType;
  rating: number;
  lat: number;
  lng: number;
  city: string;
}


export type CardOffers = CardOffer[];
