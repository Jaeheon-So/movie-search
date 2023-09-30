export interface SearchMovieRequstType {
  s: string;
  type: string;
  page: string;
  y?: string;
}

export interface SearchMovieResponseType {
  Search?: SearchMovieData[];
  totalResults?: string;
  Error?: string;
  Response: string;
}

export interface SearchMovieData {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface SearchTypeCount {
  [key: string];
  movie: string;
  series: string;
  episode: string;
}
