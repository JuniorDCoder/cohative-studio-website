<template>
  <RouterLink :to="to" class="flex items-center w-full">
    <span v-if="isActive" class="block w-1 mr-2 h-7 md:h-4 bg-secondary"></span>
    <span class="md:hidden"><i :class="`fa-xl fas fa-${icon}`"></i></span>
    <span :class="{ 'font-bold': isActive }" class="hidden md:block">{{ label }}</span>
  </RouterLink>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  to: {
    type: [String, Object],
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  routeName: {
    type: String,
    required: true
  }
})

const route = useRoute()
const isActive = computed(() => route.name === props.routeName)
</script>
