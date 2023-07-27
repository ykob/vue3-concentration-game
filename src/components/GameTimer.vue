<script setup lang="ts">
import { computed } from "vue";
import { getTime } from "../utils"

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
