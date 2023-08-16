export const fetchAvocados = async () => {
  const response = await fetch('https://avocado-store-27222.vercel.app/api/avo');
  const data = await response.json();
  return data;
};
