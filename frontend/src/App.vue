<script setup>
import PlayerInputs from './views/GameView/components/PlayerInputs.vue';
import Puzzle from './views/GameView/components/Puzzle.vue';
</script>

<template>
  <main>
    <Puzzle />

    <PlayerInputs />
  </main>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
