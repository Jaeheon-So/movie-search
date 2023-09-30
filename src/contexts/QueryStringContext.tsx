import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export type SelectOptionType = {
  [key: string]: string;
  s: string;
  type: string;
  year: string;
  page: string;
  count: string;
};

export type QueryStringContextValueType = {
  state: { selectOptions: SelectOptionType };
  actions: {
    selectOnChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
    initializeOptions: () => void;
  };
};

const QueryStringContext =
  React.createContext<QueryStringContextValueType | null>(null);

export const QueryStringProvider = ({ children }: Props) => {
  const pathname = useLocation().pathname;
  const [searchParams, setSearchParams] = useSearchParams();
  // const debouncedSearchTerm = useDebounce(searchParams.get("s") || "", 500);

  const [selectOptions, setSelectOptions] = useState({
    s: searchParams.get("s") || "",
    type: searchParams.get("type") || "movie",
    year: searchParams.get("year") || "all",
    page: searchParams.get("page") || "1",
    count: searchParams.get("count") || "10",
  });

  const selectOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = e.target;
    setSelectOptions({
      ...selectOptions,
      [name]: value,
    });
    if (pathname === "/") return;
    if (name === "s") return;

    searchParams.set(name, e.target.value);
    setSearchParams(searchParams);
  };

  const initializeOptions = () => {
    setSelectOptions({
      s: "",
      type: "movie",
      year: "all",
      page: "1",
      count: "10",
    });
  };

  const value: QueryStringContextValueType = {
    state: { selectOptions },
    actions: {
      selectOnChange,
      initializeOptions,
    },
  };

  //   useEffect(() => {
  //     console.log(selectOptions);
  //   }, [selectOptions]);

  useEffect(() => {
    if (pathname === "/") return initializeOptions();
    setSelectOptions({
      s: searchParams.get("s") || "",
      type: searchParams.get("type") || "movie",
      year: searchParams.get("year") || "all",
      page: searchParams.get("page") || "1",
      count: searchParams.get("count") || "10",
    });
  }, [searchParams]);

  return (
    <QueryStringContext.Provider value={value}>
      {children}
    </QueryStringContext.Provider>
  );
};

export default QueryStringContext;
