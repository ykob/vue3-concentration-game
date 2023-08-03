<script setup lang="ts"></script>

<template>
  <div class="app-summary">
    <h1>Vue3 Concentration Game</h1>
    <p>made with Vue3 / TypeScript / Vite</p>
  </div>
</template>

<style scoped>
.app-summary {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}
h1 {
  margin: 0;
  line-height: 1;
  font-size: 3em;
  letter-spacing: 0.02em;
}
@container (width < 768px) {
  h1 {
    width: 6.5em;
  }
}
p {
  font-size: 1.125rem;
  letter-spacing: 0.06em;
}
</style>
