<script setup>
import PuzzleTile from './PuzzleTile.vue';
import { useStore } from '../../../store/store';

const { puzzleConfig } = useStore();
</script>

<template>
  <div class="wrapper">
    <ul class="row" v-for="( puzzleRow, index ) in puzzleConfig.rows" :key="index">
      <li v-if="puzzleConfig.rows.length >= 2">
        <span>{{ index + 1 }}.</span>
      </li>
      <li v-for="(rowItem, index) in puzzleRow" :key="index">
        <PuzzleTile :type="rowItem" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
div.wrapper {
  margin-bottom: 32px;
}
ul.row {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(7, 1fr);
  list-style-type: none;
  margin: auto;
  padding: 0;
}

ul.row:not(:last-of-type) {
  margin-bottom: 8px;
}

li {
  color: var(--primary-color-dark);
  position: relative;
}

span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
