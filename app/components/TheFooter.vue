<template>
  <footer class="bg-primary-900 text-white py-16">
    <div class="container mx-auto px-8 md:px-16 lg:px-24 xl:px-40">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- Brand -->
        <div class="flex flex-col items-start">
          <NuxtLink to="/" class="flex items-center space-x-3 mb-6 group">
            <img src="/logoBeyaz.png" alt="ÜTS Entegre Logo" class="h-10 w-auto group-hover:scale-105 transition-transform" />
            <span class="text-xl font-display font-black text-white uppercase tracking-tight">ÜTS ENTEGRE</span>
          </NuxtLink>
          <p class="text-primary-400 font-medium leading-relaxed">
            Medikal sektörü için geliştirilmiş güvenilir bildirim ve entegrasyon merkezi.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h6 class="text-sm font-black uppercase tracking-widest text-accent-500 mb-6">KURUMSAL</h6>
          <ul class="space-y-4">
            <li><NuxtLink to="/hakkimizda" class="text-primary-300 hover:text-white transition-colors">Hakkımızda</NuxtLink></li>
             <!-- 
            <li><a href="#" class="text-primary-300 hover:text-white transition-colors">KVKK Aydınlatma Metni</a></li>
            <li><a href="#" class="text-primary-300 hover:text-white transition-colors">Kullanım Şartları</a></li>
            <li><a href="#" class="text-primary-300 hover:text-white transition-colors">İş Ortakları</a></li>
         -->
          </ul>
        </div>

        <!-- Product -->
        <div>
          <h6 class="text-sm font-black uppercase tracking-widest text-accent-500 mb-6">ÜRÜN</h6>
          <ul class="space-y-4">
            <li><NuxtLink to="/ozellikler" class="text-primary-300 hover:text-white transition-colors">Özellikler</NuxtLink></li>
            <!-- 
            <li><a href="#" class="text-primary-300 hover:text-white transition-colors">ERP Entegrasyonları</a></li>
             <li><a href="#" class="text-primary-300 hover:text-white transition-colors">Fiyatlandırma</a></li>
         -->
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h6 class="text-sm font-black uppercase tracking-widest text-accent-500 mb-6">İLETİŞİM</h6>
          <ul class="space-y-4">
            <li class="flex items-center space-x-3 text-primary-300">
               <a href="tel:+905319440335" class="flex items-center space-x-3 hover:text-white transition-colors font-medium">
                  <svg class="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <span>+90 531 944 03 35</span>
               </a>
            </li>
            <li class="flex items-center space-x-3 text-primary-300">
               <NuxtLink to="/iletisim" class="flex items-center space-x-3 hover:text-white transition-colors">
                  <svg class="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                  <span>İzmir, Türkiye</span>
               </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-8 border-t border-primary-800 flex flex-col md:flex-row justify-between items-center text-sm text-primary-500 font-medium">
        <p>© 2026 ÜTS Entegre. Tüm hakları saklıdır.</p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <span class="text-primary-600">Powered by <a href="https://avtyazilim.com" target="_blank" class="text-accent-600 hover:text-white transition-colors font-bold">AVT Yazılım</a></span>
        </div>
      </div>
    </div>
  </footer>
</template>
