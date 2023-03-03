<script setup>
import PlayerInputs from './views/GameView/components/PlayerInputs.vue';
import PlayerSolution from './views/GameView/components/PlayerSolution.vue';
import Puzzle from './views/GameView/components/Puzzle.vue';
</script>

<template>
  <main>
    <Puzzle />

    <PlayerSolution />

    <PlayerInputs />
  </main>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
