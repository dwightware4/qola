'use server'

import { auth } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'
import { db } from '@/db'
import { company } from '@/db/schema/company'

export const upsertCompany = async (formData: FormData) => {
  const user = await auth()
  const userId = user.userId as string

  const name = formData.get('companyName') as string
  const websiteUrl = formData.get('companyWebsite') as string

  await db.insert(company)
    .values({ userId, name, websiteUrl })
    .onConflictDoUpdate({
      target: company.userId,
      set: { name, websiteUrl, updatedAt: new Date() },
    })

  revalidatePath('/company-info')
}
