type HouseType = 'Apartment' | 'Room' | 'House' | 'Hotel';

export interface CardOffer {
  id: number;
  images: string[];
  isPremium: boolean;
  price: number;
  title: string;
  houseType: HouseType;
  rating: number;
}


export type CardOffers = CardOffer[];
