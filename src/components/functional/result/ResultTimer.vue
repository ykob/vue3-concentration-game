<script setup lang="ts">
import { computed } from "vue";
import { getTime } from "../../../utils"

const props = defineProps<{
  resultTime: number;
}>();
const timeValue = computed(() => {
  return getTime(props.resultTime);
});
</script>

<template>
  <div class="result-timer">
    {{ timeValue }}
  </div>
</template>

<style scoped>
.result-timer {
  font-size: 3em;
  line-height: 1;
  font-family: 'Roboto Mono', monospace;
}
</style>