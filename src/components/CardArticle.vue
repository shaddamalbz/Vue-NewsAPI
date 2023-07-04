<script setup lang="ts">
import moment from 'moment'
defineProps<{
  article: any
}>()
</script>

<template>
  <img
    class="w-full h-80 object-cover bg-[#c4c4c480] rounded"
    :src="article.urlToImage"
    alt="article thumbnail"
  />
  <div class="h-[250px] p-4 flex flex-col justify-between">
    <div>
      <h3 class="text-2xl font-bold line-clamp-2">{{ article.title }}</h3>
      <p class="line-clamp-5 mb-4">
        {{ article.description }}
      </p>
    </div>

    <div class="w-full flex justify-between">
      <span>
        {{ moment(article.publishedAt).format('dddd, DD MMMM HH.mm') }}
      </span>
      <span class="font-semibold">
        {{ article.author }}
      </span>
    </div>
  </div>
</template>
