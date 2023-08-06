<script setup lang="ts">
import { computed } from "vue";

interface Props {
  size: "sm" | "md" | "lg";
}
const props = withDefaults(defineProps<Props>(), {
  size: "md",
});
const classnames = computed(() => {
  return ["filled-button", `filled-button--${props.size}`];
});
</script>

<template>
  <button :class="classnames" type="button">
    <slot></slot>
  </button>
</template>

<style scoped>
.filled-button {
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 9999px;
  line-height: 1;
  letter-spacing: 0.1rem;
  text-align: center;
  color: #fff;
  font-weight: 700;
  background-color: #007bff;
  transition-duration: 0.2s;
  transition-property: background-color;
}
.filled-button:hover {
  background-color: #0069d9;
}
.filled-button--sm {
  height: 24px;
  gap: 4px;
  padding-inline: 1rem;
  font-size: 0.875rem;
}
.filled-button--md {
  height: 40px;
  gap: 8px;
  padding-inline: 1.75rem;
  font-size: 1rem;
}
.filled-button--lg {
  height: 56px;
  gap: 8px;
  padding-inline: 2rem;
  font-size: 1.125rem;
}
</style>
