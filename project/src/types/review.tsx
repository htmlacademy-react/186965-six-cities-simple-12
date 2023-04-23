export interface Review {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
}

export interface NewReview {
  comment: string;
  rating: number;
}

export type Reviews = Review[];
