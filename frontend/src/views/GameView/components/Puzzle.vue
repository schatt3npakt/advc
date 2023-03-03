<script setup>
import PuzzleTile from './PuzzleTile.vue';
import { useStore } from '../../../store/store';

const { puzzleConfig } = useStore();
</script>

<template>
  <ul class="row" v-for="( puzzleRow, index ) in puzzleConfig.rows" :key="index">
    <li>
      <span>{{ index + 1 }}.</span>
    </li>
    <li v-for="(rowItem, index) in puzzleRow" :key="index">
      <PuzzleTile :text="rowItem" />
    </li>
  </ul>
</template>

<style scoped>
ul.row {
  margin: auto;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  margin-bottom: 8px;
  list-style-type: none;
  padding: 0;
}

li {
  position: relative
}

span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
