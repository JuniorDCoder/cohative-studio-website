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
        <div class="flex items-center justify-center my-9 md:my-24">
          <img src="../assets/cohative-home.png" alt="" class="w-4/5 md:w-[1350px]" />
        </div>

        <div class="w-full bg-secondary h-96"></div>
        <div
          class="flex flex-col w-5/6 py-5 ml-9 md:py-12 md:w-1/3 md:items-start md:ml-60 text-dark"
        >
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
        <div class="w-full bg-secondary h-96"></div>
        <div
          class="flex flex-col w-5/6 py-5 ml-9 md:py-12 md:w-1/3 md:items-start md:ml-60 text-dark"
        >
          <h1 class="my-4 text-3xl font-bold">Our Core Value</h1>
          <div class="flex flex-col text-2xl">
            <div class="mt-1">
              <span class="">Cohesion:</span> We believe in the strength of a unified vision. We
              work collaboratively with our clients to ensure all elements of their brand identity
              seamlessly come together.
            </div>
            <div class="mt-9">
              Clarity: We strive for clear communication in everything we do. Our designs are
              visually impactful and our narratives are easy to understand.
            </div>
            <div class="mt-9">
              Creativity: We are passionate about pushing boundaries and exploring new ideas. We
              bring a fresh perspective to every project.
            </div>
            <div class="mt-9">
              Connection: We believe in the power of storytelling to build meaningful connections
              between brands and their audiences.
            </div>

            <div class="mt-9">
              Collaboration: We value teamwork and believe the best results come from working
              together with our clients and each other.
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>
