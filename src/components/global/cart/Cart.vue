<script setup lang="ts">
import BaseCard from "@/components/base/BaseCard.vue";
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";

const { cartItems, totalPrice } = storeToRefs(useCartStore());
</script>

<template>
  <BaseCard content-class="pt-6">
    <template #content>
      <p v-if="!cartItems.length" class="p-6 text-center">
        No Items in Cart yet
      </p>
      <ul v-else class="space-y-3">
        <li v-for="item in cartItems">
          <div>
            <div class="flex items-center justify-between">
              <h4 class="font-medium">{{ item.product.name }}</h4>
              <span>${{ Math.floor(item.product.price * item.quantity) }}</span>
            </div>
            <span class="text-xs">Quantity: ×{{ item.quantity }}</span>
          </div>
        </li>
        <hr />
        <p class="text-right text-lg font-bold">Total: ${{ totalPrice }}</p>
      </ul>
    </template>
  </BaseCard>
</template>

<style scoped></style>
