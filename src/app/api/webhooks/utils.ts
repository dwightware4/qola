import type { PromiseT, RequestT } from '@/types'

import { Webhook } from 'svix'

type MessageT = {
  type: 'user.created' | 'user.deleted'
  data: any
}
type ErrorT = any
type ResponseT = { message: MessageT | null, error: ErrorT | null }

export const parseWebhookRequest = async (request: RequestT): PromiseT<ResponseT> => {
  const svixId = request.headers.get('svix-id') ?? ''
  const svixTimestamp = request.headers.get('svix-timestamp') ?? ''
  const svixSignature = request.headers.get('svix-signature') ?? ''

  const body = await request.text()

  const sivx = new Webhook(process.env.CLERK_WEBHOOK_SIGNING_SECRET!)

  let _message = null
  let _error = null

  try {
    _message = sivx.verify(body, {
      'svix-id': svixId,
      'svix-timestamp': svixTimestamp,
      'svix-signature': svixSignature,
    }) as MessageT | null
  }
  catch (err) {
    _error = err
  }

  return { message: _message, error: _error }
}
