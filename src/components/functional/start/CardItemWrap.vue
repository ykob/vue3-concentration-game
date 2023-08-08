<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { CardItem } from "../../ui";
import { CARD_COUNT } from "../../../constants";

const params = reactive<{
  imageId: number;
  isFlipped: boolean;
}>({
  imageId: 0,
  isFlipped: false,
});

const update = () => {
  if (!params.isFlipped)
    params.imageId = Math.floor(Math.random() * CARD_COUNT);
  params.isFlipped = !params.isFlipped;
  setTimeout(update, 2000);
};

onMounted(() => {
  setTimeout(update, 2000);
});
</script>

<template>
  <div class="card-item-wrap">
    <CardItem
      :image-id="params.imageId"
      :is-flipped="params.isFlipped"
      disabled
    />
  </div>
</template>

<style scoped>
.card-item-wrap {
  width: 150px;
}
</style>
