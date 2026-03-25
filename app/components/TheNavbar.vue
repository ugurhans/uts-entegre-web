<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <nav class="bg-white/80 backdrop-blur-md border-b border-primary-100 h-20 flex items-center relative z-50">
      
      <!-- Animasyonlu Işık Toğu (Soldan Sağa) -->
      <div class="absolute bottom-[-1px] left-0 w-full h-[2px] overflow-hidden pointer-events-none">
        <div class="absolute top-0 left-0 w-[200px] h-[2px] bg-gradient-to-r from-transparent via-accent-500 to-transparent beam-animation"></div>
      </div>

      <div class="container mx-auto px-8 md:px-16 lg:px-24 xl:px-40 flex justify-between items-center relative w-full">
        <!-- Logo -->
        <NuxtLink to="/" @click="isMenuOpen = false" class="flex items-center space-x-3 group relative z-50">
          <img src="/logo.png" alt="ÜTS Entegre Logo" class="h-10 w-auto group-hover:scale-105 transition-transform" />
          <span class="text-xl font-display font-black tracking-tight text-primary-900 uppercase">
            ÜTS <span class="text-accent-600">Entegre</span>
          </span>
        </NuxtLink>

        <!-- Desktop Menus -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/" exact-active-class="active-link" class="text-sm font-semibold text-primary-600 hover:text-accent-600 transition-all relative group py-2">Ana Sayfa</NuxtLink>
          <NuxtLink to="/ozellikler" exact-active-class="active-link" class="text-sm font-semibold text-primary-600 hover:text-accent-600 transition-all relative group py-2">Özellikler</NuxtLink>
          <NuxtLink to="/hakkimizda" exact-active-class="active-link" class="text-sm font-semibold text-primary-600 hover:text-accent-600 transition-all relative group py-2">Hakkımızda</NuxtLink>
          <NuxtLink to="/iletisim" exact-active-class="active-link" class="text-sm font-semibold text-primary-600 hover:text-accent-600 transition-all relative group py-2">İletişim</NuxtLink>
        </div>

        <!-- CTA & Mobile Toggle -->
        <div class="flex items-center space-x-4 relative z-50">
          <NuxtLink to="/iletisim" class="hidden sm:block px-6 py-2.5 bg-accent-600 hover:bg-accent-700 text-white rounded-full font-bold text-sm shadow-xl shadow-accent-600/10 transition-all hover:-translate-y-0.5 active:translate-y-0 text-center">
            Teklif Al
          </NuxtLink>
          
          <!-- Mobile Menu Button -->
          <button 
            @click="isMenuOpen = !isMenuOpen" 
            class="md:hidden p-2 text-primary-900 hover:bg-primary-50 rounded-xl transition-colors"
            aria-label="Menü"
          >
            <div class="w-6 h-5 relative flex flex-col justify-between">
              <span :class="isMenuOpen ? 'rotate-45 translate-y-2' : ''" class="w-full h-0.5 bg-current transition-all duration-300 origin-center"></span>
              <span :class="isMenuOpen ? 'opacity-0 scale-0' : ''" class="w-full h-0.5 bg-current transition-all duration-300"></span>
              <span :class="isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''" class="w-full h-0.5 bg-current transition-all duration-300 origin-center"></span>
            </div>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-[-10px]"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="isMenuOpen" class="fixed inset-0 bg-white z-[999] md:hidden flex flex-col pt-20">
          <!-- Close Button for Mobile Overlay -->
          <div class="absolute top-0 right-0 h-20 flex items-center px-8">
            <button 
              @click="isMenuOpen = false" 
              class="p-2 text-primary-900 hover:bg-primary-50 rounded-xl transition-colors"
              aria-label="Kapat"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <div class="flex-1 overflow-y-auto px-8 py-10 space-y-2">
            <NuxtLink 
              v-for="link in navLinks" 
              :key="link.path"
              :to="link.path" 
              @click="isMenuOpen = false"
              active-class="text-accent-600 bg-accent-50"
              class="block px-6 py-5 rounded-2xl text-xl font-bold text-primary-900 hover:bg-primary-50 transition-all border border-transparent"
            >
              {{ link.name }}
            </NuxtLink>
          </div>
          
          <div class="p-8 bg-primary-50/50 border-t border-primary-100">
            <NuxtLink 
              to="/iletisim" 
              @click="isMenuOpen = false"
              class="block w-full py-5 bg-accent-600 hover:bg-accent-700 text-white rounded-2xl font-black text-center shadow-2xl shadow-accent-600/30 transition-all active:scale-[0.98]"
            >
              Teklif Al
            </NuxtLink>
            
          </div>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Ana Sayfa', path: '/' },
  { name: 'Özellikler', path: '/ozellikler' },
  { name: 'Hakkımızda', path: '/hakkimizda' },
  { name: 'İletişim', path: '/iletisim' }
]
</script>

<style scoped>
.active-link {
  color: #ea580c !important; /* accent-600 */
}

.active-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #ea580c;
  border-radius: 2px;
}

.beam-animation {
  animation: moveBeam 8s infinite linear;
  box-shadow: 0 0 10px 1px rgba(249, 115, 22, 0.8);
}

@keyframes moveBeam {
  0% { transform: translateX(-200px); opacity: 0; }
  5% { opacity: 1; }
  95% { opacity: 1; }
  100% { transform: translateX(calc(100vw + 200px)); opacity: 0; }
}
</style>
