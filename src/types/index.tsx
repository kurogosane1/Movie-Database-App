//This is for Rows of items on the list
export interface Header {
  title: string;
  fetchURL: string;
  isLarge?: boolean;
}

export interface BannerInt {
  fetchURL: string;
}

export interface Props {
  src: string;
  isLarge?: boolean;
}

export interface MovieData {
  Movie: {
    adult?: boolean;
    backdrop_path?: string;
    id?: number;
    language?: string;
    title?: string;
    overview: string;
    posterPath?: string;
    releaseData?: string;
    voteAverage?: number;
    vote_count?: number;
    poster_path?: string;
    original_name?: string;
    name?: string;
  };
}

export interface MoviesData {
  Movie: {
    adult?: boolean;
    backdrop_path?: string;
    id?: number;
    language?: string;
    title?: string;
    overview?: string;
    posterPath?: string;
    releaseData?: string;
    voteAverage?: number;
    vote_count?: number;
    poster_path?: string;
    original_name?: string;
    name?: string;
  }[];
}
