import { getAllProducts, type Product } from "@/api";
import { ref } from "vue";

export const useFetchProducts = () => {
  const isLoading = ref(true);
  const products = ref<Product[]>();

  setTimeout(() => {
    getAllProducts().then((data) => {
      if (data) {
        isLoading.value = false;
        products.value = data;
      }
    });
  }, 2000);

  return { products, isLoading };
};
