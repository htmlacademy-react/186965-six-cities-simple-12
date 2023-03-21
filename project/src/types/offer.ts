type HouseType = 'Apartment' | 'Room' | 'House' | 'Hotel';

export interface CardOffer {
  id: number;
  image: string;
  isPremium: boolean;
  price: number;
  title: string;
  houseType: HouseType;
  rating: number;
}


export type CardOffers = CardOffer[];
