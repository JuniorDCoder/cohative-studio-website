<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue'
import SideNav from '@/components/SideNav.vue'
</script>

<template>
  <BaseLayout>
    <div>
      <div class="w-full">
        <div
          class="flex flex-row items-center justify-center w-full mt-12 space-x-7 md:mt-24 md:space-x-24"
        >
          <SideNav class="" />
          <p class="w-full text-3xl md:text-6xl md:w-3/5 text-secondary">
            We harness the collective power of creativity and collaboration to forge lasting
            connections between brands and their audiences.
          </p>
        </div>
        <div class="flex items-center justify-center my-12 md:my-24">
          <img src="../assets/cohative-home.png" alt="" class="w-4/5 md:w-[1350px]" />
        </div>
      </div>
    </div>
  </BaseLayout>
</template>
