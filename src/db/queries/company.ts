import { eq } from 'drizzle-orm'

import { db } from '@/db'
import { company } from '@/db/schema/company'

export const getCompanyByUserId = async (userId: string) => {
  const [row] = await db
    .select()
    .from(company)
    .where(eq(company.userId, userId))

  return row
}
