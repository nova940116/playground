<template>
  <div class="video-player">
    <video class="video">
      <source :src="props.src[0]" />
    </video>
    <div class="controls">
      <button class="exit" @click="exit">Exit</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
const props = defineProps(["src"])

interface Document {
  requestFullscreen?: () => void
  webkitRequestFullscreen?: () => void
  webkitExitFullscreen?: () => void
  exitFullscreen?: () => void
}

onMounted(() => {
  const player = document.querySelector(".video-player") as Document
  if(player?.requestFullscreen) {
    player?.requestFullscreen()
  }
  if(player?.webkitRequestFullscreen) {
    player?.webkitRequestFullscreen()
  }
})

const exit = () => {
  const doc = document as Document
  if(doc.exitFullscreen) {
    doc.exitFullscreen()
  }
  if(doc.webkitExitFullscreen) {
    doc.webkitExitFullscreen()
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.video-player {
  width: 100vw;
  height: 100vh;
  background-color: red;
  display: flex;
  flex-direction: column;
}
.video {
  width: 100vw;
  max-height: 90%;
}
.controls {
  height: 40px;
  margin-top: auto;
}
</style>
