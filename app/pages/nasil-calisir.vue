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
          Süreç Yönetimi
        </div>
        <h1 class="text-4xl lg:text-5xl font-display font-black text-white mb-6 tracking-tight leading-tight">
          Nasıl <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600 italic">Çalışıyoruz?</span>
        </h1>
        <p class="text-base text-primary-200 font-medium leading-relaxed max-w-2xl mx-auto">
          İş süreçlerinizi analiz ediyor, size en uygun teknolojik çözümü tasarlıyor ve kurulumdan desteğe her aşamada yanınızda oluyoruz.
        </p>
      </div>
    </section>

    <!-- Steps Section -->
    <section class="py-24 bg-white relative">
      <div class="container mx-auto px-8 md:px-16 lg:px-24 xl:px-40">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Step 1 -->
          <div class="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-accent-100 transition-all duration-500" v-motion="{ initial: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 100 } } }">
            <div class="w-14 h-14 rounded-2xl bg-primary-900 text-white flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-primary-900/20 group-hover:bg-accent-600 transition-colors">01</div>
            <h3 class="text-xl font-bold text-primary-900 mb-4 uppercase tracking-tight">FİRMA VE ÜRÜN KAYDI</h3>
            <p class="text-sm text-primary-600 font-medium leading-relaxed">
              İlk adım olarak, T.C. Sağlık Bakanlığı sistemleri üzerinden firmanızın ve ürünlerinizin resmi kayıt işlemlerini doğru ve eksiksiz olarak tamamlıyoruz.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-accent-100 transition-all duration-500" v-motion="{ initial: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 200 } } }">
            <div class="w-14 h-14 rounded-2xl bg-primary-900 text-white flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-primary-900/20 group-hover:bg-accent-600 transition-colors">02</div>
            <h3 class="text-xl font-bold text-primary-900 mb-4 uppercase tracking-tight">GÜVENLİ TOKEN TEMİNİ</h3>
            <p class="text-sm text-primary-600 font-medium leading-relaxed">
              Resmi <span class="text-accent-600 font-semibold">uts.saglik.gov.tr</span> portalına erişerek firmanız adına güvenle işlem yapabilmek için gereken özel sistem token (jeton) kodunu entegre ediyoruz.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-accent-100 transition-all duration-500" v-motion="{ initial: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 300 } } }">
            <div class="w-14 h-14 rounded-2xl bg-primary-900 text-white flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-primary-900/20 group-hover:bg-accent-600 transition-colors">03</div>
            <h3 class="text-xl font-bold text-primary-900 mb-4 uppercase tracking-tight">ERP ENTEGRASYONU</h3>
            <p class="text-sm text-primary-600 font-medium leading-relaxed">
              Ticari muhasebe ve ERP sisteminizle bağlantıyı sağlar sağlamaz, ürün hareket ve bildirim süreçlerinizi tek merkezden, otonom olarak yönetmeye başlıyorsunuz.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Certification Banner -->
    <section class="py-20 bg-primary-50">
      <div class="container mx-auto px-8 md:px-16 lg:px-24 xl:px-40 text-center">
        <h2 class="text-2xl font-display font-black text-primary-900 mb-12 uppercase">ISO SERTİFİKALI GÜVENİLİR ÇÖZÜM ORTAĞINIZ</h2>
        <div class="flex flex-wrap justify-center gap-6">
          <div class="px-6 py-4 bg-white rounded-2xl shadow-sm border border-primary-100 flex items-center gap-3">
            <div class="w-2 h-2 rounded-full bg-accent-500"></div>
            <span class="text-xs font-bold text-primary-800 uppercase tracking-widest">ISO/IEC 20000-1:2018</span>
          </div>
          <div class="px-6 py-4 bg-white rounded-2xl shadow-sm border border-primary-100 flex items-center gap-3">
            <div class="w-2 h-2 rounded-full bg-accent-500"></div>
            <span class="text-xs font-bold text-primary-800 uppercase tracking-widest">ISO/IEC 27701:2017</span>
          </div>
          <div class="px-6 py-4 bg-white rounded-2xl shadow-sm border border-primary-100 flex items-center gap-3">
            <div class="w-2 h-2 rounded-full bg-accent-500"></div>
            <span class="text-xs font-bold text-primary-800 uppercase tracking-widest">ISO/IEC 27001:2017</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
