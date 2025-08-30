'use server'

import type { FormDataT } from '@/types'

import { auth } from '@clerk/nextjs/server'
import { db } from '@/db'
import { companies } from '@/db/schema/companies'

export const updateCompanyInfo = async (formData: FormDataT) => {
  const { userId } = await auth()

  const name = formData.get('companyName') as string
  const website = formData.get('companyWebsite') as string

  await db
    .insert(companies)
    .values({ name, website, user_id: userId as string })
    .onConflictDoUpdate({
      target: companies.user_id, // column with unique constraint
      set: { name, website }, // fields to update if conflict occurs
    })

  // Revalidate cache
  // TODO
}
