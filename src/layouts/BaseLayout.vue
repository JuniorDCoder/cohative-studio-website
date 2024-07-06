<template>
  <div>
    <HeaderNav />

    <slot />
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import HeaderNav from '@/components/HeaderNav.vue'
</script>
