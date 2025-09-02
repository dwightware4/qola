'use server'

import { auth } from '@clerk/nextjs/server'

import { eq } from 'drizzle-orm/sql/expressions/conditions'

import { db } from '@/db'
import { company } from '@/db/schema/company'

export const initiateMarketResearch = async () => {
  const { userId } = await auth()

  const [row] = await db.select().from(company).where(eq(company.userId, userId as string))

  console.log(row)
}
