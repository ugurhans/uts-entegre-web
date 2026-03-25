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
          Sorularınız, demo talepleriniz veya teklif almak için ekibimizle iletişime geçebilirsiniz.
        </p>
      </div>
    </section>
    <!-- Contact Section -->
    <section class="py-24 bg-white relative overflow-hidden">
      <div class="container mx-auto px-8 md:px-16 lg:px-24 xl:px-40 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <!-- Left Side: Form -->
          <div class="lg:col-span-8 flex">
            <div class="bg-slate-50 rounded-[2.5rem] p-10 lg:p-12 border border-primary-100 shadow-sm transition-all relative overflow-hidden group w-full flex flex-col justify-between">
              <div class="absolute top-0 right-0 w-32 h-32 bg-accent-500/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              
              <h3 class="text-2xl font-black text-primary-950 mb-8 tracking-tight">Size <span class="text-accent-600 italic">Geri Dönelim</span></h3>
              
              <form @submit.prevent="handleSubmit" class="space-y-6 relative z-10 flex-grow flex flex-col">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label for="fullname" class="text-xs font-black text-primary-900 uppercase tracking-widest ml-4">AD SOYAD</label>
                    <input 
                      v-model="form.fullname" 
                      @blur="validateField('fullname')"
                      type="text" 
                      id="fullname" 
                      placeholder="Adınız ve soyadınız" 
                      :class="errors.fullname ? 'border-red-300 ring-2 ring-red-500/10' : 'border-primary-100'"
                      class="w-full px-8 py-4 rounded-2xl bg-white border focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all font-medium text-primary-900 shadow-sm"
                    />
                    <transition enter-active-class="transition duration-150 ease-out" enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0">
                      <p v-if="errors.fullname" class="text-[11px] font-bold text-red-500 ml-4 mt-1 uppercase tracking-wider">{{ errors.fullname }}</p>
                    </transition>
                  </div>

                  <div class="space-y-2">
                    <label for="email" class="text-xs font-black text-primary-900 uppercase tracking-widest ml-4">E-POSTA</label>
                    <input 
                      v-model="form.email" 
                      @blur="validateField('email')"
                      type="email" 
                      id="email" 
                      placeholder="E-posta adresiniz" 
                      :class="errors.email ? 'border-red-300 ring-2 ring-red-500/10' : 'border-primary-100'"
                      class="w-full px-8 py-4 rounded-2xl bg-white border focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all font-medium text-primary-900 shadow-sm"
                    />
                    <transition enter-active-class="transition duration-150 ease-out" enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0">
                      <p v-if="errors.email" class="text-[11px] font-bold text-red-500 ml-4 mt-1 uppercase tracking-wider">{{ errors.email }}</p>
                    </transition>
                  </div>

                  <div class="space-y-2">
                    <label for="company" class="text-xs font-black text-primary-900 uppercase tracking-widest ml-4">İŞLETME ADI</label>
                    <input 
                      v-model="form.company" 
                      @blur="validateField('company')"
                      type="text" 
                      id="company" 
                      placeholder="Firma/İşletme adı" 
                      :class="errors.company ? 'border-red-300 ring-2 ring-red-500/10' : 'border-primary-100'"
                      class="w-full px-8 py-4 rounded-2xl bg-white border focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all font-medium text-primary-900 shadow-sm"
                    />
                    <transition enter-active-class="transition duration-150 ease-out" enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0">
                      <p v-if="errors.company" class="text-[11px] font-bold text-red-500 ml-4 mt-1 uppercase tracking-wider">{{ errors.company }}</p>
                    </transition>
                  </div>

                  <div class="space-y-2">
                    <label for="phone" class="text-xs font-black text-primary-900 uppercase tracking-widest ml-4">TELEFON NUMARASI</label>
                    <input 
                      v-model="form.phone" 
                      type="tel" 
                      id="phone" 
                      placeholder="05XX XXX XX XX" 
                      class="w-full px-8 py-4 rounded-2xl bg-white border border-primary-100 focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all font-medium text-primary-900 shadow-sm"
                    />
                  </div>
                </div>

                <div class="space-y-2 flex-grow">
                  <label for="message" class="text-xs font-black text-primary-900 uppercase tracking-widest ml-4">MESAJINIZ</label>
                  <textarea 
                    v-model="form.message" 
                    @blur="validateField('message')"
                    id="message" 
                    rows="4" 
                    placeholder="Nasıl yardımcı olabiliriz?" 
                    :class="errors.message ? 'border-red-300 ring-2 ring-red-500/10' : 'border-primary-100'"
                    class="w-full h-[calc(100%-2rem)] px-8 py-4 rounded-2xl bg-white border focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all font-medium text-primary-900 shadow-sm resize-none"
                  ></textarea>
                  <transition enter-active-class="transition duration-150 ease-out" enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0">
                    <p v-if="errors.message" class="text-[11px] font-bold text-red-500 ml-4 mt-1 uppercase tracking-wider">{{ errors.message }}</p>
                  </transition>
                </div>

                <div class="flex items-center justify-between gap-6 pt-2">
                  <button type="submit" :disabled="isSubmitting" class="flex-1 py-4.5 bg-primary-900 hover:bg-primary-950 text-white rounded-2xl font-bold text-sm shadow-xl transition-all disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center space-x-2">
                    <span v-if="isSubmitting" class="flex items-center space-x-2">
                      <svg class="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      <span>Gönderiliyor...</span>
                    </span>
                    <span v-else>Mesajı Gönder</span>
                  </button>
                </div>

              
              </form>
            </div>
          </div>

          <!-- Right Side: Info Cards -->
          <div class="lg:col-span-4 flex flex-col gap-6">
            <!-- Phone Card -->
            <div class="bg-primary-900 rounded-[2.5rem] p-10 text-white flex flex-col items-center justify-center text-center shadow-xl hover:shadow-2xl transition-all group border border-primary-800 flex-1">
              <div class="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-accent-500 mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <h4 class="text-xl font-bold mb-2 tracking-tight uppercase">Bize Ulaşın</h4>
              <p class="text-primary-300 text-sm mb-6 px-4">Her türlü soru ve destek talebi için</p>
              <a href="tel:+905319440335" class="text-xl font-semibold text-accent-500 hover:text-white transition-colors tracking-tight">+90 531 944 03 35</a>
            </div>

            <!-- Office Card -->
            <div class="bg-slate-50 rounded-[2.5rem] p-10 text-primary-900 flex flex-col items-center justify-center text-center border border-primary-100 shadow-sm hover:shadow-md transition-all group flex-1">
              <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-900 mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <h4 class="text-xl font-bold mb-2 tracking-tight uppercase">Merkez Ofis</h4>
              <span class="text-lg font-medium">İzmir</span>
            </div>
          </div>
        </div>
        <!-- Bottom Note -->
        <div class="mt-16 text-center">
          <p class="text-primary-400 font-medium italic leading-relaxed">
            "ÜTS Entegre olarak güvenli ve kesintisiz veri aktarımı ile süreçlerinizi kolaylaştırıyoruz."
          </p>
        </div>
      </div>
    </section>

    <!-- Toast Notification -->
    <Transition
      enter-active-class="transform ease-out duration-300 transition"
      enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="showToast" class="fixed top-24 right-8 z-[100] max-w-sm w-full bg-white shadow-2xl rounded-2xl overflow-hidden border border-primary-100 pointer-events-auto">
        <div class="p-4 flex items-start">
          <div class="flex-shrink-0">
            <div v-if="feedback?.success" class="h-10 w-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <div v-else-if="feedback" class="h-10 w-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </div>
          </div>
          <div class="ml-4 flex-1 pt-0.5">
            <p class="text-sm font-black text-primary-950 uppercase tracking-tight">
              {{ feedback?.success ? 'Başarılı!' : 'Hata Oluştu' }}
            </p>
            <p class="mt-1 text-sm text-primary-500 font-medium">
              {{ feedback?.message }}
            </p>
          </div>
          <div class="ml-4 flex-shrink-0 flex">
            <button @click="showToast = false" class="bg-white rounded-lg inline-flex text-primary-400 hover:text-primary-500 focus:outline-none">
              <span class="sr-only">Kapat</span>
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
        </div>
        <div class="h-1 w-full bg-primary-50">
           <div v-if="showToast" :class="feedback?.success ? 'bg-green-500' : 'bg-red-500'" class="h-full transition-all duration-[3000ms] ease-linear" :style="{ width: toastProgress + '%' }"></div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import * as yup from 'yup'

