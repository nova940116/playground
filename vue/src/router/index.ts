import { createRouter, createWebHistory } from "vue-router"
import Main from "../views/Main.vue"
import New from "../views/New.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: Main
    },
    {
      path: "/new",
      name: "new",
      component: New
    }
  ]
})

export default router
