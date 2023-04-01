export interface Review {
  id: number;
  userImage: string;
  userName: string;
  rating: number;
  text: string;
  date: string;
}


export type Reviews = Review[];