const form = reactive({
  fullname: '',
  email: '',
  company: '',
  phone: '',
  message: ''
})

const errors = reactive({
  fullname: '',
  email: '',
  company: '',
  message: ''
})

const schema = yup.object().shape({
  fullname: yup.string().required('Ad Soyad alanı zorunludur.').min(3, 'En az 3 karakter giriniz.'),
  email: yup.string().required('E-posta alanı zorunludur.').email('Geçersiz e-posta adresi.'),
  company: yup.string().required('İşletme Adı alanı zorunludur.'),
  message: yup.string().required('Mesaj alanı zorunludur.').min(10, 'Mesajınız en az 10 karakter olmalıdır.')
})

const isSubmitting = ref(false)
const feedback = ref(null)
const showToast = ref(false)
const toastProgress = ref(0)

const validateField = async (field) => {
  try {
    await schema.validateAt(field, form)
    errors[field] = ''
  } catch (err) {
    errors[field] = err.message
  }
}

const handleSubmit = async () => {
  feedback.value = null
  showToast.value = false
  
  // Clear all errors first
  Object.keys(errors).forEach(key => errors[key] = '')

  try {
    // Validate all fields
    await schema.validate(form, { abortEarly: false })
    
    // If validation passes, start submission
    isSubmitting.value = true

    // Concatenate extra fields into the message as requested
    const finalMessage = `${form.message}\n\nİşletme Adı: ${form.company}\nTelefon Numarası: ${form.phone || 'Girilmedi'}`
    
    const payload = {
      fullname: form.fullname,
      email: form.email,
      message: finalMessage
    }
    
    const data = await $fetch('/api/contact', {
      method: 'POST',
      body: payload
    })
    
    if (data.success) {
      feedback.value = { success: true, message: data.message }
      form.fullname = ''
      form.email = ''
      form.company = ''
      form.phone = ''
      form.message = ''
      
      // Show success toast
      triggerToast()
    } else {
      feedback.value = { success: false, message: data.message }
      triggerToast()
    }
  } catch (err) {
    if (err.inner) {
      // Yup validation errors
      err.inner.forEach((validationError) => {
        errors[validationError.path] = validationError.message
      })
      // Do NOT show toast for validation errors as per request
    } else {
      // Server-side or network errors
      const errorData = err.data || {}
      feedback.value = { success: false, message: errorData.message || 'Mesajınız iletilemedi, lütfen daha sonra tekrar deneyiniz.' }
      triggerToast()
    }
  } finally {
    isSubmitting.value = false
  }
}

const triggerToast = () => {
  showToast.value = true
  toastProgress.value = 100
  setTimeout(() => {
    toastProgress.value = 0
  }, 10)
  setTimeout(() => {
    showToast.value = false
  }, 5000)
}
</script>

<style scoped>
.py-4\.5 {
  padding-top: 1.125rem;
  padding-bottom: 1.125rem;
}
</style>
