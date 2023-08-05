<script setup lang="ts">
import { mdiCardsPlaying } from "@mdi/js";
import { AppSummary } from ".";
import { CardItem, FilledButton, IconBase } from "../common";

const emits = defineEmits(["startGame"]);
</script>

<template>
  <div class="start-content">
    <CardItem />
    <AppSummary />
    <FilledButton size="lg" @click="emits('startGame')">
      Start Game
      <IconBase :path="mdiCardsPlaying" size="28" />
    </FilledButton>
  </div>
</template>

<style scoped>
.start-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  container-type: inline-size;
}
</style>
