<script setup lang="ts">
import CardArticle from '../components/CardArticle.vue'
const history = JSON.parse(localStorage.getItem('history') || '')
</script>

<template>
  <div class="container mx-auto space-y-4">
    <h2 class="text-4xl font-bold px-4 my-8">Your History</h2>
    <article v-if="history" class="flex flex-wrap gap-y-6">
      <div
        v-for="(item, index) in history"
        :key="item.id"
        class="h-[580px] px-2 cursor-pointer hover:shadow"
        :class="{
          'basis-1/2': index % 10 === 0 || index % 10 === 9,
          'basis-1/4': index % 10 !== 0 && index % 10 !== 9
        }"
      >
        <CardArticle :article="item" />
      </div>
    </article>
  </div>
</template>
