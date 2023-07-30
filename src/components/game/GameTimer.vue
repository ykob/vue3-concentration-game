<script setup lang="ts">
import { computed } from "vue";
import { getTime } from "../../utils"

const props = defineProps<{
  timeCurrent: number;
  timeStart: number;
}>();
const timeValue = computed(() => {
  return getTime(props.timeCurrent - props.timeStart);
});
</script>

<template>
  <div class="game-timer">
    {{ timeValue }}
  </div>
</template>

<style scoped>
.game-timer {
  font-size: 3em;
  line-height: 1;
  font-family: 'Roboto Mono', monospace;
}
</style>