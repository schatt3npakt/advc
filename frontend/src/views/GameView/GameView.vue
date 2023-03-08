<script setup>
import { usePuzzleConfigStore } from '../../store/puzzleConfig';
import { usePuzzleStateStore } from '../../store/puzzleState';
import TextLayer from './components/TextLayer.vue';
import PlayerInputs from './components/PlayerInputs.vue';
import PlayerSolution from './components/PlayerSolution.vue';
import Puzzle from './components/Puzzle.vue';
import { useRoute } from 'vue-router';
import { initKeyboardControls } from '../../services/keyboardService'
import { useAppStateStore } from '../../store/appState';

const puzzleStore = usePuzzleConfigStore();
const puzzleStateStore = usePuzzleStateStore();
const appState = useAppStateStore();
const route = useRoute();
initKeyboardControls(puzzleStateStore);


// init first puzzle
if (route?.query?.puzzleId) {
  puzzleStore.loadNewConfig(route?.query?.puzzleId);
  appState.setPuzzleIndex(route?.query?.puzzleId)
} else {
  puzzleStore.loadNewConfig(0);
}
</script>

<template>
  <p class="endless-mode" v-show="appState.isEndlessModeEnabled">All puzzles solved. Now playing endless mode.</p>

  <TextLayer
    v-if="puzzleStore.config.initText"
    :show="true"
    :key="puzzleStore.config.initText"
    :text="puzzleStore.config.initText"
  />

  <Puzzle />

  <p class="hint">Remaining inputs: {{ puzzleStore.config.maxInputs - puzzleStateStore.state.length }}</p>

  <PlayerSolution />

  <PlayerInputs />
</template>

<style scoped>
.hint {
  margin-bottom: 32px;
}

.endless-mode {
  margin-bottom: 8px;
}
</style>
