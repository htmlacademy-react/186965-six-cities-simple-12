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
    lat: 52.3909553943508,
    lng: 4.85309666406198,
    city: 'Amsterdam'
  },
  {
    id: 2,
    image:  `${IMAGE_START_URL}apartment-02.jpg`,
    isPremium: false,
    price:  20,
    title: 'Beautiful & luxurious room',
    houseType: 'Room',
    rating: 4.8,
    lat: 52.3609553943508,
    lng: 4.85309666406198,
    city: 'New-York'
  },
  {
    id: 3,
    image: `${IMAGE_START_URL}apartment-03.jpg`,
    isPremium: true,
    price: 30,
    title: 'Beautiful & luxurious house',
    houseType: 'House',
    rating: 4.9,
    lat: 52.3909553943508,
    lng: 4.929309666406198,
    city: 'London'
  },
  {
    id: 4,
    image: `${IMAGE_START_URL}apartment-01.jpg`,
    isPremium: false,
    price: 40,
    title: 'Beautiful & luxurious hotel',
    houseType: 'Hotel',
    rating: 5.0,
    lat: 52.3809553943508,
    lng: 4.939309666406198,
    city: 'Oslo'
  }
];

