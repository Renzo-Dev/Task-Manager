<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <h2 class="sidebar__title">Task Manager</h2>
    </div>
    <div class="sidebar__control_buttons">
      <add-task />
      <about />
    </div>
  </div>
</template>

<script setup lang="ts">
import AddTask from '@/components/sidebar/buttons/AddTask.vue'
import About from '@/components/sidebar/buttons/About.vue'
</script>

<style scoped lang="scss">
@use '../../styles/HomePage/Sidebar/Sidebar.scss';
</style>
