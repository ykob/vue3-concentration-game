<script setup lang="ts">
import { mdiRefresh } from "@mdi/js";
import { FilledButton, IconBase } from "../../ui";

const emits = defineEmits(["retryGame"]);
</script>

<template>
  <FilledButton size="lg" @click="emits('retryGame')">
    <IconBase :path="mdiRefresh" />
    Retry
  </FilledButton>
</template>
