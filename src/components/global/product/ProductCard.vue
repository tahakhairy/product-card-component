<script setup lang="ts">
import type { Product } from "@/api";
import BaseCard from "../../base/BaseCard.vue";
import IconFavorite from "../../icons/IconFavorite.vue";
import IconFavoriteSolid from "../../icons/IconFavoriteSolid.vue";
import Counter from "../../shared/Counter.vue";
import Button from "../../ui/button/Button.vue";
import { ref } from "vue";
import IconCart from "../../icons/IconCart.vue";
import placeholderImg from "@/assets/images/product-placeholder.png";
import { useCartStore } from "@/stores/cart";

defineProps<{
  product: Product;
}>();

const quantity = ref(1);
const favorites = ref<Product[]>(
  JSON.parse(localStorage.getItem("favorites")! ?? []),
);

const { addToCart } = useCartStore();

const toggleFavorite = (product: Product) => {
  const favoriteProduct = favorites.value.find(
    (item) => item.id === product.id,
  );

  if (favoriteProduct) {
    favorites.value.splice(favorites.value.indexOf(favoriteProduct));
  } else {
    favorites.value.push(product);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites.value));
};
</script>

<template>
  <BaseCard
    header-class="overflow-hidden p-0"
    content-class="space-y-2"
    class="space-y-3"
  >
    <template #header>
      <div class="relative aspect-[4/3] w-full overflow-hidden rounded-md">
        <Button
          class="absolute left-full top-3 h-10 w-10 -translate-x-14 p-0"
          variant="outline"
          @click="toggleFavorite(product)"
        >
          <span v-if="!favorites.find((item) => item.id === product.id)">
            <IconFavorite />
          </span>
          <span v-else><IconFavoriteSolid class="fill-red-800" /></span>
        </Button>
        <img
          class="h-full w-full overflow-hidden object-cover"
          :src="product.image ? product.image : placeholderImg"
          :alt="`${product.name}`"
        />
      </div>
    </template>
    <template #content>
      <div>
        <h1 class="text-2xl font-bold">{{ product.name }}</h1>
        <p
          class="overflow-hidden text-ellipsis text-sm leading-6 text-gray-600"
        >
          {{ product.description }}
        </p>
      </div>

      <div class="flex items-center justify-between">
        <span class="text-3xl font-bold">${{ product.price }}</span>
        <span
          class="rounded-full px-2.5 py-0.5 text-xs font-medium ring-1"
          :class="[
            product.inStock ? 'ring-gray-200' : '!text-red-500 ring-red-400',
          ]"
        >
          {{ product.inStock ? "In Stock" : "Out of Stock" }}
        </span>
      </div>

      <div class="flex items-center space-x-2">
        <Counter
          v-if="product.inStock"
          class="w-[100px]"
          :max="4"
          :min="0"
          v-model:value="quantity"
        />
        <Button
          class="flex-1"
          :disabled="!product.inStock"
          @click="addToCart(product, quantity)"
        >
          <div class="flex items-center space-x-2">
            <span>
              <IconCart />
            </span>
            <span>Add to Cart</span>
          </div>
        </Button>
      </div>
    </template>
  </BaseCard>
</template>

<style scoped></style>
