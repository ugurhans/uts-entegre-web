<template>
  <footer class="bg-primary-900 text-white py-16">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- Brand -->
        <div class="flex flex-col items-start">
          <div class="flex items-center space-x-2 mb-6">
            <div class="w-8 h-8 bg-accent-500 rounded flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <span class="text-xl font-display font-black text-white uppercase tracking-tight">ÜTS ENTEGRE</span>
          </div>
          <p class="text-primary-400 font-medium leading-relaxed">
            Sağlık sektörü için geliştirilmiş güvenilir bildirim ve entegrasyon merkezi.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h6 class="text-sm font-black uppercase tracking-widest text-accent-500 mb-6">Kurumsal</h6>
          <ul class="space-y-4">
            <li><NuxtLink to="/hakkimizda" class="text-primary-300 hover:text-white transition-colors">Hakkımızda</NuxtLink></li>
            <li><a href="#" class="text-primary-300 hover:text-white transition-colors">KVKK Aydınlatma Metni</a></li>
            <li><a href="#" class="text-primary-300 hover:text-white transition-colors">Kullanım Şartları</a></li>
            <li><a href="#" class="text-primary-300 hover:text-white transition-colors">İş Ortakları</a></li>
          </ul>
        </div>

        <!-- Product -->
        <div>
          <h6 class="text-sm font-black uppercase tracking-widest text-accent-500 mb-6">Ürün</h6>
          <ul class="space-y-4">
            <li><NuxtLink to="/ozellikler" class="text-primary-300 hover:text-white transition-colors">Özellikler</NuxtLink></li>
            <li><a href="#" class="text-primary-300 hover:text-white transition-colors">ERP Entegrasyonları</a></li>
            <li><a href="#" class="text-primary-300 hover:text-white transition-colors">API Dokümantasyonu</a></li>
            <li><a href="#" class="text-primary-300 hover:text-white transition-colors">Fiyatlandırma</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h6 class="text-sm font-black uppercase tracking-widest text-accent-500 mb-6">İletişim</h6>
          <ul class="space-y-4">
            <li class="flex items-center space-x-3 text-primary-300">
              <svg class="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              <span>destek@utsentegre.com</span>
            </li>
            <li class="flex items-center space-x-3 text-primary-300">
              <svg class="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
              <span>Bursa, Türkiye</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-8 border-t border-primary-800 flex flex-col md:flex-row justify-between items-center text-sm text-primary-500 font-medium">
        <p>© 2026 ÜTS Entegre. Tüm hakları saklıdır.</p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="#" class="hover:text-white">LinkedIn</a>
          <a href="#" class="hover:text-white">X (Twitter)</a>
          <a href="#" class="hover:text-white">YouTube</a>
        </div>
      </div>
    </div>
  </footer>
</template>
