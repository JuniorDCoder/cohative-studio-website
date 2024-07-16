<template>
  <div
    :v-show="visible"
    class="fixed flex items-center justify-center w-16 h-16 text-white transition-transform duration-300 ease-in-out bg-[#ff6347] rounded-full cursor-pointer scroll-to-top bottom-5 right-5 opacity-80 hover:opacity-100"
    @click="scrollToTop"
  >
    <i class="text-2xl text-primary fas fa-arrow-up"></i>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

const handleScroll = () => {
  visible.value = window.scrollY > 200
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.scroll-to-top:hover {
  animation: bounce 1s infinite;
}
</style>
