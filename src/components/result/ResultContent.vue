<script setup lang="ts">
import { CompleteMessage, ResultTimer, RetryButton } from "./";

const emits = defineEmits(["retryGame"]);
const props = defineProps<{
  resultTime: number;
}>();
</script>

<template>
  <div class="result-content">
    <ResultTimer :result-time="props.resultTime" />
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
  container-type: inline-size;
}
</style>
