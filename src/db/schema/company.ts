import { integer, pgTable, varchar } from 'drizzle-orm/pg-core'

import { timestamps } from './utils'

export const company = pgTable('company', {
  id: integer().primaryKey().generatedAlwaysAsIdentity({ startWith: 1000 }),
  name: varchar({ length: 255 }).notNull(),
  website: varchar({ length: 255 }).notNull().unique(),
  ...timestamps,
})
