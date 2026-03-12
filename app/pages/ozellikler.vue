<template>
  <div class="pt-20 bg-[#f8fafc] min-h-screen selection:bg-accent-500/30">
    <!-- Header: RICH & DYNAMIC (Split Layout) -->
    <section class="relative py-20 lg:py-28 overflow-hidden bg-primary-950 border-b border-primary-900 border-opacity-50">
      <!-- Subtle Background Patterns -->
      <div class="absolute inset-0 opacity-10">
         <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="container mx-auto px-8 md:px-16 lg:px-24 xl:px-40 relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <!-- Text Content -->
          <div class="flex-1 text-center lg:text-left" v-motion="{ initial: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 600 } } }">
            <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-accent-500/20 text-accent-400 font-bold text-[10px] uppercase tracking-widest mb-6 border border-accent-500/30">
              <span class="w-2 h-2 rounded-full bg-accent-500 mr-2 animate-pulse"></span>
              MODÜLER SİSTEM MİMARİSİ
            </div>
            <h1 class="text-4xl lg:text-6xl font-display font-black text-white mb-6 tracking-tight leading-tight">
              İşletmeniz İçin <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600 italic">Akıllı</span> <br/>
              Modüller
            </h1>
            <p class="text-lg text-primary-200 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Ürün Takip Sistemi (ÜTS), e-Fatura ve Ecza Deposu otomasyonu için ÜTS Entegre yazılım çözümleri.
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

    <!-- Features Grid (Dynamic Bento Layout) -->
    <section class="py-32 relative overflow-hidden bg-slate-50">
      <!-- Sophisticated Background Pattern -->
      <div class="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:40px_40px] opacity-30"></div>
      <div class="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
      
      <!-- Interactive Decorative Blobs -->
      <div class="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-accent-500/[0.08] rounded-full blur-[120px] animate-pulse"></div>
      <div class="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-primary-500/[0.08] rounded-full blur-[120px]"></div>

      <div class="container mx-auto px-8 md:px-16 lg:px-24 xl:px-40 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-20" v-motion="{ initial: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }">
          <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-950 text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-6 shadow-xl shadow-primary-900/10">
            Kapsamlı Modülerlik
          </div>
          <h2 class="text-5xl lg:text-7xl font-display font-black text-primary-950 leading-[1.05] mb-8 tracking-tighter">
            İşinizi <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-700">Geleceğe</span> <br/> Hazırlayın
          </h2>
          <p class="text-primary-600/80 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Modern mimari ile güçlendirilmiş, her ölçekteki işletme için optimize edilmiş akıllı çözümler.
          </p>
        </div>

        <!-- Card Structure -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div v-for="(feature, idx) in features" :key="idx" 
               class="relative group bg-white border border-slate-200/60 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-primary-950 hover:shadow-[0_40px_80px_-20px_rgba(2,6,23,0.3)] flex flex-col"
               v-motion="{ initial: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { delay: idx * 40 } } }">
             
             <!-- Card Top: Icon & Label -->
             <div class="p-10 pb-6 flex items-start justify-between relative z-10">
                <div class="w-16 h-16 rounded-[1.25rem] bg-slate-50 flex items-center justify-center text-primary-950 group-hover:bg-accent-600 group-hover:text-white group-hover:rotate-12 transition-all duration-500 shadow-inner border border-slate-100">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="feature.icon"></path>
                    </svg>
                </div>
                <div class="text-[10px] font-black text-slate-300 uppercase tracking-widest group-hover:text-white/20 transition-colors">
                  #{{ (idx + 1).toString().padStart(2, '0') }}
                </div>
             </div>

             <!-- Card Body -->
             <div class="px-10 pb-4 relative z-10">
                <h3 class="text-2xl font-black text-primary-950 mb-3 tracking-tight group-hover:text-white transition-colors duration-500">{{ feature.title }}</h3>
                <p class="text-primary-600 font-medium leading-relaxed opacity-80 group-hover:text-primary-200 group-hover:opacity-100 transition-all duration-500">{{ feature.desc }}</p>
             </div>

             <!-- Card Footer -->
             <div class="mt-auto p-10 pt-4 relative z-10">
                <span class="inline-flex items-center px-4 py-1.5 bg-accent-500/5 text-accent-600 text-[11px] font-bold rounded-xl border border-accent-500/10 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/20 transition-all duration-500">
                   {{ feature.label }}
                </span>
             </div>

             <!-- Decorative Glow on Hover -->
             <div class="absolute inset-0 bg-gradient-to-br from-accent-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- NEW: LEGAL COMPLIANCE & SUPPORT (To break the white) -->
    <section class="py-24 bg-primary-950 relative overflow-hidden">
      <!-- Gradient background glow -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-600/20 rounded-full blur-[120px]"></div>
      </div>
      
      <div class="container mx-auto px-8 md:px-16 lg:px-24 xl:px-40 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div v-motion="{ initial: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }">
            <h3 class="text-accent-500 font-bold tracking-widest uppercase text-[10px] mb-4">GÜVEN VE DESTEK</h3>
            <h4 class="text-4xl font-display font-black text-white mb-8 leading-tight">Yasal Mevzuatlara <br/> <span class="text-accent-400">Tam Uyumluluk</span></h4>
            <div class="space-y-6">
              <div class="flex items-start gap-6 p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 group">
                <div class="w-12 h-12 rounded-2xl bg-accent-600/20 flex items-center justify-center shrink-0 border border-accent-500/30 group-hover:scale-110 transition-transform duration-500">
                  <svg class="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <div>
                  <h5 class="text-white text-lg font-bold mb-1">Mevzuat Yönetimi</h5>
                  <p class="text-primary-400 font-medium leading-relaxed">Sağlık Bakanlığı Tarafından Yayınlanan Tüm Güncel Yönergelere Eksiksiz Uyum.</p>
                </div>
              </div>
              <div class="flex items-start gap-6 p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 group">
                <div class="w-12 h-12 rounded-2xl bg-blue-600/20 flex items-center justify-center shrink-0 border border-blue-500/30 group-hover:scale-110 transition-transform duration-500">
                  <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h5 class="text-white text-lg font-bold mb-1">Eğitim ve Destek</h5>
                  <p class="text-primary-400 font-medium leading-relaxed">Sistemi En Verimli Şekilde Kullanmanız İçin Uzmanlarımızdan Uçtan Uca Destek Alın.</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Sophisticated Visual: Compliance Dashboard Mockup -->
          <div class="relative" v-motion="{ initial: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 1000 } } }">
            <div class="relative aspect-square bg-white/[0.02] rounded-[4rem] border border-white/10 p-12 flex items-center justify-center overflow-hidden group">
               <!-- Background glow -->
               <div class="absolute inset-0 bg-gradient-to-br from-accent-600/10 to-transparent opacity-50"></div>
               
               <!-- Centered Badge -->
               <div class="relative z-10 w-full h-full bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 shadow-2xl flex flex-col items-center justify-center p-8 transition-transform duration-700 group-hover:scale-105">
                  <div class="w-24 h-24 bg-accent-600 rounded-full flex items-center justify-center text-white mb-6 shadow-[0_0_40px_rgba(234,88,12,0.4)] animate-pulse">
                     <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  </div>
                  <div class="text-center">
                     <span class="block text-white font-black text-2xl mb-1 tracking-tight uppercase">MEVZUAT ONAYLI</span>
                     <div class="h-1 w-20 bg-accent-600 mx-auto rounded-full mb-4"></div>
                     <p class="text-primary-300 text-xs font-bold uppercase tracking-[0.2em] opacity-60">SİSTEM 100% UYUMLU</p>
                  </div>
               </div>

               <!-- Floating Status Nodes -->
               <div class="absolute top-10 right-10 p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl animate-bounce z-20" style="animation-duration: 4s">
                  <div class="w-2 h-2 bg-green-500 rounded-full mb-2"></div>
                  <div class="h-1.5 w-8 bg-white/40 rounded"></div>
               </div>
               <div class="absolute bottom-16 left-12 p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl animate-bounce z-20" style="animation-duration: 5s">
                  <div class="flex gap-1 mb-2">
                     <div class="w-1 h-3 bg-accent-500 rounded-full"></div>
                     <div class="w-1 h-5 bg-accent-600 rounded-full"></div>
                     <div class="w-1 h-2 bg-accent-400 rounded-full"></div>
                  </div>
                  <div class="h-1.5 w-12 bg-white/40 rounded"></div>
               </div>
               
               <!-- Rotating Tech Circle -->
               <div class="absolute inset-0 border-[40px] border-white/[0.02] rounded-full animate-spin-slow pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-24 bg-primary-950 text-center border-t border-white/5">
      <div class="container mx-auto px-8 md:px-16 lg:px-24 xl:px-40" v-motion="{ initial: { opacity: 0, scale: 0.98 }, visible: { opacity: 1, scale: 1 } }">
        <h2 class="text-4xl lg:text-6xl font-display font-black text-white mb-10 tracking-tight">Sürecinizi Bugün <br/> <span class="text-accent-500 italic">Otomatize Edin</span></h2>
        <NuxtLink to="/" class="group px-14 py-6 bg-accent-600 hover:bg-accent-700 text-white rounded-2xl font-black text-xl transition-all shadow-2xl shadow-accent-600/40 hover:-translate-y-2 inline-flex items-center gap-6">
          <span>ÜCRETSİZ BAŞLAYIN</span>
          <div class="bg-white/20 p-2 rounded-xl transition-transform group-hover:translate-x-3">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </div>
        </NuxtLink>
        <p class="mt-8 text-primary-400 font-bold text-sm uppercase tracking-widest">KREDİ KARTI GEREKTİRMEZ • 14 GÜN DENEME</p>
      </div>
    </section>
  </div>
