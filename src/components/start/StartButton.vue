<script setup lang="ts">
const emits = defineEmits(["startGame"]);

const onClick = () => {
  emits("startGame");
};
</script>

<template>
  <div class="start-button">
    <button @click="onClick">
      Game Start
    </button>
  </div>
</template>

<style scoped></style>
