export const getRequest = async <T>(path: string):Promise<T> => {
  const response = await fetch(path);
  const body = await response.text();
  return JSON.parse(body);
};
