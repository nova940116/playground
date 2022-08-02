<template>
  <div class="wrapper transition" @click="handleClick">
    <span class="stick"></span>
    <span class="stick"></span>
    <span class="stick"></span>
  </div>
</template>
<script setup lang="ts">
const handleClick = () => {
  const transition = document.querySelector(".transition")
  transition?.classList.toggle("close")
}
</script>
<style scoped>
.wrapper {
  margin: 40px;
  display: flex;
  flex-direction: column;
  width: 120px;
}
.stick {
  background-color: black;
  width: 120px;
  height: 20px;
  border-radius: 4px;
}
.stick + .stick {
  margin-top: 24px;
}
.stick:nth-child(1) {
  transform-origin: 10px 20px;
}
.stick:nth-child(2) {
  transform-origin: 50% 50%;
}
.stick:nth-child(3) {
  transform-origin: 10px 0px;
}

.transition .stick {
  transition: all 0.3s;
}
.transition.close .stick:nth-child(1) {
  transform: rotate(45deg);
  width: 136px;
}
.transition.close .stick:nth-child(2) {
  transform: scale(0.2);
}
.transition.close .stick:nth-child(3) {
  transform: rotate(-45deg);
  width: 136px;
}
</style>
