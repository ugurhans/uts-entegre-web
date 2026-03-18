<template>
  <div class="pt-20 bg-slate-50 min-h-screen">
    <!-- Header: Split Layout, Dark & Rich UI -->
    <section class="relative py-20 lg:py-28 overflow-hidden bg-primary-950 border-b border-primary-900 border-opacity-50">
      <!-- Deep Background Elements -->
      <div class="absolute inset-0 opacity-10">
         <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div class="container mx-auto px-8 md:px-16 lg:px-24 xl:px-40 relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <!-- Text Content -->
          <div class="flex-1 text-center lg:text-left" v-motion="{ initial: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 600 } } }">
            <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-accent-500/10 text-accent-400 font-bold text-[10px] uppercase tracking-widest mb-6 border border-accent-500/20">
              <span class="w-1.5 h-1.5 rounded-full bg-accent-500 mr-2 animate-pulse"></span>
              Hikayemiz
            </div>
            <h1 class="text-4xl lg:text-5xl font-display font-black text-white mb-6 tracking-tight leading-tight">
              Medikal Bildirim <br/> Süreçlerinde <br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600 italic">Güvenilir Çözüm Ortağınız</span>
            </h1>
            <p class="text-base text-primary-200 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              ÜTS Entegre olarak sektördeki dijital dönüşüm süreçlerinize liderlik ediyoruz. İhtiyaç analizi, çözüm tasarımı, kurulum & eğitim ve kesintisiz bakım & destek ile yanınızdayız.
            </p>
            

          </div>
          
          <!-- Visual Context: Abstract Composition / UI Simulation -->
          <div class="flex-1 w-full" v-motion="{ initial: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { delay: 200 } } }">
            <div class="relative w-full aspect-square max-w-[450px] mx-auto">
              <!-- Grid Background Card shadow -->
              <div class="absolute inset-0 bg-primary-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] transform rotate-3 scale-95 shadow-2xl"></div>
              
              <!-- Main Card -->
              <div class="absolute inset-0 bg-gradient-to-br from-primary-800/80 to-primary-900/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center shadow-2xl border-t-white/20 border-l-white/20">
                <!-- Decorative Shapes -->
                <div class="absolute w-[200%] h-[200%] border-[0.5px] border-white/5 rounded-full border-dashed animate-spin-slow pointer-events-none"></div>
                <div class="absolute w-64 h-64 border border-accent-500/10 rounded-full animate-pulse pointer-events-none"></div>
                
                <div class="relative z-10 text-center w-full px-8">
                   <div class="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                      <div class="text-left">
                        <div class="text-[10px] text-white/50 uppercase tracking-widest font-bold mb-1">GERÇEK ZAMANLI</div>
                        <div class="text-xl font-black text-white">SİSTEM AKTİF</div>
                      </div>
                      <div class="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                         <div class="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                      </div>
                   </div>
                   <div class="space-y-3">
                      <div class="bg-white/5 p-3 rounded-xl border border-white/10 text-left">
                         <div class="text-accent-400 font-bold uppercase tracking-wider mb-1">DİJİTAL DÖNÜŞÜM</div>
                       </div>
                      <div class="bg-white/5 p-3 rounded-xl border border-white/10 text-left">
                         <div class="text-blue-400 font-bold uppercase tracking-wider mb-1">GÜNCEL SİSTEM</div>
                       </div>
                   </div>
                </div>
              </div>
              
              <!-- Floating UI Elements -->
              <div class="absolute top-12 -left-8 bg-white/10 backdrop-blur-xl border border-white/10 p-3 rounded-xl shadow-xl animate-bounce" style="animation-duration: 4s">
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg class="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                </div>
              </div>
              
              <div class="absolute bottom-16 -right-6 bg-white/10 backdrop-blur-xl border border-white/10 p-3 rounded-xl shadow-xl animate-bounce" style="animation-duration: 5s">
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <svg class="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Info Section: BİZ KİMİZ (Refined Layout) -->
    <section class="py-24 bg-white relative">
      <div class="container mx-auto px-8 md:px-16 lg:px-24 xl:px-40">
        <div class="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div class="md:w-1/3 relative" v-motion="{ initial: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }">
             <div class="aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden relative shadow-inner border border-primary-50">
                <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div class="absolute inset-0 flex items-center justify-center p-8 text-center text-primary-400/50">
                   <svg class="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                <div class="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white shadow-sm">
                   <div class="text-center">
                      <div class="font-black text-primary-900 text-lg">ÜTSENTEGRE</div>
                    </div>
                </div>
             </div>
          </div>
          
          <div class="md:w-2/3 space-y-6" v-motion="{ initial: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }">
            <h2 class="text-3xl lg:text-4xl font-display font-black text-primary-900 leading-tight">Biz Kimiz?</h2>
            <div class="w-12 h-1 bg-accent-600 rounded-full"></div>
            <p class="text-base text-primary-600 leading-relaxed font-medium">
              Teknoloji tutkunu, deneyimli yazılım mühendisleri ve sektör uzmanlarından oluşan dinamik bir ekibiz. Amacımız, medikal sektördeki firmaların süreçlerini kolaylaştırmak.
            </p>
            <p class="text-base text-primary-600 leading-relaxed font-medium">
              Sektördeki dijital dönüşüm süreçlerinize liderlik ediyoruz. İhtiyaç analizi, çözüm tasarımı, kurulum & eğitim ve kesintisiz bakım & destek ile yanınızdayız.
            </p>
          
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision (Grid Layout, Dark Variant) -->
    <section class="py-24 bg-primary-950 text-white relative border-y border-white/5">
      <!-- Minimal background -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-accent-600/5 blur-[120px] pointer-events-none"></div>
      
      <div class="container mx-auto px-8 md:px-16 lg:px-24 xl:px-40 relative z-10 ">
         <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
            <!-- Mission Card -->
            <div class="p-10 lg:p-12 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/5 hover:bg-white/10 transition-colors group" v-motion="{ initial: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }">
               <div class="w-14 h-14 rounded-2xl bg-accent-600/20 text-accent-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent-600 group-hover:text-white transition-all duration-300">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
               </div>
               <h3 class="text-2xl font-display font-black mb-4 uppercase tracking-tight">MİSYONUMUZ</h3>
               <p class="text-primary-300 text-sm font-medium leading-relaxed">
                  İşletmelerin dijital dönüşüm yolculuğunda yanlarında yer alarak, karmaşık regülasyon süreçlerini bir yük olmaktan çıkarıp rekabet avantajı sağlayan şeffaf bir otomasyona dönüştürmek.
               </p>
            </div>
            
            <!-- Vision Card -->
            <div class="p-10 lg:p-12 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/5 hover:bg-white/10 transition-colors group" v-motion="{ initial: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 100 } } }">
               <div class="w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
               </div>
               <h3 class="text-2xl font-display font-black mb-4 uppercase tracking-tight">VİZYONUMUZ</h3>
               <p class="text-primary-300 text-sm font-medium leading-relaxed">
                  Türkiye'nin ve bölgenin en güvenilir medikal bildirim entegrasyon platformu olarak, sektör liderlerinin kalıcı tercihi haline gelmek ve sektör standartlarını belirlemek.
               </p>
            </div>
         </div>
      </div>
    </section>
    
    <!-- Values -->
    <section class="py-20 bg-slate-50 border-b border-primary-100">
       <div class="container mx-20 text-center">
          <h2 class="text-2xl lg:text-3xl font-display font-black text-primary-900 mb-12 uppercase">TEMEL DEĞERLERİMİZ</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
             <div class="p-6 bg-white rounded-2xl shadow-sm border border-primary-50 hover:shadow-md transition-shadow">
                <div class="w-12 h-12 mx-auto rounded-xl bg-accent-50 flex items-center justify-center text-accent-600 mb-4">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <h5 class="font-bold text-primary-900 uppercase tracking-widest text-xs">GÜVENİRLİK</h5>
             </div>
             <div class="p-6 bg-white rounded-2xl shadow-sm border border-primary-50 hover:shadow-md transition-shadow">
                <div class="w-12 h-12 mx-auto rounded-xl bg-accent-50 flex items-center justify-center text-accent-600 mb-4">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h5 class="font-bold text-primary-900 uppercase tracking-widest text-xs">İNOVASYON</h5>
             </div>
             <div class="p-6 bg-white rounded-2xl shadow-sm border border-primary-50 hover:shadow-md transition-shadow">
                <div class="w-12 h-12 mx-auto rounded-xl bg-accent-50 flex items-center justify-center text-accent-600 mb-4">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                </div>
                <h5 class="font-bold text-primary-900 uppercase tracking-widest text-xs">ODAĞIMIZ İNSAN</h5>
             </div>
             <div class="p-6 bg-white rounded-2xl shadow-sm border border-primary-50 hover:shadow-md transition-shadow">
                <div class="w-12 h-12 mx-auto rounded-xl bg-accent-50 flex items-center justify-center text-accent-600 mb-4">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"></path></svg>
                </div>
                <h5 class="font-bold text-primary-900 uppercase tracking-widest text-xs">HIZ VE KALİTE</h5>
             </div>
          </div>
       </div>
    </section>
  </div>
</template>

<style scoped>
.animate-spin-slow {
  animation: spin 20s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
