<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="h-20 w-full bg-indigo-600 flex items-center">
    <div class="container mx-auto px-4">
      <ul class="flex items-center gap-4">
        <li><RouterLink class="text-white" to="/">Home</RouterLink></li>
        <li><RouterLink class="text-white" to="/history">History</RouterLink></li>
      </ul>
    </div>
  </header>
  <RouterView />
</template>

<style scoped></style>
