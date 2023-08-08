<script setup lang="ts">
import { computed } from "vue";
import { CardItem } from "../ui/";

const props = defineProps<{
  gottenItemIds: number[];
  imageId: number;
  itemIndex: number;
  selectedItemIndices: number[];
}>();
const isFlipped = computed(() => {
  return (
    props.gottenItemIds.includes(props.imageId) ||
    props.selectedItemIndices.includes(props.itemIndex)
  );
});
</script>

<template>
  <CardItem :imageId="props.imageId" :isFlipped="isFlipped" />
</template>
