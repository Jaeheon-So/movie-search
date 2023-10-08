import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<string>();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      searchParams.set("s", value);
      searchParams.set("page", "1");
      setSearchParams(searchParams);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
