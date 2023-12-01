<script setup>
import SrOnly from '../../../components/SrOnly.vue';

const props = defineProps({
  type: String
})

const iconClass = props.type.toLowerCase()
</script>

<template>
  <div :class="iconClass">
    <SrOnly :text="props.type" />
  </div>
</template>

<style scoped>
div {
  position: relative;
  height: 32px;
  width: 32px;
  margin: 0;
  padding: 0;
}

div::after {
  content: "";
  display: block;
  width: 0;
	height: 0;
  position: absolute;
  inset: 50%;
  transform-origin: center center;
}

div.repeat::after {
  background-color: var(--primary-color-dark);
  height: 20px;
  transform: translate(-50%, -50%);
  width: 20px;
}

div.up::after,
div.right::after,
div.down::after,
div.left::after {
  border-left: 10px solid transparent;
	border-right: 10px solid transparent;
	border-bottom: 19px solid var(--primary-color-dark);
}

div.up::after {
  transform: translate(-50%, -50%);
}

div.right::after {
  transform: translate(-50%, -50%) rotate(90deg);
}

div.down::after {
  transform: translate(-50%, -50%) rotate(180deg);
}

div.left::after {
  transform: translate(-50%, -50%) rotate(270deg);
}
</style>
