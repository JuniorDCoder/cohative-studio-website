<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue'
import SideNav from '@/components/SideNav.vue'
</script>

<template>
  <BaseLayout>
    <div>
      <div class="w-full">
        <div class="flex flex-row items-center justify-center w-full mt-24 space-x-24">
          <SideNav class="" />
          <p class="w-3/5 text-6xl text-secondary">
            We harness the collective power of creativity and collaboration to forge lasting
            connections between brands and their audiences.
          </p>
        </div>
        <div class="flex items-center justify-center my-24">
          <img src="../assets/cohative-home.png" alt="" />
        </div>
      </div>
    </div>
  </BaseLayout>
</template>
