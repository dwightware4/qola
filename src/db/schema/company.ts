import { pgEnum, pgTable, text, uuid } from 'drizzle-orm/pg-core'

import { timestamps } from './utils'

export const profileStatusEnum = pgEnum('profile_status', ['new', 'researching', 'ready'])

export const company = pgTable('companies', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').notNull().unique(),
  name: text('name').notNull(),
  websiteUrl: text('website_url').notNull().unique(),
  profileStatus: profileStatusEnum('profile_status').notNull().default('new'),
  ...timestamps,
})
