<script setup lang="ts">
import { ref } from 'vue'
import VirtualKeyboard from '../components/VirtualKeyboard.vue'

let text = ref<string>('')

const receiveChar = (char: string) => {
  text.value = char
}
</script>

<template>
  <input v-model="text" type="text" />
  <VirtualKeyboard @send-char="receiveChar" />
</template>