<script setup lang="ts">
import { ref } from 'vue'
import VirtualKeyboard from '../components/VirtualKeyboard.vue'
import VideoPlayer from '../components/VideoPlayer.vue'

// VirtualKeyboard
let text = ref<string>('')
const receiveChar = (char: string) => {
  text.value = char
}
// VideoPlayer
const src = [
  'https://blog.novauniverse.me/videos/survey-create.webm',
  'https://blog.novauniverse.me/videos/virtual-keyboard.webm',
]
const isPlay = ref<Boolean>(false)
</script>

<template>
  <!-- <input v-model="text" type="text" /> -->
  <!-- <VirtualKeyboard @send-char="receiveChar" /> -->

  <button @click="isPlay = true">show video</button>
  <VideoPlayer :src="src" v-if="isPlay" />
</template>