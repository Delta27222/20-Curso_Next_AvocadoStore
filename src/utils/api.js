export const fetchAvocados = async () => {
  const response = await fetch('/api/avo');
  const data = await response.json();
  return data;
};
