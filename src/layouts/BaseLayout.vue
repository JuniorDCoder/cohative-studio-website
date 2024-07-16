<template>
  <div class="overflow-x-hidden">
    <HeaderNav />
    <slot />
    <ScrollToTop />
  </div>
</template>

<script setup>
import HeaderNav from '@/components/HeaderNav.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'
</script>

<style scoped></style>
