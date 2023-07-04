<script setup lang="ts">
import { ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import axios from 'axios'
import _ from 'underscore'

import CardArticle from '../components/CardArticle.vue'

const articles = ref<any>(null)
const search = ref(null)
const loading = ref(true)

const history = useLocalStorage<any>('history', [])

function fetchData() {
  loading.value = true
  axios
    .get(import.meta.env.VITE_API_URL + '/everything', {
      params: {
        q: search.value && search.value !== '' ? search.value : 'game'
      },
      headers: { Authorization: import.meta.env.VITE_API_KEY }
    })
    .then((res) => {
      if (res.status === 200) {
        articles.value = res.data.articles
      }
    })
    .finally(() => (loading.value = false))
}

function onClickArticle(article: any) {
  history.value = _.uniq([...history.value, article])
  window.open(article.url, '_blank')
}

fetchData()
</script>

<template>
  <main class="container mx-auto my-4 space-y-4">
    <h2 class="text-4xl font-bold px-4">List Article</h2>
    <input
      class="w-full h-11 border border-[#c4c4c480] rounded-md py-2 px-3 mx-4"
      v-model="search"
      placeholder="search articles"
      @keyup.enter="fetchData"
    />

    <article v-if="!loading" class="flex flex-wrap gap-y-6">
      <div
        v-for="(article, index) of articles"
        :key="article.id"
        class="h-[580px] px-2 cursor-pointer hover:shadow"
        :class="{
          'basis-1/2': index % 10 === 0 || index % 10 === 9,
          'basis-1/4': index % 10 !== 0 && index % 10 !== 9
        }"
        @click="() => onClickArticle(article)"
      >
        <CardArticle :article="article" />
      </div>
    </article>
    <div v-else>
      <div class="flex flex-wrap gap-y-6">
        <div class="basis-1/2 px-4">
          <a-skeleton-image />
          <a-skeleton active />
        </div>
        <div class="basis-1/2 flex">
          <div class="basis-1/2 px-4">
            <a-skeleton-image />
            <a-skeleton active />
          </div>
          <div class="basis-1/2 px-4">
            <a-skeleton-image />
            <a-skeleton active />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
