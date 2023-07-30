<script setup lang="ts">
import { AppSummary, StartButton } from ".";

const emits = defineEmits(["startGame"]);
</script>

<template>
  <div class="start-content">
    <AppSummary />
    <StartButton @start-game="emits('startGame')" />
  </div>
</template>

<style scoped></style>
