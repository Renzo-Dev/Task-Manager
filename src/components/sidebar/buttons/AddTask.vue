<template>
  <button class="sidebar__button_add"></button>
</template>

<script setup lang="ts"></script>

<style scoped>
.sidebar__button_add {
  position: absolute;
  margin-top: -100px;
  border-radius: 30px;
  width: 50px;
  height: 50px;
  background-color: #343434;
  outline: none;
  border: none;
  transition: 100ms ease-in-out;

  &:hover {
    cursor: pointer;
    width: 47px;
    height: 47px;

    &::after {
      transition: 100ms ease-in-out;

      font-size: 30px;
    }
  }

  &:after {
    content: '+';
    font-size: 35px;
    font-weight: 500;
    color: #797979;
  }
}
</style>
