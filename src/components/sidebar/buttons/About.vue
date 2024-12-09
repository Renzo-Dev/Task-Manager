<template>
  <button class="sidebar__button_about">About</button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.sidebar__button_about {
  margin-top: auto;
  margin-bottom: 10px;
  border-radius: 15px;
  outline: none;
  border: none;
  background-color: #343434;
  font-family: Arial, sans-serif;
  padding: 7px;
  font-size: 18px;
  color: #a4a721;
  transition: 100ms ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #2c2c2c;
  }
}
</style>
