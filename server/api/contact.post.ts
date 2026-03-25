export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    const data = await $fetch('https://www.utsb.vortexbilisim.com:8086/api/Tenant/auth/contact-form', {
      method: 'POST',
      body: body
    })
    return data
  } catch (error: any) {
    throw createError({
      statusCode: error.response?.status || 500,
      statusMessage: error.response?.statusText || 'Internal Server Error',
      data: error.data
    })
  }
})
