import type { RequestT } from '@/types'

import { parseWebhookRequest } from '../utils'

export const POST = async (request: RequestT) => {
  const { message, error } = await parseWebhookRequest(request)

  if (error || !message?.type) {
    return new Response('Bad Request', { status: 400 })
  }

  const email = message.data.email_addresses?.[0]?.email_address

  switch (message.type) {
    case 'user.created':
      await fetch(process.env.SLACK_USERLAND_WEBHOOK_URL!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          blocks: [
            {
              type: 'header',
              text: { type: 'plain_text', text: '🎉  New User Created! 🎉', emoji: true },
            },

            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: `*Email:* ${email}`,
              },
            },
          ],
          text: `New user signup: ${email}`,
        }),
      })

      return new Response('Ok', { status: 200 })

    case 'user.deleted':
      await fetch(process.env.SLACK_USERLAND_WEBHOOK_URL!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          blocks: [
            {
              type: 'header',
              text: { type: 'plain_text', text: '💀 User Account Deleted 💀', emoji: true },
            },
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: `*User ID:* ${message.data.id}`,
              },
            },
          ],
          text: `User account deleted: ${message.data.id}`,
        }),
      })

      return new Response('Ok', { status: 200 })

    default:
      return new Response('Bad Request', { status: 400 })
  }
}
