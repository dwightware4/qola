import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import { migrate } from 'drizzle-orm/neon-http/migrator'

const sql = neon(process.env.DB_URL!)

const runMigrate = async () => {
  if (!process.env.DB_URL) {
    throw new Error('DB_URL is not defined')
  }

  const db = drizzle(sql)
  // eslint-disable-next-line no-console
  console.log('⏳ Running migrations...')

  const start = Date.now()
  await migrate(db, { migrationsFolder: 'src/db/migrations' })
  const end = Date.now()

  // eslint-disable-next-line no-console
  console.log('✅ Migrations completed in', end - start, 'ms')
  process.exit(0)
}

runMigrate().catch((err) => {
  console.error('❌ Migration failed')
  console.error(err)
  process.exit(1)
})
