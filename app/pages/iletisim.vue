<template>
  <div class="pt-20 bg-slate-50 min-h-screen">
    <!-- Header Section -->
    <section class="relative py-20 lg:py-28 overflow-hidden bg-primary-950 border-b border-primary-900 border-opacity-50">
      <div class="absolute inset-0 opacity-10">
         <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="container mx-auto px-8 md:px-16 lg:px-24 xl:px-40 relative z-10 text-center">
        <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-accent-500/10 text-accent-400 font-bold text-[10px] uppercase tracking-widest mb-6 border border-accent-500/20">
          İletişim
        </div>
        <h1 class="text-4xl lg:text-5xl font-display font-black text-white mb-6 tracking-tight leading-tight">
          Bizimle <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600 italic">İletişime Geçin</span>
        </h1>
        <p class="text-base text-primary-200 font-medium leading-relaxed max-w-2xl mx-auto">
          Sorularınız, demo talepleriniz veya iş birliği fırsatları için ekibimizle iletişime geçebilirsiniz.
        </p>
      </div>
    </section>

    <!-- Contact Info Section -->
    <section class="py-24 bg-white relative overflow-hidden">
      <div class="container mx-auto px-8 md:px-16 lg:px-24 xl:px-40 relative z-10">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Email Card -->
            <div class="bg-primary-900 rounded-[2.5rem] p-10 lg:p-12 text-white flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all group">
              <div class="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-accent-500 mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h4 class="text-xl font-bold mb-2 tracking-tight">E-POSTA</h4>
              <p class="text-primary-300 text-sm mb-6">Her türlü soru ve destek talebiniz için</p>
              <a href="mailto:iletisim@utsentegre.com?subject=Bilgi%20%26%20Destek%20Almak%20İstiyorum" class="text-xl font-medium text-accent-500 hover:text-white transition-colors">iletisim@utsentegre.com</a>
            </div>

            <!-- Office Card -->
            <div class="bg-slate-50 rounded-[2.5rem] p-10 lg:p-12 text-primary-900 flex flex-col items-center text-center border border-primary-100 shadow-sm hover:shadow-md transition-all group">
              <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-900 mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <h4 class="text-xl font-bold mb-2 tracking-tight">OFİS</h4>
              <p class="text-primary-500 text-sm mb-6">Merkez Ofisimiz</p>
              <span class="text-xl font-medium">İzmir, Türkiye</span>
            </div>
          </div>

          <!-- Bottom Note -->
          <div class="mt-16 text-center">
            <p class="text-primary-400 font-medium italic leading-relaxed">
              "ÜTS Entegre olarak güvenli ve kesintisiz veri aktarımı ile süreçlerinizi kolaylaştırıyoruz."
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
