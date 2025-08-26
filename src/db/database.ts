import { neonConfig } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-serverless'
import ws from 'ws'

neonConfig.webSocketConstructor = ws

let db: ReturnType<typeof drizzle> | undefined

export const getDB = () => {
  if (!db) {
    db = drizzle({
      connection: process.env.DB_URL!,
      ws,
    })
  }

  return db
}
