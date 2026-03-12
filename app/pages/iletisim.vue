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

    <!-- Contact Section (Moved from index.vue) -->
    <section class="py-24 bg-white relative overflow-hidden">
      <div class="container mx-auto px-8 md:px-16 lg:px-24 xl:px-40 relative z-10">
        <div class="bg-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(15,23,42,0.08)] border border-primary-100 overflow-hidden max-w-6xl mx-auto">
          <div class="flex flex-col lg:flex-row">
            <!-- Form Area -->
            <div class="flex-1 p-8 lg:p-16">
              <h3 class="text-3xl font-display font-black text-primary-900 mb-4">Mesaj Gönderin</h3>
              <p class="text-primary-500 font-medium mb-10">Formu doldurun, uzman ekibimiz en kısa sürede size dönüş yapsın.</p>
              
              <form class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="text-xs font-bold text-primary-400 uppercase tracking-wider">AD SOYAD</label>
                    <input type="text" placeholder="Örn: Ahmet Yılmaz" class="w-full px-5 py-3.5 bg-primary-50 border border-primary-100 rounded-xl focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all text-sm font-medium" />
                  </div>
                  <div class="space-y-2">
                    <label class="text-xs font-bold text-primary-400 uppercase tracking-wider">E-POSTA</label>
                    <input type="email" placeholder="ahmet@sirketiniz.com" class="w-full px-5 py-3.5 bg-primary-50 border border-primary-100 rounded-xl focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all text-sm font-medium" />
                  </div>
                </div>
                <div class="space-y-2">
                  <label class="text-xs font-bold text-primary-400 uppercase tracking-wider">MESAJINIZ</label>
                  <textarea rows="4" placeholder="Size nasıl yardımcı olabiliriz?" class="w-full px-5 py-3.5 bg-primary-50 border border-primary-100 rounded-xl focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all text-sm font-medium resize-none"></textarea>
                </div>
                <button type="submit" class="w-full py-4 bg-primary-900 hover:bg-black text-white rounded-xl font-bold text-base shadow-xl transition-all hover:-translate-y-1">
                  Mesajı Gönder
                </button>
              </form>
            </div>

            <!-- Sidebar Info -->
            <div class="lg:w-1/3 bg-primary-900 p-8 lg:p-16 text-white flex flex-col justify-between">
              <div>
                <h4 class="text-xl font-bold mb-8">İletişim Bilgileri</h4>
                <div class="space-y-8">
                  <div class="flex items-start space-x-4">
                    <div class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-accent-500 shrink-0">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"></path></svg>
                    </div>
                    <div>
                      <div class="text-sm font-bold text-primary-300 mb-1">Telefon</div>
                      <div class="text-base font-medium">+90 224 000 00 00</div>
                    </div>
                  </div>
                  <div class="flex items-start space-x-4">
                    <div class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-accent-500 shrink-0">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <div>
                      <div class="text-sm font-bold text-primary-300 mb-1">E-Posta</div>
                      <div class="text-base font-medium">info@utsentegre.com</div>
                    </div>
                  </div>
                  <div class="flex items-start space-x-4">
                    <div class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-accent-500 shrink-0">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <div>
                      <div class="text-sm font-bold text-primary-300 mb-1">Ofis</div>
                      <div class="text-base font-medium">İzmir</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-12 p-6 bg-white/5 rounded-2xl border border-white/5">
                <p class="text-xs text-primary-400 font-medium leading-relaxed italic">
                  "ÜTS Entegre olarak Sağlık Bakanlığı standartlarında güvenli ve kesintisiz veri aktarımı sağlıyoruz."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
