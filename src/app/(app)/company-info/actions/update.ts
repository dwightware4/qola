'use server'

import type { FormDataT } from '@/types'

import { auth } from '@clerk/nextjs/server'

export const updateCompanyInfo = async (formData: FormDataT) => {
  const { userId } = await auth()

  const name = formData.get('companyName') as string
  const website = formData.get('companyWebsite') as string

  /* eslint-disable-next-line no-console */
  console.log({ userId, name, website })

  // Revalidate cache
  // TODO
}
