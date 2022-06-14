<template>
  <div class="container">
    <video id="player" controls>
      <source :src="props.src[0]" />
    </video>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
const props = defineProps(["src"])

onMounted(() => {
  const player = document.getElementById("player")
  player?.requestFullscreen()
})
</script>

<style>
#player {
  width: 100vw;
}
</style>
