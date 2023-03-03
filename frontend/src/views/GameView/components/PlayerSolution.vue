<script setup>
import { useStore } from '../../../store/store';

const { puzzleState } = useStore()
</script>

<template>
  <p>{{ puzzleState.state }}</p>
</template>

<style scoped>
</style>
