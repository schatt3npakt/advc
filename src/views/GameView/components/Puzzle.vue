<script setup>
  import PuzzleTile from "./PuzzleTile.vue";
  import { usePuzzleConfigStore } from "../../../store/puzzleConfig.js";

  const puzzleConfig = usePuzzleConfigStore();
  const sortingArray = puzzleConfig.config.sorting.split("")
</script>

<template>
  <div class="wrapper">
    <ul
      class="row"
      v-for="(puzzleRow, index) in puzzleConfig.config.rows"
      :key="puzzleRow"
      :style="`order: ${sortingArray[index]};`"
    >
      <li v-if="puzzleConfig.config.rows.length >= 2">
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
    display: flex;
    flex-flow: column;
    width: 100%;
  }
  ul.row {
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(7, 1fr);
    list-style-type: none;
    padding: 0;
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
