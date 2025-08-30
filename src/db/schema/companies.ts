import { integer, pgTable, text, varchar } from 'drizzle-orm/pg-core'

import { timestamps } from './utils'

export const companies = pgTable('companies', {
  id: integer().primaryKey().generatedAlwaysAsIdentity({ startWith: 1000 }),
  name: varchar({ length: 255 }).notNull(),
  website: varchar({ length: 255 }).notNull().unique(),
  user_id: text().notNull().unique(),
  ...timestamps,
})
