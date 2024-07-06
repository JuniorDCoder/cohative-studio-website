<template>
  <div class="flex flex-col space-y-1 text-dark">
    <RouterLink :to="{ name: 'home' }" class="flex items-center">
      <span v-if="currentRouteName === 'home'" class="block w-1 h-4 mr-2 bg-secondary"></span>
      <span :class="{ 'font-bold': currentRouteName === 'home' }">Home</span>
    </RouterLink>
    <RouterLink :to="{ name: '' }" class="flex items-center">
      <span v-if="currentRouteName === 'our-work'" class="block w-1 h-4 mr-2 bg-secondary"></span>
      <span :class="{ 'font-bold': currentRouteName === 'our-work' }">Our Work</span>
    </RouterLink>
    <RouterLink :to="{ name: 'about' }" class="flex items-center">
      <span v-if="currentRouteName === 'about'" class="block w-1 h-4 mr-2 bg-secondary"></span>
      <span :class="{ 'font-bold': currentRouteName === 'about' }">About</span>
    </RouterLink>
    <RouterLink :to="{ name: '' }" class="flex items-center">
      <span v-if="currentRouteName === 'blog'" class="block w-1 h-4 mr-2 bg-secondary"></span>
      <span :class="{ 'font-bold': currentRouteName === 'blog' }">Blog</span>
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const currentRouteName = computed(() => route.name)
</script>
