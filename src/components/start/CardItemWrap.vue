<script setup lang="ts">
import { reactive } from "vue";
import { CardItem } from "../common";

const params = reactive<{
  imageId: number;
  isFlipped: boolean;
}>({
  imageId: 0,
  isFlipped: false,
});
</script>

<template>
  <div class="card-item-wrap">
    <CardItem :image-id="params.imageId" :is-flipped="params.isFlipped" />
  </div>
</template>

<style scoped>
.card-item-wrap {
  width: 150px;
}
</style>
