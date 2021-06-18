//This is for Rows of items on the list
export interface Header {
  title: string;
  fetchURL: string;
  isLarge?: boolean;
}

export interface MoviesData {
  Movie: {
    adult?: boolean;
    backdrop_path?: string;
    id?: number;
    language?: string;
    title: string;
    overview: string;
    posterPath?: string;
    releaseData?: string;
    voteAverage?: number;
    vote_count?: number;
  }[];
}
