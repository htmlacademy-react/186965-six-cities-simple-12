import { citiesNames } from '../const/const';


export type CityName = typeof citiesNames[number];

export type City = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: CityName;
};


export type Cities = City[];
