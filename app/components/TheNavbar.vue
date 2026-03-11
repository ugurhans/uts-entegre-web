<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary-100 h-20 flex items-center">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center space-x-2 group">
        <div class="w-10 h-10 bg-accent-600 rounded-lg flex items-center justify-center shadow-lg shadow-accent-600/20 group-hover:scale-105 transition-transform">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
        </div>
        <span class="text-xl font-display font-black tracking-tight text-primary-900 uppercase">
          ÜTS <span class="text-accent-600">Entegre</span>
        </span>
      </NuxtLink>

      <!-- Menus -->
      <div class="hidden md:flex items-center space-x-8">
        <NuxtLink to="/ozellikler" class="text-sm font-semibold text-primary-600 hover:text-accent-600 transition-colors">Özellikler</NuxtLink>
        <NuxtLink to="/hakkimizda" class="text-sm font-semibold text-primary-600 hover:text-accent-600 transition-colors">Hakkımızda</NuxtLink>
        <NuxtLink to="/#how-it-works" class="text-sm font-semibold text-primary-600 hover:text-accent-600 transition-colors">Nasıl Çalışır?</NuxtLink>
        <NuxtLink to="/#contact" class="text-sm font-semibold text-primary-600 hover:text-accent-600 transition-colors">İletişim</NuxtLink>
      </div>

      <!-- CTA -->
      <div class="flex items-center space-x-4">
        <button class="px-6 py-2.5 bg-accent-600 hover:bg-accent-700 text-white rounded-full font-bold text-sm shadow-xl shadow-accent-600/10 transition-all hover:-translate-y-0.5 active:translate-y-0">
          Hemen Başla
        </button>
      </div>
    </div>
  </nav>
</template>
