<script setup lang="ts"></script>

<template>
  <div class="complete-message">
    <h1>Complete!</h1>
    <p>Thank you for your playing.</p>
  </div>
</template>

<style scoped>
.complete-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}
h1 {
  margin: 0;
  line-height: 1;
  font-size: 3em;
  letter-spacing: 0.02em;
}
p {
  font-size: 1.125rem;
  letter-spacing: 0.06em;
}
</style>