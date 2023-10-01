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

export interface DetailMovieRequstType {
  i: string;
  plot: string;
}

export interface DetailMovieResponseType {
  [key: string];
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: Rating[];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
}

export interface Rating {
  Source: string;
  Value: string;
}
