export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  inStock: boolean;
}

export const getAllProducts = async () => {
  try {
    const response = await fetch("/data.json");

    if (!response.ok) return;

    const data = (await response.json()) as Product[];

    return data;
  } catch (e) {
    console.error(e);
  }
};
