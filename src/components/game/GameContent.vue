<script setup lang="ts">
import { computed, onMounted, reactive } from "vue";
import { CardItem, CardItemContainer, GameTimer } from ".";
import { CARD_COUNT } from "../../constants";

const emits = defineEmits(["completeGame"]);
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

const isGameCompleted = computed(() => {
  return params.gottenItemIds.length === params.itemIds.length / 2;
});
const onClickCardItem = (index: number, memberId: number) => {
  if (
    params.gottenItemIds.includes(memberId) ||
    params.selectedItemIndices.includes(index) ||
    params.selectedItemIndices.length === 2
  ) {
    return;
  }
  params.selectedItemIndices.push(index);
  if (params.selectedItemIndices.length === 2) {
    if (
      params.itemIds[params.selectedItemIndices[0]] ===
      params.itemIds[params.selectedItemIndices[1]]
    ) {
      params.gottenItemIds.push(params.itemIds[params.selectedItemIndices[0]]);
      params.selectedItemIndices = [];
    } else {
      setTimeout(() => {
        params.selectedItemIndices = [];
      }, 750);
    }
  }
  if (isGameCompleted.value) {
    setTimeout(() => {
      emits(
        "completeGame",
        Math.min(params.timeCurrent - params.timeStart, 100 * 60 * 1000)
      );
    }, 1000);
  }
};
const update = () => {
  params.timeCurrent = Date.now();
  if (!isGameCompleted.value) {
    requestAnimationFrame(update);
  }
};
const setCardIds = () => {
  const cardIds = Array.from({ length: CARD_COUNT }, (_, i) => i + 1);
  params.itemIds = cardIds.concat(cardIds);
};
const shuffleCardIds = () => {
  params.itemIds = shuffleArray(params.itemIds);
};
const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i - 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const startGame = () => {
  shuffleCardIds();
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
        :disabled="isGameCompleted"
        :gotten-item-ids="params.gottenItemIds"
        :item-index="index"
        :image-id="imageId"
        :selectedItemIndices="params.selectedItemIndices"
        @click="onClickCardItem(index, imageId)"
      />
    </CardItemContainer>
  </div>
</template>

<style scoped></style>
