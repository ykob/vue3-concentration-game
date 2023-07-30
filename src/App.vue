<script setup lang="ts">
import { reactive } from "vue";
import { StartContent } from "./components/start/";
import { GameContent } from "./components/game/";
import { SceneType } from "./types";

const params = reactive<{
  resultTime: number;
  scene: SceneType;
}>({
  resultTime: 0,
  scene: "start",
});

const completeGame = (time: number) => {
  params.resultTime = time;
  params.scene = "result";
};
const startGame = () => {
  params.scene = "game";
};
</script>

<template>
  <StartContent v-if="params.scene === 'start'" @start-game="startGame" />
  <GameContent
    v-else-if="params.scene === 'game'"
    @complete-game="completeGame"
  />
</template>

<style scoped></style>
