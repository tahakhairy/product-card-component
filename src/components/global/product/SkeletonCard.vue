<template>
  <BaseCard
    header-class="overflow-hidden p-0"
    content-class="space-y-2"
    class="space-y-3"
  >
    <template #header>
      <div class="relative aspect-[4/3] w-full overflow-hidden rounded-md">
        <Skeleton class="h-full w-full" />
      </div>
    </template>
    <template #content>
      <div>
        <Skeleton class="mb-3 h-6 w-[200px]" />

        <div class="space-y-2">
          <Skeleton class="h-3 w-[250px]" />
          <Skeleton class="h-3 w-[200px]" />
        </div>
      </div>

      <div class="flex items-center justify-between">
        <Skeleton class="my-4 h-7 w-[100px]" />
      </div>
    </template>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from "../../base/BaseCard.vue";
import Skeleton from "../../ui/skeleton/Skeleton.vue";
</script>

<style scoped></style>
