<template>
  <table class="keyboard" @click="sendChar">
    <tr>
      <td>ㅂ</td>
      <td>ㅈ</td>
      <td>ㄷ</td>
      <td>ㄱ</td>
      <td>ㅅ</td>
      <td>ㅛ</td>
      <td>ㅕ</td>
      <td>ㅑ</td>
      <td>ㅐ</td>
      <td>ㅔ</td>
      <td>ㅖ</td>
      <td>ㅒ</td>
    </tr>
    <tr>
      <td>ㅁ</td>
      <td>ㄴ</td>
      <td>ㅇ</td>
      <td>ㄹ</td>
      <td>ㅎ</td>
      <td>ㅗ</td>
      <td>ㅓ</td>
      <td>ㅏ</td>
      <td>ㅣ</td>
    </tr>
    <tr>
      <td>ㅋ</td>
      <td>ㅌ</td>
      <td>ㅊ</td>
      <td>ㅍ</td>
      <td>ㅠ</td>
      <td>ㅜ</td>
      <td>ㅡ</td>
      <td>X</td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import Hangul from 'hangul-js'

const emit = defineEmits(['sendChar'])
let charStore: string[] = []

const sendChar = (event: any) => {
  event.target.innerText === 'X' 
  ? charStore.splice(charStore.length-1, charStore.length) 
  : charStore.push(event.target.innerText)
  emit('sendChar', Hangul.assemble(charStore))
}
</script>

<style>
.keyboard {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #dbdbdb;
  padding: 20px;
  font-size: 40px;
  font-weight: 800;
  background-color: #fff;
}
tr {
  display: flex;
  height: 130px;
}
td {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  user-select: none;
}
td:active {
  background-color: #dbdbdb;
}
</style>