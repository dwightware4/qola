'use server'

import type { FormDataT } from '@/types'

export const updateCompanyInfo = async (formData: FormDataT) => {
  const name = formData.get('companyName')
  const website = formData.get('companyWebsite')

  // Connect to neon with drizzle and setup the actual database so we can update it here
  /* eslint-disable no-console */
  console.log('name', name)
  console.log('website', website)

  // Revalidate cache
  // TODO
}
