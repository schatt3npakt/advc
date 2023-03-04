<script setup>
import PlayerInputsButton from './PlayerInputsButton.vue';
</script>

<template>
  <PlayerInputsButton class="delete" :type="'remove'" :text="'DELETE'" />

  <div class="row">
    <PlayerInputsButton :type="'add'" :text="'UP'" />
    <PlayerInputsButton :type="'add'" :text="'RIGHT'" />
    <PlayerInputsButton :type="'add'" :text="'DOWN'" />
    <PlayerInputsButton :type="'add'" :text="'LEFT'" />
  </div>

</template>

<style scoped>
.delete {
  margin-bottom: 8px;
}

.row {
  display: flex;
  gap: 8px;
}
</style>