</template>

<script setup>
const features = [
  { title: 'Tek Tıkla Kabul', desc: 'Ticari yazılımdan gelen faturalarınızı beklemeden tek tıklamayla ÜTS\'ye aktarın.', label: 'Sertifikalı Güvence', icon: 'M5 13l4 4L19 7' },
  { title: 'Zaman Hızı', desc: 'Süreçlerinizi yavaşlatan manuel işlemlerden kurtulun; maksimum hızda yönetin.', label: 'Tam Otomasyon', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { title: 'ERP Uyumu', desc: 'Mevcut kullandığınız ERP/Muhasebe yazılımınıza tam entegre çalıştırın.', label: 'Geniş Uyumluluk', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
  { title: 'Lot/Seri Takibi', desc: 'Ürünlere ait detaylı lot/seri izlenebilirliği ile tam kontrol sağlayın.', label: 'Detaylı İzleme', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
  { title: 'Stok Yönetimi', desc: 'Depolarınızdaki stokları lot ve seri bazında yüksek doğrulukla takip edin.', label: 'Envanter Kontrolü', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
  { title: 'Excel Desteği', desc: 'Toplu bildirimleri Excel ile içe aktarabilir, raporları Excel olarak indirebilirsiniz.', label: 'Toplu İşlem', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { title: 'Raporlama', desc: 'İş süreçlerinizi ve detaylı işlem geçmişini şeffaf raporlarla görüntüleyin.', label: 'İş Analitiği', icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z' },
  { title: 'İhale Yönetimi', desc: 'Üstlendiğiniz ihaleleri ve sevk durumlarını tek ekrandan yönetin.', label: 'Sevkiyat Planlama', icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' },
  { title: 'Karekod Tasarım', desc: 'Bakanlık yönergelerine uygun barkod ile karekod tasarlayıp hızlıca yazdırın.', label: 'Endüstriyel Baskı', icon: 'M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z' },
  { title: 'UDI Uyumu', desc: 'Uluslararası UDI kurallarına eksiksiz uyumlu altyapı ile regülasyonlara hazırlanın.', label: 'Küresel Standart', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' },
  { title: 'Çoklu Depo', desc: 'Farklı lokasyonlardaki depolarınızı tanımlayarak stok transferlerini yönetin.', label: 'Merkezi Yönetim', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
  { title: 'Hızlı Sorgulama', desc: 'Tekil ürün geçmişi ve askıdaki cihazlarınızı anında tespit edin.', label: 'Anlık Analiz', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' }
]
</script>

<style scoped>
@keyframes scan {
  from { top: 0; }
  to { top: 100%; }
}

.animate-spin-slow {
  animation: spin 12s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
