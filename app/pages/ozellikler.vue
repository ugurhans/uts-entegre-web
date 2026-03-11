<template>
  <div class="pt-20 bg-slate-50 min-h-screen">
    <!-- Header: RICH & DYNAMIC (Split Layout) -->
    <section class="relative py-20 lg:py-28 overflow-hidden bg-primary-950 border-b border-primary-900 border-opacity-50">
      <!-- Subtle Background Patterns -->
      <div class="absolute inset-0 opacity-10">
         <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <!-- Text Content -->
          <div class="flex-1 text-center lg:text-left" v-motion="{ initial: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 600 } } }">
            <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-accent-500/20 text-accent-400 font-bold text-[10px] uppercase tracking-widest mb-6 border border-accent-500/30">
              <span class="w-2 h-2 rounded-full bg-accent-500 mr-2 animate-pulse"></span>
              Modüler Sistem Mimarisi
            </div>
            <h1 class="text-4xl lg:text-6xl font-display font-black text-white mb-6 tracking-tight leading-tight">
              İşletmeniz İçin <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600 italic">Akıllı</span> <br/>
              Modüller
            </h1>
            <p class="text-lg text-primary-200 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Ürün Takip Sistemi (ÜTS), İlaç Takip Sistemi (İTS), Medula, e-Fatura ve Ecza Deposu otomasyonu için DataStil yazılım çözümleri.
            </p>
          </div>
          
          <!-- Visual Context (Abstract Dashboard/UI) -->
          <div class="flex-1 w-full" v-motion="{ initial: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { delay: 200 } } }">
             <div class="bg-primary-900/50 backdrop-blur-xl border border-white/10 p-4 rounded-3xl shadow-2xl skew-y-2 lg:-skew-y-2 transform perspective-1000 rotateX-12 hover:skew-y-0 transition-transform duration-700">
                <div class="flex items-center gap-2 mb-4 px-2">
                   <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                   <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                   <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                   <div class="bg-white/5 rounded-2xl p-6 border border-white/5">
                      <div class="w-8 h-8 rounded-full bg-accent-500/20 mb-4 flex items-center justify-center text-accent-400">
                         <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                      </div>
                      <div class="h-2 w-16 bg-white/20 rounded mb-2"></div>
                      <div class="h-2 w-24 bg-white/10 rounded"></div>
                   </div>
                   <div class="bg-white/5 rounded-2xl p-6 border border-white/5">
                      <div class="w-8 h-8 rounded-full bg-blue-500/20 mb-4 flex items-center justify-center text-blue-400">
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                      <div class="h-2 w-20 bg-white/20 rounded mb-2"></div>
                      <div class="h-2 w-12 bg-white/10 rounded"></div>
                   </div>
                </div>
                <div class="mt-4 bg-white/5 rounded-2xl p-4 border border-white/5 flex gap-2 h-20 items-end">
                   <div v-for="i in 8" :key="i" class="flex-1 bg-accent-600/80 rounded-t-sm" :style="{ height: (30 + Math.random() * 70) + '%' }"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Module Based Features (6 Modules) -->
    <section class="py-24 space-y-32">
      
      <!-- Module 01: ERP ENTEGRASYONU -->
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="flex-1 order-2 lg:order-1" v-motion="{ initial: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }">
            <div class="inline-flex items-center gap-2 mb-6">
               <span class="w-8 h-[2px] bg-accent-600"></span>
               <div class="text-accent-600 font-black text-[10px] tracking-widest uppercase bg-accent-50 px-3 py-1 rounded-md border border-accent-100">MODÜL 01</div>
            </div>
            <h2 class="text-4xl lg:text-5xl font-display font-black text-primary-900 mb-6 leading-tight">ÜRÜN VE İLAÇ  <br/> <span class="text-primary-400">TAKİP SİSTEMİ (ÜTS & İTS)</span></h2>
            <p class="text-lg text-primary-600 mb-8 font-medium">TİTCK ile tam entegre çalışan bildirim ve takip yazılımı. İlaçların üretimden kullanıma tüm adımlarını dijital ortamda takip edin.</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="flex items-start p-5 bg-white shadow-md shadow-primary-900/5 border border-primary-100 rounded-2xl hover:border-accent-200 transition-colors group">
                <div class="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center text-accent-600 mr-4 group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                </div>
                <div>
                  <span class="font-bold text-primary-900 block mb-1">ÜTS Uyumlu & ERP</span>
                  <p class="text-[10px] text-primary-400 font-bold uppercase tracking-wider">Token/e-imza desteği</p>
                </div>
              </div>
              <div class="flex items-start p-5 bg-white shadow-md shadow-primary-900/5 border border-primary-100 rounded-2xl hover:border-accent-200 transition-colors group">
                <div class="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center text-accent-600 mr-4 group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                </div>
                <div>
                  <span class="font-bold text-primary-900 block mb-1">Lot / Seri Takibi</span>
                  <p class="text-[10px] text-primary-400 font-bold uppercase tracking-wider">Satış/alış otomasyonu</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Richer Visual for Module 1 -->
          <div class="flex-1 order-1 lg:order-2 w-full" v-motion="{ initial: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }">
            <div class="bg-gradient-to-br from-primary-900 to-primary-800 rounded-[2.5rem] p-12 relative overflow-hidden shadow-2xl">
               <!-- Decorative glowing orbs -->
               <div class="absolute -top-10 -right-10 w-40 h-40 bg-accent-500 rounded-full blur-[80px] opacity-40"></div>
               <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500 rounded-full blur-[80px] opacity-30"></div>
               
               <div class="relative grid grid-cols-2 gap-6 group">
                  <div class="h-28 bg-white rounded-2xl shadow-xl flex items-center justify-center p-4 border border-white/20 transform group-hover:-translate-y-2 transition-transform duration-500">
                     <span class="font-black text-2xl text-primary-900 tracking-tighter">LOGO</span>
                  </div>
                  <div class="h-28 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center p-4 border border-white/10 transform translate-y-6 group-hover:translate-y-4 transition-transform duration-500">
                     <span class="font-black text-xl text-white tracking-widest">SAP</span>
                  </div>
                  <div class="h-28 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center p-4 border border-white/10 transform -translate-y-4 group-hover:-translate-y-6 transition-transform duration-500">
                     <span class="font-black text-xl text-white tracking-widest text-center leading-none">MİCRO <br/><span class="text-[10px] text-accent-400">YAZILIM</span></span>
                  </div>
                  <div class="h-28 bg-white rounded-2xl shadow-xl flex items-center justify-center p-4 border border-white/20 transform group-hover:translate-y-2 transition-transform duration-500">
                     <span class="font-black text-xl text-primary-900 tracking-widest italic">NETSİS</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Module 02: AKILLI BİLDİRİM (Rich background) -->
      <div class="bg-primary-900 py-24 relative overflow-hidden text-white border-y border-white/10">
        <!-- Abstract wavy background -->
        <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="w-full h-full"><path d="M0 50 Q 25 25 50 50 T 100 50 L 100 100 L 0 100 Z" fill="currentColor" class="text-white"></path></svg>
        </div>
        
        <div class="container mx-auto px-6 relative z-10">
          <div class="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div class="flex-1" v-motion="{ initial: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }">
              <div class="inline-flex items-center gap-2 mb-6">
                 <span class="w-8 h-[2px] bg-white/30"></span>
                 <div class="text-white font-black text-[10px] tracking-widest uppercase bg-white/10 px-3 py-1 rounded-md border border-white/20">MODÜL 02</div>
              </div>
              <h2 class="text-4xl lg:text-5xl font-display font-black mb-6 leading-tight tracking-tight">KAREKOD SERİLEŞTİRME <br/> <span class="text-white/50">& AGREGASYON YÖNETİMİ</span></h2>
              <p class="text-lg text-primary-200 mb-8 font-medium">Ürünlerinize karekod basımı, UDI standartlarına uygun etiketleme ve agregasyon süreçlerini uçtan uca yönetin.</p>
              
              <div class="space-y-4">
                 <div class="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex items-center gap-5 hover:bg-white/10 transition-colors">
                    <div class="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-accent-600/30">
                       <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                    </div>
                    <div>
                       <h5 class="font-bold text-white text-base mb-1">Hat Sonu Entegrasyonu</h5>
                       <p class="text-[10px] text-white/50 font-bold uppercase tracking-wider">Anlık etiket basımı ve UDI/Karekod</p>
                    </div>
                 </div>
              </div>
            </div>
            
            <div class="flex-1 w-full" v-motion="{ initial: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }">
               <div class="relative bg-white/5 border border-white/10 p-6 rounded-[2rem] shadow-2xl backdrop-blur-2xl">
                  <div class="bg-primary-950 p-8 rounded-[1.5rem] relative overflow-hidden">
                     <!-- Animated scanning line -->
                     <div class="absolute left-0 top-0 w-full h-1 bg-accent-500 shadow-[0_0_15px_rgba(249,115,22,1)] animate-[scan_3s_ease-in-out_infinite_alternate]"></div>
                     
                     <div class="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                        <div class="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                           <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <div>
                           <div class="text-sm font-bold text-white mb-1">Alma Bildirimi Başarılı</div>
                           <div class="text-xs text-white/40 font-mono">ID: 8934-XX21-998A</div>
                        </div>
                     </div>
                     
                     <div class="space-y-3">
                        <div class="flex justify-between items-center text-xs text-white/60">
                           <span>İşlenen Karekod</span>
                           <span class="font-mono text-white">4,250</span>
                        </div>
                        <div class="w-full bg-white/10 rounded-full h-2">
                           <div class="bg-accent-500 h-2 rounded-full w-full"></div>
                        </div>
                        <div class="flex justify-between items-center text-xs mt-4">
                           <span class="text-green-400">Hata: 0</span>
                           <span class="text-white/40">Süre: 1.2sn</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Module 03: STOK VE DEPO (Card Style Layout) -->
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="flex-1 order-2 lg:order-1" v-motion="{ initial: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }">
            <div class="inline-flex items-center gap-2 mb-6">
               <span class="w-8 h-[2px] bg-orange-600"></span>
               <div class="text-orange-600 font-black text-[10px] tracking-widest uppercase bg-orange-50 px-3 py-1 rounded-md border border-orange-100">MODÜL 03</div>
            </div>
            <h2 class="text-4xl lg:text-5xl font-display font-black text-primary-900 mb-6 leading-tight">MEDULA, E-FATURA <br/> <span class="text-primary-400">VE ECZA DEPOSU YÖNETİMİ</span></h2>
            <p class="text-lg text-primary-600 mb-8 font-medium">Hasta kayıt, rapor girişi, ticari sistem entegreli e-Fatura ve ecza depolarınız için kapsamlı stok & depo otomasyonu.</p>
            
            <div class="flex gap-4">
               <div class="flex-1 bg-white p-6 rounded-2xl border border-primary-100 shadow-md text-center group hover:-translate-y-1 transition-transform">
                  <div class="text-3xl font-black text-primary-900 mb-2 leading-none">30+</div>
                  <div class="text-[10px] text-primary-400 font-bold uppercase tracking-widest">ERP Entegrasyonu</div>
                  <div class="mt-4 w-full bg-primary-50 h-1 rounded-full overflow-hidden">
                     <div class="bg-primary-900 h-full w-[100%]"></div>
                  </div>
               </div>
               <div class="flex-1 bg-orange-500 p-6 rounded-2xl shadow-lg shadow-orange-500/20 text-center text-white group hover:-translate-y-1 transition-transform">
                  <div class="text-3xl font-black mb-2 leading-none flex items-center justify-center gap-2">
                     <span class="w-2 h-2 rounded-full bg-white animate-ping"></span> Live
                  </div>
                  <div class="text-[10px] text-white/70 font-bold uppercase tracking-widest">İTS & SIPARİŞ TAKİBİ</div>
               </div>
            </div>
          </div>
          
          <div class="flex-1 order-1 lg:order-2 w-full" v-motion="{ initial: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }">
             <div class="bg-white border border-primary-100 rounded-[2.5rem] p-8 shadow-xl relative grid grid-cols-2 gap-4">
                <div class="col-span-2 bg-primary-50 rounded-2xl p-6 flex justify-between items-center border border-primary-100">
                   <div>
                      <div class="text-xs font-bold text-primary-500 uppercase mb-1">Toplam Stok</div>
                      <div class="text-2xl font-black text-primary-900">145,280</div>
                   </div>
                   <div class="text-right">
                      <div class="text-xs font-bold text-primary-500 uppercase mb-1">ÜTS Stoğu</div>
                      <div class="text-2xl font-black text-green-600">145,280</div>
                   </div>
                </div>
                <!-- Mini Charts -->
                <div class="bg-primary-50 rounded-2xl p-6 border border-primary-100 flex flex-col justify-end h-32 relative overflow-hidden group">
                   <div class="absolute top-4 left-4 text-xs font-bold text-primary-900 z-10">Girişler</div>
                   <div class="flex items-end gap-1 h-1/2 opacity-70 group-hover:opacity-100 transition-opacity">
                      <div v-for="i in 6" :key="i" class="flex-1 bg-green-500 rounded-t-sm" :style="{ height: (40 + Math.random() * 60) + '%' }"></div>
                   </div>
                </div>
                <div class="bg-primary-50 rounded-2xl p-6 border border-primary-100 flex flex-col justify-end h-32 relative overflow-hidden group">
                   <div class="absolute top-4 left-4 text-xs font-bold text-primary-900 z-10">Çıkışlar</div>
                   <div class="flex items-end gap-1 h-1/2 opacity-70 group-hover:opacity-100 transition-opacity">
                      <div v-for="i in 6" :key="i" class="flex-1 bg-orange-500 rounded-t-sm" :style="{ height: (20 + Math.random() * 50) + '%' }"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

    </section>

    <!-- Final CTA -->
    <section class="py-24 bg-white text-center border-t border-primary-100 mt-20">
      <div class="container mx-auto px-6" v-motion="{ initial: { opacity: 0, scale: 0.98 }, visible: { opacity: 1, scale: 1 } }">
        <h2 class="text-4xl lg:text-5xl font-display font-black text-primary-900 mb-8 tracking-tight">Sürecinizi Bugün <br/> <span class="text-accent-600 italic">Otomatize Edin</span></h2>
        <NuxtLink to="/" class="group px-12 py-5 bg-primary-900 hover:bg-black text-white rounded-full font-black text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-4">
          <span>SİSTEMİ DENEYİN</span>
          <div class="bg-white/20 p-2 rounded-full transition-transform group-hover:translate-x-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes scan {
  from { top: 0; }
  to { top: 100%; }
}
</style>
