<script setup lang="ts">
import { CompleteMessage, RetryButton } from "./";

const emits = defineEmits(["retryGame"]);
</script>

<template>
  <div class="result-content">
    <CompleteMessage />
    <RetryButton @retry-game="emits('retryGame')" />
  </div>
</template>

<style scoped>
.result-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
}
</style>
