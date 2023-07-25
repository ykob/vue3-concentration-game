<script setup lang="ts"></script>

<template>
  <div class="card-item-container">
    <slot></slot>
  </div>
</template>

<style scoped>
.card-item-container {
  display: grid;
  justify-content: center;
  grid-template-columns: 120px 120px 120px 120px 120px 120px;
  gap: 16px;
}
@media screen and (max-width: 1024px) {
  .card-item-container {
    grid-template-columns: 120px 120px 120px 120px 120px;
  }
}
@media screen and (max-width: 768px) {
  .card-item-container {
    grid-template-columns: 120px 120px 120px 120px;
  }
}
@media screen and (max-width: 640px) {
  .card-item-container {
    grid-template-columns: 120px 120px 120px;
  }
}
@media screen and (max-width: 480px) {
  .card-item-container {
    grid-template-columns: 80px 80px 80px 80px;
    gap: 4px;
  }
}
</style>
