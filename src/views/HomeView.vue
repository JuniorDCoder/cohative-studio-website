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

        <div class="w-full bg-secondary h-96"></div>
        <div class="flex flex-col items-start w-1/3 py-12 ml-60 text-dark">
          <h1 class="my-4 text-3xl font-bold">Mission</h1>
          <p class="text-2xl">
            At Cohative (from the Latin "cohaerere" meaning "to come together"), we believe that
            powerful brands are built on a foundation of collaboration and clear storytelling. We
            don't just create visuals; we craft narratives that resonate. Our approach is
            refreshingly collaborative – we work hand-in-hand with our clients to understand their
            vision, values, and target audience. Through open communication and a shared creative
            journey, we translate those insights into compelling brand identities that not only look
            beautiful but also connect deeply with the hearts and minds of your customers.
          </p>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>
