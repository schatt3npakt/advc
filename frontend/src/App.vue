<script setup>
import { usePuzzleConfigStore } from './store/puzzleConfig';
import TextLayer from './views/GameView/components/TextLayer.vue';
import PlayerInputs from './views/GameView/components/PlayerInputs.vue';
import PlayerSolution from './views/GameView/components/PlayerSolution.vue';
import Puzzle from './views/GameView/components/Puzzle.vue';

const puzzleStore = usePuzzleConfigStore();

// init first puzzle
puzzleStore.loadNewConfig(0);
</script>

<template>
  <main>
    <TextLayer
      v-if="puzzleStore.config.initText"
      :show="true"
      :key="puzzleStore.config.initText"
      :text="puzzleStore.config.initText"
    />

    <Puzzle />

    <PlayerSolution />

    <PlayerInputs />
  </main>
</template>

<style>
:root {
  /* Default Theme Colors */
  --primary-color-dark: rgb(0, 0, 0);
  --primary-color-dark-0: rgba(0, 0, 0, 0);
  --primary-color-dark-10: rgba(0, 0, 0, 0.10);
  --primary-color-dark-50: rgba(0, 0, 0, 0.50);
  --primary-color-light: rgb(255, 255, 255);
  --primary-color-light-0: rgba(255, 255, 255, 0);
  --primary-color-light-25: rgba(255, 255, 255, 0.25);
  --primary-color-light-50: rgba(255, 255, 255, 0.50);
}

* {
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--primary-color-light);
  margin: 8px;
}


</style>
