<template>
  <Card>
    <CardHeader :class="headerClass" v-if="$slots.header">
      <slot name="header"></slot>
    </CardHeader>

    <CardContent :class="contentClass" v-if="$slots.content">
      <slot name="content"></slot>
    </CardContent>

    <CardFooter :class="footerClass" v-if="$slots.footer">
      <slot name="footer"></slot>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import Card from "../ui/card/Card.vue";
import CardContent from "../ui/card/CardContent.vue";
import CardFooter from "../ui/card/CardFooter.vue";
import CardHeader from "../ui/card/CardHeader.vue";

interface CardProps {
  headerClass?: string;
  contentClass?: string;
  footerClass?: string;
}

defineProps<CardProps>();
</script>

<style scoped></style>
