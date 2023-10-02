import React, { useEffect, useState } from "react";
import { SearchMovieData } from "../@types/data";
import { getLoaclStorage, setLoaclStorage } from "../utils/localStorage";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export type FavorContextValueType = {
  state: { favorMovie: SearchMovieData[] };
  actions: {
    addFavor: (movie: SearchMovieData) => void;
    deleteFavor: (id: string) => void;
    deleteAllFavor: () => void;
  };
};

const FavorContext = React.createContext<FavorContextValueType | null>(null);

export const FavorProvider = ({ children }: Props) => {
  const [favorMovie, setFavorMovie] = useState<SearchMovieData[]>(
    getLoaclStorage("favorMovie")
  );

  const addFavor = (movie: SearchMovieData) => {
    setFavorMovie((prev) => [...prev, movie]);
  };
  const deleteFavor = (id: string) => {
    setFavorMovie((prev) => prev.filter((movie) => movie.imdbID !== id));
  };
  const deleteAllFavor = () => {
    setFavorMovie([]);
  };

  const value: FavorContextValueType = {
    state: { favorMovie },
    actions: { addFavor, deleteFavor, deleteAllFavor },
  };

  useEffect(() => {
    setLoaclStorage("favorMovie", favorMovie);
  }, [favorMovie]);

  return (
    <FavorContext.Provider value={value}>{children}</FavorContext.Provider>
  );
};

export default FavorContext;
