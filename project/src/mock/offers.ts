import { CardOffers } from '../types/offer';

const IMAGE_START_URL = 'img/';

export const offers: CardOffers = [
  {
    id: 1,
    image: `${IMAGE_START_URL}apartment-01.jpg`,
    isPremium: true,
    price: 10,
    title: 'Beautiful & luxurious apartment',
    houseType: 'Apartment',
    rating: 4.7,
  },
  {
    id: 2,
    image:  `${IMAGE_START_URL}apartment-02.jpg`,
    isPremium: false,
    price:  20,
    title: 'Beautiful & luxurious room',
    houseType: 'Room',
    rating: 4.8,
  },
  {
    id: 3,
    image: `${IMAGE_START_URL}apartment-03.jpg`,
    isPremium: true,
    price: 30,
    title: 'Beautiful & luxurious house',
    houseType: 'House',
    rating: 4.9,
  },
  {
    id: 4,
    image: `${IMAGE_START_URL}apartment-01.jpg`,
    isPremium: false,
    price: 40,
    title: 'Beautiful & luxurious hotel',
    houseType: 'Hotel',
    rating: 5.0,
  }
];

