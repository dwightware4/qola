'use server'

import { openai } from '@ai-sdk/openai'
import { generateText } from 'ai'

export const create = async (formData: any) => {
  const name = formData.get('name')
  const email = formData.get('email')
  const website = formData.get('website')

  console.log('----------------------------')
  console.log('Starting...')
  console.log('----------------------------')

  const { text } = await generateText({
    model: openai('gpt-5-nano'),
    system:
    'You are a professional writer. '
    + 'You write simple, clear, and concise content.',
    prompt: `Make up a 2-3 sentence story about the owner of the following company: ${name}, ${email}, ${website}`,
  })

  console.log('----------------------------')
  console.log(text)
  console.log('----------------------------')
}
