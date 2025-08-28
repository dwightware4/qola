'use server'

import { openai } from '@ai-sdk/openai'
import { generateText } from 'ai'

export const create = async ({ name, website }: any) => {
  const { text } = await generateText({
    model: openai('gpt-5-nano'),
    system:
    'You are a professional writer. '
    + 'You write simple, clear, and concise content. No notes or disclaimers.',
    prompt: `Make up a 2-3 sentence story about the ${name}, the owner of the company with the website ${website}`,
  })

  return { success: true, text }
}
