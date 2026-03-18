<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary-100 h-20 flex items-center">
    
    <!-- Animasyonlu Işık Toğu (Soldan Sağa) -->
    <div class="absolute bottom-[-1px] left-0 w-full h-[2px] overflow-hidden pointer-events-none">
      <div class="absolute top-0 left-0 w-[200px] h-[2px] bg-gradient-to-r from-transparent via-accent-500 to-transparent beam-animation"></div>
    </div>

    <div class="container mx-auto px-8 md:px-16 lg:px-24 xl:px-40 flex justify-between items-center relative z-10">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center space-x-3 group">
        <img src="/logo.png" alt="ÜTS Entegre Logo" class="h-10 w-auto group-hover:scale-105 transition-transform" />
        <span class="text-xl font-display font-black tracking-tight text-primary-900 uppercase">
          ÜTS <span class="text-accent-600">Entegre</span>
        </span>
      </NuxtLink>

      <!-- Menus -->
      <div class="hidden md:flex items-center space-x-8">
        <NuxtLink to="/" exact-active-class="active-link" class="text-sm font-semibold text-primary-600 hover:text-accent-600 transition-all relative group py-2">Ana Sayfa</NuxtLink>
        <NuxtLink to="/ozellikler" exact-active-class="active-link" class="text-sm font-semibold text-primary-600 hover:text-accent-600 transition-all relative group py-2">Özellikler</NuxtLink>
        <NuxtLink to="/hakkimizda" exact-active-class="active-link" class="text-sm font-semibold text-primary-600 hover:text-accent-600 transition-all relative group py-2">Hakkımızda</NuxtLink>
        <!-- <NuxtLink to="/nasil-calisir" exact-active-class="active-link" class="text-sm font-semibold text-primary-600 hover:text-accent-600 transition-all relative group py-2">Nasıl Çalışır?</NuxtLink> -->
        <NuxtLink to="/iletisim" exact-active-class="active-link" class="text-sm font-semibold text-primary-600 hover:text-accent-600 transition-all relative group py-2">İletişim</NuxtLink>
      </div>

      <!-- CTA -->
      <div class="flex items-center space-x-4">
        <a href="mailto:iletisim@utsentegre.com?subject=Bilgi%20%26%20Destek%20Almak%20İstiyorum" class="px-6 py-2.5 bg-accent-600 hover:bg-accent-700 text-white rounded-full font-bold text-sm shadow-xl shadow-accent-600/10 transition-all hover:-translate-y-0.5 active:translate-y-0">
          Teklif Al
        </a>
      </div>
    </div>
  </nav>
</template>

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
