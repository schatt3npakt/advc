<script setup>
import { usePuzzleConfigStore } from '../../store/puzzleConfig';
import TextLayer from './components/TextLayer.vue';
import PlayerInputs from './components/PlayerInputs.vue';
import PlayerSolution from './components/PlayerSolution.vue';
import Puzzle from './components/Puzzle.vue';
import {useRoute} from 'vue-router';

const puzzleStore = usePuzzleConfigStore();
const route = useRoute();

// init first puzzle

if (route?.query?.puzzleId) {
  puzzleStore.loadNewConfig(route?.query?.puzzleId);
} else {
  puzzleStore.loadNewConfig(0);
}
</script>

<template>
  <TextLayer
    v-if="puzzleStore.config.initText"
    :show="true"
    :key="puzzleStore.config.initText"
    :text="puzzleStore.config.initText"
  />

  <Puzzle />

  <PlayerSolution />

  <PlayerInputs />
</template>

<style scoped>
</style>
