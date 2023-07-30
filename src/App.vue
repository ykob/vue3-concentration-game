<script setup lang="ts">
import { reactive } from "vue";
import { StartContent } from "./components/start/";
import { GameContent } from "./components/game/";
import { SceneType } from "./types";

const params = reactive<{
  scene: SceneType;
}>({
  scene: "start",
});
</script>

<template>
  <div>
    <StartContent v-if="params.scene === 'start'" />
    <GameContent v-else-if="params.scene === 'game'" />
  </div>
</template>

<style scoped></style>
