<template>
  <div>
    <!-- HERO SECTION -->
    <section class="relative min-h-[calc(100vh-80px)] flex items-center pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      <!-- Background Shapes -->
      <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-accent-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div class="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-primary-50 rounded-full blur-3xl opacity-50 -z-10"></div>

      <!-- Floating Tech Elements -->
      <div class="absolute top-1/4 left-10 w-12 h-12 bg-white/40 backdrop-blur-sm rounded-xl border border-primary-100 flex items-center justify-center animate-bounce -z-10 shadow-sm" style="animation-duration: 4s">
        <svg class="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </div>
      <div class="absolute top-40 right-20 w-16 h-16 bg-white/40 backdrop-blur-sm rounded-full border border-primary-100 flex items-center justify-center animate-pulse -z-10 shadow-sm" style="animation-duration: 6s">
        <svg class="w-8 h-8 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
      </div>

      <div class="container mx-auto px-8 md:px-16 lg:px-24 xl:px-40">
        <div class="flex flex-col lg:flex-row items-center gap-10">
          <div class="flex-1 text-center lg:text-left" v-motion="{ initial: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 800 } } }">
            <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-[10px] font-bold uppercase tracking-widest mb-6 border border-accent-200">
              <span class="relative flex h-2 w-2 mr-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-accent-600"></span>
              </span>
              Yeni Nesil Entegrasyon Çözümü
            </div>
            <h1 class="text-5xl lg:text-7xl font-display font-black text-primary-900 leading-[1.05] mb-6">
              ÜTS Süreçlerinizi <br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 via-primary-900 to-accent-800 italic animate-gradient-x ">Tek Tıkla</span> Yönetin
            </h1>
            <p class="text-xl text-primary-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              ÜTS Entegre güvencesiyle Firmaların Sağlık Bakanlığı Ürün Takip Sistemi (ÜTS) ve e-Fatura entegrasyonu için geliştirilmiş uçtan uca B2B çözümü.
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <button class="group w-full sm:w-auto px-10 py-4 bg-accent-600 hover:bg-accent-700 text-white rounded-2xl font-black text-lg shadow-2xl shadow-accent-600/30 transition-all hover:-translate-y-2 relative overflow-hidden">
                <span class="relative z-10 transition-transform group-hover:scale-110 inline-block">Ücretsiz Deneyin</span>
                <div class="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12"></div>
              </button>
              <button class="group w-full sm:w-auto px-10 py-4 border-2 border-primary-100 hover:border-accent-600 text-primary-800 hover:text-accent-600 rounded-2xl font-black text-lg transition-all hover:bg-accent-50/50 flex items-center justify-center gap-2">
                <span>Daha Fazla Bilgi</span>
                <svg class="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>

          <div class="flex-1 relative" v-motion="{ initial: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 1000, delay: 200 } } }">
            <div class="relative bg-white rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(15,23,42,0.15)] border border-primary-100 overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-700">
              <div class="bg-primary-900 px-4 py-3 flex items-center space-x-2">
                <div class="flex space-x-1.5">
                  <div class="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div class="flex-1 text-center">
                  <span class="text-[10px] text-primary-400 font-bold tracking-widest uppercase">APP.UTSENTEGRE.COM</span>
                </div>
              </div>
              <div class="p-6 bg-primary-50">
                <!-- Abstract UI Graphics -->
                <div class="grid grid-cols-3 gap-4 mb-6">
                  <div class="h-24 bg-white rounded-xl border border-primary-100 p-4 shadow-sm">
                    <div class="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center mb-2">
                      <div class="w-4 h-4 bg-indigo-500 rounded-sm"></div>
                    </div>
                    <div class="h-2 w-12 bg-primary-100 rounded mb-1"></div>
                    <div class="h-3 w-8 bg-primary-200 rounded"></div>
                  </div>
                  <div class="h-24 bg-white rounded-xl border border-primary-100 p-4 shadow-sm">
                    <div class="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center mb-2">
                      <div class="w-4 h-4 bg-teal-500 rounded-sm"></div>
                    </div>
                    <div class="h-2 w-12 bg-primary-100 rounded mb-1"></div>
                    <div class="h-3 w-8 bg-primary-200 rounded"></div>
                  </div>
                  <div class="h-24 bg-white rounded-xl border border-primary-100 p-4 shadow-sm">
                    <div class="w-8 h-8 rounded-lg bg-accent-50 flex items-center justify-center mb-2">
                      <div class="w-4 h-4 bg-accent-500 rounded-sm"></div>
                    </div>
                    <div class="h-2 w-12 bg-primary-100 rounded mb-1"></div>
                    <div class="h-3 w-8 bg-primary-200 rounded"></div>
                  </div>
                </div>
                <div class="h-48 bg-white rounded-2xl border border-primary-100 p-6 shadow-sm">
                  <div class="flex justify-between items-center mb-6">
                    <div class="h-4 w-32 bg-primary-100 rounded"></div>
                    <div class="h-8 w-24 bg-primary-900 rounded-lg"></div>
                  </div>
                  <div class="space-y-4">
                    <div class="flex space-x-4">
                      <div class="w-12 h-12 rounded-full bg-primary-50"></div>
                      <div class="flex-1 space-y-2 py-1">
                        <div class="h-2 bg-primary-100 rounded w-3/4"></div>
                        <div class="h-2 bg-primary-50 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div class="flex space-x-4">
                      <div class="w-12 h-12 rounded-full bg-primary-50"></div>
                      <div class="flex-1 space-y-2 py-1">
                        <div class="h-2 bg-primary-100 rounded w-3/4"></div>
                        <div class="h-2 bg-primary-50 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Decorative badge -->
            <div class="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl border border-primary-100 flex items-center space-x-3 hidden sm:flex">
              <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              </div>
              <div>
                <div class="text-[10px] text-primary-400 font-bold uppercase tracking-wider">DURUM</div>
                <div class="text-sm font-bold text-primary-900">Entegrasyon Yayında</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURES OVERVIEW (REFINED) -->
    <section id="features" class="py-24 bg-primary-950 text-white relative overflow-hidden">
      <!-- Decorative element -->
      <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-950 blur-[120px] rounded-full opacity-40"></div>
      <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-600 blur-[100px] rounded-full opacity-20 animate-pulse"></div>
      
      <div class="container mx-auto px-8 md:px-16 lg:px-24 xl:px-40 relative z-10">
        <div class="text-center max-w-2xl mx-auto mb-16" v-motion="{ initial: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 800 } } }">
          <h2 class="text-accent-500 font-bold tracking-[0.2em] uppercase text-[10px] mb-4">ÜTS ENTEGRE AVANTAJLARI</h2>
          <h3 class="text-3xl lg:text-4xl font-display font-black leading-tight">İşinizi Kolaylaştıracak Tüm Özellikler Tek Bir Platformda</h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="group p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-500/50 transition-all duration-500 flex flex-col items-start" v-motion="{ initial: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 500, delay: 100 } } }">
            <div class="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-500 mb-6 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-500">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
            </div>
            <h4 class="text-lg font-bold mb-3">Tam Kapsamlı ERP Uyumu</h4>
            <p class="text-sm text-primary-300 leading-relaxed group-hover:text-white transition-colors">Üretim, ithalat, ihracat ve verme gibi süreçlerinizi kullandığınız tüm ERP/Muhasebe sistemleri ile senkronize edebilirsiniz.</p>
          </div>

          <div class="group p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-500/50 transition-all duration-500 flex flex-col items-start" v-motion="{ initial: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 500, delay: 200 } } }">
            <div class="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-500 mb-6 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-500">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h4 class="text-lg font-bold mb-3">Zaman Kazandıran Hız</h4>
            <p class="text-sm text-primary-300 leading-relaxed group-hover:text-white transition-colors">Süreçlerinizi yavaşlatan manuel işlemlerden kurtulun ve tüm sisteminizi maksimum otomasyon verimliliğiyle çalıştırın.</p>
          </div>

          <div class="group p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-500/50 transition-all duration-500 flex flex-col items-start" v-motion="{ initial: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 500, delay: 300 } } }">
            <div class="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-500 mb-6 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-500">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            </div>
            <h4 class="text-lg font-bold mb-3">Excel İçe Aktarım</h4>
            <p class="text-sm text-primary-300 leading-relaxed group-hover:text-white transition-colors">Verilerinizi toplu bildirim yapmak için Excel ile hızlıca içeri aktarabilir, analiz ve raporlarınızı dışarı alabilirsiniz.</p>
          </div>

          <div class="group p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-500/50 transition-all duration-500 flex flex-col items-start" v-motion="{ initial: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 500, delay: 400 } } }">
            <div class="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-500 mb-6 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-500">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            </div>
            <h4 class="text-lg font-bold mb-3">Depo ve Envanter</h4>
            <p class="text-sm text-primary-300 leading-relaxed group-hover:text-white transition-colors">Birden çok deponuzu tanımlayabilir, devir, stok ve genel envanter işlemlerini zahmetsizce koordine edebilirsiniz.</p>
          </div>
        </div>
        
        <div class="mt-16 text-center">
          <NuxtLink to="/ozellikler" class="inline-flex items-center space-x-2 text-accent-500 font-bold hover:text-accent-400 transition-colors">
            <span>Tüm Özellikleri Keşfedin</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- NOTIFICATION PROCESSES (NEW SECTION) -->
    <section class="py-24 bg-white relative overflow-hidden">
      <!-- Animated Background Dots -->
      <div class="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>
      
      <div class="container mx-auto px-8 md:px-16 lg:px-24 xl:px-40 relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-16 mb-20">
          <div class="lg:w-1/2" v-motion="{ initial: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 800 } } }">
            <h2 class="text-accent-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-4">UÇTAN UCA YÖNETİM</h2>
            <h3 class="text-4xl lg:text-5xl font-display font-black text-primary-900 leading-[1.1] mb-6">
              Tüm IT & Sağlık Süreçlerinizi <br />
              <span class="text-accent-600">Tek Elden</span> Yönetin
            </h3>
            <p class="text-lg text-primary-600 leading-relaxed font-medium mb-8">
              Karmaşık ÜTS, Agregasyon, Ecza Deposu ve e-Fatura süreçlerini ÜTS Entegre ile basitleştirdik. İhtiyaç analizi, çözüm tasarımı ve kurulum & eğitim ile baştan sona yanınızdayız.
            </p>
            <div class="space-y-4">
              <div class="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 border border-primary-100 hover:shadow-lg transition-all group">
                <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-accent-600 group-hover:text-white transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <span class="font-bold text-primary-900">Anlık Stok Senkronizasyonu</span>
              </div>
              <div class="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 border border-primary-100 hover:shadow-lg transition-all group">
                <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-accent-600 group-hover:text-white transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <span class="font-bold text-primary-900">Mevzuat Uyumluluk Kontrolü</span>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 relative" v-motion="{ initial: { opacity: 0, scale: 0.9, rotate: -2 }, visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1000 } } }">
            <div class="grid grid-cols-2 gap-6">
              <div class="p-8 bg-white rounded-3xl shadow-xl border border-primary-50 transform hover:-translate-y-2 transition-all duration-300">
                <div class="text-accent-600 font-black text-3xl mb-2">01</div>
                <h4 class="font-bold text-primary-900 mb-2">Tek Tıkla Kabul</h4>
                <p class="text-xs text-primary-500 font-medium">Ticari uygulamanızdan aldığınız faturaları tek bir tuşla anında ÜTS'ye aktarın.</p>
              </div>
              <div class="p-8 bg-primary-900 text-white rounded-3xl shadow-xl transform translate-y-8 hover:-translate-y-2 transition-all duration-300">
                <div class="text-accent-500 font-black text-3xl mb-2">02</div>
                <h4 class="font-bold mb-2 text-white">İhale & Teslimat</h4>
                <p class="text-xs text-primary-400 font-medium">Katıldığınız ihaleleri, sevk edilen ve açıkta kalan miktarları tek sistemden yönetin.</p>
              </div>
              <div class="p-8 bg-accent-600 text-white rounded-3xl shadow-xl transform -translate-y-8 hover:-translate-y-2 transition-all duration-300">
                <div class="text-white font-black text-3xl mb-2">03</div>
                <h4 class="font-bold mb-2 text-white">Karekod & Barkod</h4>
                <p class="text-xs text-white/80 font-medium">Bakanlık yönergelerine ve UDI standartlarına uygun özel karekodlar tasarlayıp basın.</p>
              </div>
              <div class="p-8 bg-white rounded-3xl shadow-xl border border-primary-50 transform hover:-translate-y-2 transition-all duration-300">
                <div class="text-accent-600 font-black text-3xl mb-2">04</div>
                <h4 class="font-bold text-primary-900 mb-2">Hızlı Sorgulama</h4>
                <p class="text-xs text-primary-500 font-medium">Ürün kartı, cihaz durumları ve eksik/bekleyen tüm bildirimlerinizi anında sorgulayın.</p>
              </div>
            </div>
            <!-- Decorative circle -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent-600/10 rounded-full blur-2xl -z-10 animate-pulse"></div>
          </div>
        </div>

        <!-- Counter Section -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-t border-primary-50">
          <div class="text-center" v-motion="{ initial: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 600, delay: 100 } } }">
            <div class="text-4xl font-display font-black text-primary-900 mb-1 leading-none">24/7</div>
            <div class="text-[10px] font-bold text-primary-400 uppercase tracking-widest">KESİNTİSİZ DESTEK</div>
          </div>
          <div class="text-center" v-motion="{ initial: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 600, delay: 200 } } }">
            <div class="text-4xl font-display font-black text-accent-600 mb-1 leading-none">%99.9</div>
            <div class="text-[10px] font-bold text-primary-400 uppercase tracking-widest">ÇALIŞMA SÜRESİ</div>
          </div>
          <div class="text-center" v-motion="{ initial: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 600, delay: 300 } } }">
            <div class="text-4xl font-display font-black text-primary-900 mb-1 leading-none">0.5sn</div>
            <div class="text-[10px] font-bold text-primary-400 uppercase tracking-widest">ORTALAMA YANIT</div>
          </div>
          <div class="text-center" v-motion="{ initial: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 600, delay: 400 } } }">
            <div class="text-4xl font-display font-black text-accent-600 mb-1 leading-none">Full</div>
            <div class="text-[10px] font-bold text-primary-400 uppercase tracking-widest">API ENTEGRASYONU</div>
          </div>
        </div>
      </div>
    </section>

  <!-- DATA SECURITY SECTION (EXTENDING THE PAGE) -->
    <section class="py-32 bg-primary-50 relative overflow-hidden">
      <div class="container mx-auto px-8 md:px-16 lg:px-24 xl:px-40">
        <div class="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div class="lg:w-1/2" v-motion="{ initial: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 800 } } }">
            <h2 class="text-accent-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-4">DANIŞMANLIK VE UYUMLULUK</h2>
            <h3 class="text-4xl lg:text-5xl font-display font-black text-primary-900 leading-[1.1] mb-6">
                Mevzuata Uygun <br />
                <span class="text-primary-900 italic underline decoration-accent-600 underline-offset-8">Profesyonel</span> Çözüm
            </h3>
            <p class="text-lg text-primary-600 font-medium mb-10 leading-relaxed">
                Sağlık Bakanlığı regülasyonlarına tam uyumlu altyapımız ve uzman destek ekibimizle süreçlerinizi risksiz yönetin.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div class="flex flex-col gap-4 p-6 bg-white rounded-3xl shadow-sm border border-primary-100 hover:shadow-xl transition-all duration-500 group" v-motion="{ initial: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { delay: 100 } } }">
                   <div class="w-14 h-14 rounded-2xl bg-accent-50 flex items-center justify-center text-accent-600 group-hover:bg-accent-600 group-hover:text-white transition-colors duration-500">
                      <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                   </div>
                   <h5 class="font-bold text-primary-900 text-lg">Mevzuat Yönetimi</h5>
                   <p class="text-sm text-primary-500 font-medium leading-relaxed">Tüm bildirim süreçleriniz güncel yasal mevzuatlara göre otomatik denetlenir.</p>
                </div>
                <div class="flex flex-col gap-4 p-6 bg-white rounded-3xl shadow-sm border border-primary-100 hover:shadow-xl transition-all duration-500 group" v-motion="{ initial: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { delay: 200 } } }">
                   <div class="w-14 h-14 rounded-2xl bg-accent-50 flex items-center justify-center text-accent-600 group-hover:bg-accent-600 group-hover:text-white transition-colors duration-500">
                      <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                   </div>
                   <h5 class="font-bold text-primary-900 text-lg">Süreç Danışmanlığı</h5>
                   <p class="text-sm text-primary-500 font-medium leading-relaxed">Kurulumdan sonra da uzman kadromuzla yanınızda olmaya devam ediyoruz.</p>
                </div>
            </div>
          </div>
          <div class="lg:w-1/2" v-motion="{ initial: { opacity: 0, x: -50, scale: 0.95 }, visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1000 } } }">
             <div class="relative bg-white rounded-[4rem] p-6 shadow-2xl border border-primary-100 overflow-hidden group">
                <div class="bg-primary-900 rounded-[3.5rem] p-24 flex flex-col items-center justify-center min-h-[500px] relative overflow-hidden">
                   <!-- Animated background pulse -->
                   <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-600/20 to-transparent"></div>
                   
                   <div class="relative w-40 h-40 bg-white shadow-[0_0_50px_rgba(255,255,255,0.2)] rounded-full flex items-center justify-center text-accent-600 animate-pulse border-8 border-white/10">
                      <svg class="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                   </div>
                   <div class="mt-8 text-center relative">
                      <p class="text-white font-black uppercase tracking-[0.3em] text-sm mb-2">MEVZUAT UYUMLULUK MODÜLÜ</p>
                      <div class="flex items-center justify-center gap-1">
                         <div class="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                         <span class="text-green-400 font-bold text-xs uppercase">SİSTEM GÜNCEL</span>
                      </div>
                   </div>
                </div>
                <!-- Floating geometric elements -->
                <div class="absolute top-10 right-10 w-4 h-40 bg-accent-600/20 rounded-full blur-xl animate-bounce" style="animation-duration: 4s"></div>
                <div class="absolute bottom-10 left-10 w-40 h-4 bg-accent-600/20 rounded-full blur-xl animate-bounce" style="animation-duration: 3s"></div>
             </div>
          </div>
        </div>
      </div>
    </section>


    <!-- PARTNERS SECTION -->
    <section class="py-16 bg-white border-y border-primary-50">
      <div class="container mx-auto px-8 md:px-16 lg:px-24 xl:px-40">
        <p class="text-center text-xs font-bold text-primary-400 uppercase tracking-[0.3em] mb-12">GÜVEN VEREN İŞ ORTAKLARIMIZ</p>
        <div class="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
           <!-- Placeholder Logos -->
           <div class="h-8 w-32 bg-primary-200 rounded-md"></div>
           <div class="h-8 w-24 bg-primary-200 rounded-md"></div>
           <div class="h-8 w-40 bg-primary-200 rounded-md"></div>
           <div class="h-8 w-28 bg-primary-200 rounded-md"></div>
           <div class="h-8 w-36 bg-primary-200 rounded-md"></div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS SECTION -->
    <section class="py-24 bg-primary-50">
      <div class="container mx-auto px-8 md:px-16 lg:px-24 xl:px-40">
        <div class="text-center max-w-2xl mx-auto mb-20">
          <h2 class="text-3xl lg:text-4xl font-display font-black text-primary-900 mb-4 px-2">Kullanıcılarımız Ne Diyor?</h2>
          <p class="text-primary-500 font-medium">İzmir'den İstanbul'a, yüzlerce medikal firma ÜTS Entegre ile büyüyor.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div class="bg-white p-8 rounded-[2rem] shadow-sm border border-primary-100 flex flex-col justify-between" v-motion="{ initial: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 600, delay: 100 } } }">
              <p class="text-primary-600 font-medium leading-relaxed italic mb-8">"Manuel bildirimlerden kurtulmak şirketimiz için büyük bir devrim oldu. Hata payımız sıfıra indi."</p>
              <div class="flex items-center space-x-4">
                 <div class="w-10 h-10 rounded-full bg-accent-100"></div>
                 <div>
                    <h5 class="font-bold text-sm text-primary-900">Merve Sağlam</h5>
                    <p class="text-[10px] text-primary-400 font-bold uppercase tracking-widest">MEDİKAL A.Ş.</p>
                 </div>
              </div>
           </div>
           
           <div class="bg-white p-8 rounded-[2rem] shadow-sm border border-primary-100 flex flex-col justify-between" v-motion="{ initial: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 600, delay: 200 } } }">
              <p class="text-primary-600 font-medium leading-relaxed italic mb-8">"ERP entegrasyonu sayesinde stoklarımızla ÜTS bildirimlerimiz saniyeler içinde senkronize oluyor. İnanılmaz."</p>
              <div class="flex items-center space-x-4">
                 <div class="w-10 h-10 rounded-full bg-accent-100"></div>
                 <div>
                    <h5 class="font-bold text-sm text-primary-900">Burak Öztürk</h5>
                    <p class="text-[10px] text-primary-400 font-bold uppercase tracking-widest">GLOBAL MED CENTER</p>
                 </div>
              </div>
           </div>

           <div class="bg-white p-8 rounded-[2rem] shadow-sm border border-primary-100 flex flex-col justify-between" v-motion="{ initial: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 600, delay: 300 } } }">
              <p class="text-primary-600 font-medium leading-relaxed italic mb-8">"Teknik destek ekibi her sorumuzda anında yanımızda. Güvenilir bir partner arıyorsanız doğru yerdesiniz."</p>
              <div class="flex items-center space-x-4">
                 <div class="w-10 h-10 rounded-full bg-accent-100"></div>
                 <div>
                    <h5 class="font-bold text-sm text-primary-900">Selin Yıldız</h5>
                    <p class="text-[10px] text-primary-400 font-bold uppercase tracking-widest">YILDIZ DENTAL</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>



    <!-- CTA BANNER (MODERNIZED) -->
    <section class="py-32 relative overflow-hidden">
      <!-- Animated Background Layers -->
      <div class="absolute inset-0 bg-primary-950"></div>
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-600/20 rounded-full blur-[150px] animate-pulse"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-600/10 rounded-full blur-[100px] animate-pulse" style="animation-delay: 2s"></div>
      
      <div class="container mx-auto px-8 md:px-16 lg:px-24 xl:px-40 relative z-10">
        <div class="relative group" v-motion="{ initial: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 800 } } }">
           <!-- Glassmorphism Container -->
           <div class="bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-8 lg:p-24 text-center relative overflow-hidden">
              <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-600/50 to-transparent"></div>
              
              <h3 class="text-5xl lg:text-6xl font-display font-black text-white mb-8 leading-tight tracking-tight">
                Dijital Dönüşümü <br />
                <span class="text-accent-500 italic">Bugün Başlatın</span>
              </h3>
              
              <p class="text-xl text-primary-300 max-w-2xl mx-auto mb-12 font-medium">
                 ÜTS Entegre ile karmaşık süreçlere veda edin. Hemen şimdi ücretsiz demo talep edin ve farkı görün.
              </p>
              
              <div class="flex flex-col sm:flex-row justify-center items-center gap-6">
                 <button class="px-12 py-5 bg-accent-600 hover:bg-white hover:text-accent-600 text-white rounded-2xl font-black text-xl shadow-2xl shadow-accent-600/20 transition-all duration-500 hover:-translate-y-2 flex items-center gap-3">
                    <span>Hemen Başla</span>
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                 </button>
                 <div class="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <div class="flex -space-x-3">
                       <div class="w-10 h-10 rounded-full border-2 border-primary-900 bg-slate-300"></div>
                       <div class="w-10 h-10 rounded-full border-2 border-primary-900 bg-slate-400"></div>
                       <div class="w-10 h-10 rounded-full border-2 border-primary-900 bg-slate-500"></div>
                    </div>
                    <div class="text-left">
                       <div class="text-xs font-black text-white uppercase tracking-widest">500+ Firma</div>
                       <div class="text-[10px] text-primary-400 font-bold uppercase tracking-wider">BİZE GÜVENİYOR</div>
                    </div>
                 </div>
              </div>
              
              <!-- Floating Decoration -->
              <div class="absolute -top-10 -right-10 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl group-hover:bg-accent-500/20 transition-colors duration-700"></div>
              <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-colors duration-700"></div>
           </div>
        </div>
      </div>
    </section>

  </div>
</template>
