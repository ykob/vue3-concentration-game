<script setup lang="ts">
import { computed } from "vue";
import { zeroPadding } from "../utils";

const props = defineProps<{
  gottenItemIds: number[];
  imageId: number;
  itemIndex: number;
  selectedItemIndices: number[];
}>();
const classnames = computed(() => {
  return {
    "is-flipped": isFlipped.value,
  };
});
const isFlipped = computed(() => {
  return (
    props.gottenItemIds.includes(props.imageId) ||
    props.selectedItemIndices.includes(props.itemIndex)
  );
});
const src = computed(() => {
  return `/img/card${zeroPadding(props.imageId, 2)}.jpg`;
});
</script>

<template>
  <div class="card-item">
    <div class="card-item-front" :class="classnames">
      <img v-if="isFlipped" :src="src" alt="" />
    </div>
    <div class="card-item-back" :class="classnames">
      <img src="/img/card_back.jpg" alt="" />
    </div>
  </div>
</template>

<style scoped></style>
