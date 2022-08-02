<script setup lang="ts">
import { ref } from "vue"
import VirtualKeyboard from "../components/VirtualKeyboard.vue"
import VideoPlayer from "../components/VideoPlayer.vue"
import MenuIconCSS from "../components/MenuIconCSS.vue"
import MenuIconSVG from "../components/MenuIconSVG.vue"

// VirtualKeyboard
let text = ref<string>("")
const receiveChar = (char: string) => {
  text.value = char
}
// VideoPlayer
const src = [
  "https://blog.novauniverse.me/videos/survey-create.webm",
  "https://blog.novauniverse.me/videos/virtual-keyboard.webm"
]
const isPlay = ref<Boolean>(false)
// Transition
const items = ref<string[]>(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"])
</script>

<template>
  <!-- <input v-model="text" type="text" /> -->
  <!-- <VirtualKeyboard @send-char="receiveChar" /> -->

  <!-- <MenuIconCSS /> -->
  <!-- <MenuIconSVG /> -->

  <!-- <button @click="isPlay = true">show video</button> -->
  <!-- <VideoPlayer :src="src" v-if="isPlay" /> -->

  <button @click="items.push('11')">add item</button>
  <TransitionGroup name="list" tag="ul">
    <li v-for="item in items" :key="item">
      {{ item }}
    </li>
  </TransitionGroup>

  <button @click="items.push('11')">add item</button>
  <Transition name="list" tag="div">
    <ul>
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </ul>
  </Transition>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
