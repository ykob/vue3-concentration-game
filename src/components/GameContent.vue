<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { CardItem, CardItemContainer, GameTimer } from ".";
import { CARD_COUNT } from "../constants";

const params = reactive<{
  gottenItemIds: number[];
  itemIds: number[];
  selectedItemIndices: number[];
  timeCurrent: number;
  timeStart: number;
}>({
  gottenItemIds: [],
  itemIds: [],
  selectedItemIndices: [],
  timeCurrent: 0,
  timeStart: 0,
});

const isGameCompleted = () => {
  return params.gottenItemIds.length === params.itemIds.length / 2;
};
const update = () => {
  params.timeCurrent = Date.now();
  if (!isGameCompleted()) {
    requestAnimationFrame(update);
  }
};
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
const startGame = () => {
  params.timeStart = Date.now();
  requestAnimationFrame(update);
};

onMounted(() => {
  setCardIds();
  startGame();
});
</script>

<template>
  <div class="game-platform">
    <GameTimer
      :time-current="params.timeCurrent"
      :time-start="params.timeStart"
    />
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
