'use server'

import type { FormDataT } from '@/types'

export const updateCompanyInfo = async (formData: FormDataT) => {
  const name = formData.get('companyName')
  const website = formData.get('companyWebsite')

  // Update data
  console.log('name', name)
  console.log('website', website)

  // Revalidate cache
  // TODO
}
