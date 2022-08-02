<template>
  <header>Header</header>
  <main>
    <slot></slot>
  </main>
  <footer>Footer</footer>
</template>
<script setup lang="ts"></script>
<style scoped>
header,
footer {
  height: 40px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
