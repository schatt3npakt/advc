<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style>
:root {
  /* Default Theme Colors */
  --primary-color-dark: rgb(0, 0, 0);
  --primary-color-dark-0: rgba(0, 0, 0, 0);
  --primary-color-dark-10: rgba(0, 0, 0, 0.10);
  --primary-color-dark-50: rgba(0, 0, 0, 0.50);
  --primary-color-light: rgb(255, 255, 255);
  --primary-color-light-0: rgba(255, 255, 255, 0);
  --primary-color-light-25: rgba(255, 255, 255, 0.25);
  --primary-color-light-50: rgba(255, 255, 255, 0.50);
}

@media (prefers-color-scheme: dark) {
  :root {
    /* Default Theme Colors */
    --primary-color-light: rgb(0, 0, 0);
    --primary-color-light-0: rgba(0, 0, 0, 0);
    --primary-color-light-10: rgba(0, 0, 0, 0.10);
    --primary-color-light-50: rgba(0, 0, 0, 0.50);
    --primary-color-dark: rgb(255, 255, 255);
    --primary-color-dark-0: rgba(255, 255, 255, 0);
    --primary-color-dark-25: rgba(255, 255, 255, 0.25);
    --primary-color-dark-50: rgba(255, 255, 255, 0.50);
  }
}

* {
  margin: 0;
  padding: 0;
  font-family: 'Courier New', Courier, monospace;
}

body {
  background-color: var(--primary-color-light);
  margin: 8px;
}

main {
  width: 100%;
  max-width: 360px;
  margin: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: filter 0.5s ease, opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(10px);
}
</style>
