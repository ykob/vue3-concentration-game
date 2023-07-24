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
    <div class="front" :class="classnames">
      <img v-if="isFlipped" :src="src" alt="" />
    </div>
    <div class="back" :class="classnames">
      <img src="/img/card_back.jpg" alt="" />
    </div>
  </div>
</template>

<style scoped>
.card-item {
  cursor: pointer;
  width: 120px;
  height: 180px;
  color: #fff;
  transform-style: preserve-3d;
  perspective: 640px;
}
.card-item img {
  display: block;
  width: 100%;
  height: 100%;
}
.front,
.back {
  overflow: hidden;
  border-radius: 8px;
  transition-property: transform;
  transition-duration: 0.2s;
}
.front {
  position: absolute;
  inset: 0;
  transform: rotateY(180deg);
  backface-visibility: hidden;
}
.front.is-flipped {
  transform: rotateY(0deg);
}
.back {
  position: absolute;
  inset: 0;
  transform: rotateY(0deg);
  backface-visibility: hidden;
}
.back.is-flipped {
  transform: rotateY(180deg);
}

</style>
