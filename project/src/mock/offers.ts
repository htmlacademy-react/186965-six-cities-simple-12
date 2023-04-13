import { Offers } from '../types/offer';

export const IMAGE_START_URL = 'img/';


export const offers: Offers = [
  {
    id: 1,
    title: 'Beautiful & luxurious apartment',
    previewImage: `${IMAGE_START_URL}apartment-01.jpg`,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.',
    isPremium: true,
    houseType: 'Apartment',
    rating: 4.7,
    bedrooms: 5,
    maxPeople: 4,
    price: 10,
    conveniences: ['Wifi', 'Heating', 'Kitchen', 'Cable TV' ],
    hostInfo: {
      avatarUrl: 'img/1.png',
      id: 1,
      isPro: true,
      name: 'Angelina'
    },
    city : {
      name: 'Paris',
      location : {
        lat: 48.8534100,
        lng: 2.3488000,
      }
    }
  },
  {
    id: 2,
    title: 'Beautiful & luxurious room',
    previewImage: `${IMAGE_START_URL}apartment-02.jpg`,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Cologne.',
    isPremium: false,
    houseType: 'Room',
    rating: 4.9,
    bedrooms: 1,
    maxPeople: 2,
    price: 20,
    conveniences: ['Wifi', 'Heating', 'Cable TV' ],
    hostInfo: {
      avatarUrl: 'img/2.png',
      id: 2,
      isPro: true,
      name: 'Max'
    },
    city : {
      name: 'Cologne',
      location : {
        lat: 50.9333000,
        lng: 6.9500000,
      }
    }
  },
  {
    id: 3,
    title: 'Beautiful & luxurious house',
    previewImage: `${IMAGE_START_URL}apartment-03.jpg`,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussel.',
    isPremium: true,
    houseType: 'House',
    rating: 4.6,
    bedrooms: 7,
    maxPeople: 5,
    price: 30,
    conveniences: [ 'Heating', 'Kitchen', 'Cable TV' ],
    hostInfo: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Max'
    },
    city : {
      name: 'Brussels',
      location : {
        lat: 50.8504000,
        lng: 4.3487800,
      }
    }
  },
  {
    id: 4,
    title: 'Beautiful & luxurious hotel',
    previewImage: `${IMAGE_START_URL}apartment-03.jpg`,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsteram.',
    isPremium: false,
    houseType: 'Hotel',
    rating: 4.4,
    bedrooms: 2,
    maxPeople: 2,
    price: 40,
    conveniences: ['Kitchen', 'Cable TV' ],
    hostInfo: {
      avatarUrl: 'img/1.png',
      id: 4,
      isPro: true,
      name: 'Greg'
    },
    city : {
      name: 'Amsterdam',
      location : {
        lat: 52.3909553943508,
        lng: 4.939309666406198,
      }
    }
  },
  {
    id: 5,
    title: 'Beautiful & luxurious apartment',
    previewImage: `${IMAGE_START_URL}apartment-01.jpg`,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Hamburg.',
    isPremium: true,
    houseType: 'Apartment',
    rating: 5,
    bedrooms: 3,
    maxPeople: 4,
    price: 50,
    conveniences: ['Kitchen', 'Cable TV' ],
    hostInfo: {
      avatarUrl: 'img/2.png',
      id: 5,
      isPro: true,
      name: 'John'
    },
    city : {
      name: 'Hamburg',
      location : {
        lat: 53.5753200,
        lng: 10.0153400,
      }
    }
  },
  {
    id: 6,
    title: 'Beautiful & luxurious house',
    previewImage: `${IMAGE_START_URL}apartment-01.jpg`,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Dusseldorf.',
    isPremium: false,
    houseType: 'House',
    rating: 4.8,
    bedrooms: 7,
    maxPeople: 5,
    price: 60,
    conveniences: ['Kitchen', 'Cable TV' ],
    hostInfo: {
      avatarUrl: 'img/2.png',
      id: 4,
      isPro: true,
      name: 'Mary'
    },
    city : {
      name: 'Dusseldorf',
      location : {
        lat: 51.2217200,
        lng: 6.7761600,
      }
    }
  },
  {
    id: 7,
    title: 'Beautiful & luxurious apartment',
    previewImage: `${IMAGE_START_URL}apartment-01.jpg`,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.',
    isPremium: false,
    houseType: 'Apartment',
    rating: 4.2,
    bedrooms: 5,
    maxPeople: 1,
    price: 20,
    conveniences: ['Wifi', 'Heating', 'Kitchen', 'Cable TV' ],
    hostInfo: {
      avatarUrl: 'img/1.png',
      id: 1,
      isPro: true,
      name: 'Angelina'
    },
    city : {
      name: 'Paris',
      location : {
        lat: 48.8534100,
        lng: 2.3488000,
      }
    }
  },
  {
    id: 8,
    title: 'Beautiful & luxurious apartment',
    previewImage: `${IMAGE_START_URL}apartment-01.jpg`,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Cologne.',
    isPremium: false,
    houseType: 'Apartment',
    rating: 4,
    bedrooms: 5,
    maxPeople: 1,
    price: 80,
    conveniences: ['Wifi', 'Heating', 'Kitchen', 'Cable TV' ],
    hostInfo: {
      avatarUrl: 'img/1.png',
      id: 1,
      isPro: true,
      name: 'Angelina'
    },
    city : {
      name: 'Cologne',
      location : {
        lat: 50.9343000,
        lng: 6.9800000,
      }
    }
  },

];
