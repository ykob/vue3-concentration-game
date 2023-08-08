<script setup lang="ts">
import { computed } from "vue";
import { zeroPadding } from "../../utils";

const props = withDefaults(defineProps<{
  imageId: number;
  isFlipped: boolean;
}>(), {
  imageId: 0,
  isFlipped: false,
});
const classnames = computed(() => {
  return {
    "is-flipped": props.isFlipped,
  };
});
const src = computed(() => {
  return `/img/card${zeroPadding(props.imageId, 2)}.jpg`;
});
</script>

<template>
  <button class="card-item">
    <div class="front" :class="classnames">
      <!-- <img :src="src" alt="" /> -->
      {{ props.imageId }}
    </div>
    <div class="back" :class="classnames">
      <!-- <img src="/img/card_back.jpg" alt="" /> -->
    </div>
  </button>
</template>

<style scoped>
.card-item {
  cursor: pointer;
  width: 100%;
  aspect-ratio: 2 / 3;
  color: #fff;
  transform-style: preserve-3d;
  perspective: 640px;
  border: 0;
  background-color: transparent;
}
.card-item:focus {
  outline: none;
}
.card-item:focus:before {
  content: "";
  position: absolute;
  inset: -6px;
  border: 4px solid #00f;
  border-radius: 8px;
  z-index: -1;
}
.card-item:disabled {
  cursor: default;
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
  background-color: #c00;
}
.front.is-flipped {
  transform: rotateY(0deg);
}
.back {
  position: absolute;
  inset: 0;
  transform: rotateY(0deg);
  backface-visibility: hidden;
  background-color: #000;
}
.back.is-flipped {
  transform: rotateY(180deg);
}
</style>
