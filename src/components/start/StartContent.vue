<script setup lang="ts">
import { AppSummary } from ".";
import { CardItem, FilledButton } from "../common";

const emits = defineEmits(["startGame"]);
</script>

<template>
  <div class="start-content">
    <CardItem />
    <AppSummary />
    <FilledButton size="lg" @click="emits('startGame')">
      Start Game
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
}
</style>
