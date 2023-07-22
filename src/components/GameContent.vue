<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { CardItem } from ".";

const params = reactive<{
  gottenItemIds: number[];
  itemIds: number[];
  selectedItemIndices: number[];
}>({
  gottenItemIds: [],
  itemIds: [],
  selectedItemIndices: [],
});
const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i - 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

onMounted(() => {
  params.itemIds = shuffleArray(params.itemIds.concat(params.itemIds));
});
</script>

<template>
  <div class="game-platform">
    <div class="card-items">
      <CardItem
        v-for="(memberId, index) in params.itemIds"
        :key="'card-item-' + index"
        :item-index="index"
        :member-id="memberId"
        :selectedItemIndices="params.selectedItemIndices"
        @click="params.selectedItemIndices.push(index)"
      />
    </div>
  </div>
</template>
