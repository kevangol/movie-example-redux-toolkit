export interface ReviewsModel {
  rating: string;
  totalRatings: string;
}

export interface CasteModel {
  imageLink: string;
  name: string;
  role: string;
}

export interface MovieListModel {
  movieImage: string;
  movieName: string;
  releaseData: string;
  cbfc: string;
  movieType: string;
  duration: string;
  language: Array<string>;
  cast: Array<CasteModel>;
  reviews: ReviewsModel;
}

export interface TitlesAndDescriptionsProps {
  _item: MovieListModel;
}

export interface ReviewRatingProps {
  _item: MovieListModel;
}

export interface CustomButtonProps {
  onClick: () => void;
  buttonTitle: string;
  watchLater: boolean;
}

export interface CasteProfileProps {
  _caste: CasteModel;
}

export interface MediaDataType {
  identity: number;
  medianame: string;
  image: string;
}
