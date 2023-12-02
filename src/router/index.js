import { createRouter, createMemoryHistory } from "vue-router";
import GameView from "../views/GameView/GameView.vue";


export const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: GameView
    },
  ],
});
