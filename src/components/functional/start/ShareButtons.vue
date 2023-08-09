<script setup lang="ts">
import { mdiGithub, mdiTwitter } from "@mdi/js";
import { FilledButton, IconBase } from "../../ui";
</script>

<template>
  <div class="share-buttons">
    <FilledButton
      circle
      href="https://twitter.com/ykob0123"
      tag="a"
      target="_blank"
    >
      <IconBase :path="mdiTwitter" size="24" />
    </FilledButton>
    <FilledButton
      circle
      href="https://github.com/ykob/vue3-concentration-game"
      tag="a"
      target="_blank"
    >
      <IconBase :path="mdiGithub" size="24" />
    </FilledButton>
  </div>
</template>

<style scoped>
.share-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
</style>
