<template>
  <div class="flex flex-col ml-5 space-y-5 md:space-y-1 text-dark md:ml-0">
    <SideBarNavItem :to="{ name: 'home' }" icon="home" label="Home" routeName="home" />
    <SideBarNavItem :to="{ name: '' }" icon="briefcase" label="Our Work" routeName="our-work" />
    <SideBarNavItem :to="{ name: 'about' }" icon="info-circle" label="About" routeName="about" />
    <SideBarNavItem :to="{ name: '' }" icon="blog" label="Blog" routeName="blog" />
  </div>
</template>

<script setup>
import SideBarNavItem from './SideBarNavItem.vue'
</script>

<style scoped></style>
