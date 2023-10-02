export const getLoaclStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || "[]");
};

export const setLoaclStorage = (key: string, value: any) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const removeLoaclStorage = (key: string) => {
  return localStorage.removeItem(key);
};
