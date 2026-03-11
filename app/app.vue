<template>
  <div class="min-h-screen bg-white font-sans text-primary-900 overflow-x-hidden">
    <TheNavbar />
    
    <main>
      <NuxtPage />
    </main>

    <TheFooter />
  </div>
</template>

<script setup>
// Global layout and page transitions
</script>

<style>
body {
  scroll-behavior: smooth;
}

::selection {
  background-color: #f97316;
  color: white;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
