<script setup lang="ts">
import { AppSummary } from ".";
import { FilledButton } from "../common";

const emits = defineEmits(["startGame"]);
</script>

<template>
  <div class="start-content">
    <AppSummary />
    <FilledButton size="lg" @click="emits('startGame')">
      Game Start
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
