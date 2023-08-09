<script setup lang="ts">
import { computed } from "vue";

interface Props {
  circle: boolean;
  size: "sm" | "md" | "lg";
  tag: keyof HTMLElementTagNameMap;
}
const props = withDefaults(defineProps<Props>(), {
  circle: false,
  size: "md",
  tag: "button",
});
const classnames = computed(() => {
  return [
    "filled-button",
    `filled-button--${props.size}`,
    { "filled-button--circle": props.circle },
  ];
});
</script>

<template>
  <component :is="props.tag" :class="classnames">
    <slot></slot>
  </component>
</template>

<style scoped>
.filled-button {
  cursor: pointer;
  display: flex;
  justify-content: center;
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
.filled-button--circle.filled-button--sm {
  width: 24px;
}
.filled-button--md {
  height: 40px;
  gap: 8px;
  padding-inline: 1.75rem;
  font-size: 1rem;
}
.filled-button--circle.filled-button--md {
  width: 40px;
}
.filled-button--lg {
  height: 56px;
  gap: 8px;
  padding-inline: 2rem;
  font-size: 1.125rem;
}
.filled-button--circle.filled-button--lg {
  width: 56px;
}
.filled-button--circle {
  padding-inline: 0;
}
</style>
