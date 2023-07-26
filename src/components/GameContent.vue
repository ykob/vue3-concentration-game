<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { CardItem, CardItemContainer } from ".";
import { CARD_COUNT } from "../constants";

const params = reactive<{
  gottenItemIds: number[];
  itemIds: number[];
  selectedItemIndices: number[];
}>({
  gottenItemIds: [],
  itemIds: [],
  selectedItemIndices: [],
});
const setCardIds = () => {
  const cardIds = Array.from({ length: CARD_COUNT }, (_, i) => i + 1);
  params.itemIds = shuffleArray(cardIds.concat(cardIds));
};
const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i - 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

onMounted(() => {
  setCardIds();
});
</script>

<template>
  <div class="game-platform">
    <CardItemContainer>
      <CardItem
        v-for="(imageId, index) in params.itemIds"
        :key="'card-item-' + index"
        :gotten-item-ids="params.gottenItemIds"
        :item-index="index"
        :image-id="imageId"
        :selectedItemIndices="params.selectedItemIndices"
        @click="params.selectedItemIndices.push(index)"
      />
    </CardItemContainer>
  </div>
</template>

<style scoped></style>
