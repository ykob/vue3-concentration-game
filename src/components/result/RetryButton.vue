<script setup lang="ts">
import { FilledButton } from "../common";

const emits = defineEmits(["retryGame"]);
</script>

<template>
  <FilledButton size="lg" @click="emits('retryGame')">
    Retry
  </FilledButton>
</template>
