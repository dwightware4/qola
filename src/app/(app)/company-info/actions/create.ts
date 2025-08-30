'use server'

import type { FormDataT } from '@/types'

import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

import { db } from '@/db'
import { company } from '@/db/schema/company'

export const createCompanyInfo = async (formData: FormDataT) => {
  const { userId } = await auth()

  const name = formData.get('companyName') as string
  const website = formData.get('companyWebsite') as string

  await db.insert(company)
    .values({
      userId: userId as string,
      name: name.trim(),
      websiteUrl: website.trim(),
    })

  redirect('/')
}
