<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  itemIndex: number;
  memberId: number;
  selectedItemIndices: number[];
}>();
const classnames = computed(() => {
  return {
    "is-flipped": props.selectedItemIndices.includes(props.itemIndex),
  }
});
</script>

<template>
  <div class="card-item">
    <div class="card-item-front" :class="classnames"></div>
    <div class="card-item-back" :class="classnames">{{ props.memberId }}</div>
  </div>
</template>
