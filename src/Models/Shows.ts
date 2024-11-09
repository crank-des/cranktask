export type Shows = {
  id: number;
  name: string;
  url: string;
  type: string;
  language: string;
  genres: string[];
  image: Image;
  rating: Rating;
  summary: string;
  status: string;
};

type Image = {
  medium: string;
  original: string;
};
type Rating = {
  average: number;
};
