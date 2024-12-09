<template>
  <div class="task-manager">
    <sidebar />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { Task } from '../models/Task.ts'
import Sidebar from '@/components/sidebar/Sidebar.vue'

export default defineComponent({
  name: 'HomePage',
  components: { Sidebar },
  setup() {
    // TEST
    const tasks = ref<Task[]>([
      {
        id: 1,
        title: 'Пример 1',
        createdDate: Date.now(),
        dueDate: Date.now() + 1,
        priority: 1,
        description: 'Hello World',
        completed: false,
      },
      {
        id: 2,
        title: 'Пример 2',
        createdDate: Date.now(),
        dueDate: Date.now() + 1,
        priority: 1,
        description: 'Hello World',
        completed: false,
      },
    ])
  },
})
</script>

<style lang="scss" scoped>
@use '../styles/HomePage/HomePage';
</style>

<!--// components: { TaskItem, TaskInput },-->
<!--// setup() {-->
<!--//   const tasks = ref<Task[]>([-->
<!--//     { id: 1, title: 'Пример 1', completed: false },-->
<!--//     { id: 2, title: 'Пример 2', completed: true },-->
<!--//   ])-->
<!--//-->
<!--//   const addTask = (taskTitle: string) => {-->
<!--//     // create Task object-->
<!--//     const newTask: Task = {-->
<!--//       id: Date.now(),-->
<!--//       title: taskTitle,-->
<!--//       completed: false,-->
<!--//     }-->
<!--//     // add new task-->
<!--//     tasks.value.push(newTask)-->
<!--//   }-->
<!--//-->
<!--//   const deleteTask = (taskId: number) => {-->
<!--//     // find task from tasks and delete by id-->
<!--//     tasks.value = tasks.value.filter((task) => task.id !== taskId)-->
<!--//   }-->
<!--//-->
<!--//   const toggleCompleted = (taskId: number) => {-->
<!--//     const task = tasks.value.find((task) => task.id === taskId)-->
<!--//     if (task) {-->
<!--//       task.completed = !task.completed-->
<!--//     }-->
<!--//   }-->
<!--//-->
<!--//   return {-->
<!--//     tasks,-->
<!--//     addTask,-->
<!--//     deleteTask,-->
<!--//     toggleCompleted,-->
<!--//   }-->
<!--// },-->
