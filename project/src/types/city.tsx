export type City = {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  zoom: number;
};

export type Cities = City[];
