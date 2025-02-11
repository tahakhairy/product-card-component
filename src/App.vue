<script setup lang="ts">
import { useFetchProducts } from "@/composables/useFetchProducts";
import ProductCard from "./components/global/product/ProductCard.vue";
import SkeletonCard from "./components/global/product/SkeletonCard.vue";
import Cart from "./components/global/cart/Cart.vue";

const { products, isLoading } = useFetchProducts();
</script>

<template>
  <main class="container mx-auto">
    <div class="my-10 grid grid-cols-12 gap-6 lg:my-20">
      <section class="col-span-9 space-y-3">
        <h1 class="text-3xl font-bold">Products</h1>

        <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
          <SkeletonCard class="w-[300px]" v-if="isLoading" />
          <template v-else>
            <ProductCard
              v-for="(product, index) in products"
              :key="`prod-${product.id}-${index}`"
              :product="product"
            />
          </template>
          <p v-if="!isLoading && !products?.length">No Products found</p>
        </div>
      </section>

      <section class="col-span-3 space-y-3">
        <h1 class="text-3xl font-bold">Cart</h1>
        <Cart />
      </section>
    </div>
  </main>
</template>

<style scoped></style>
