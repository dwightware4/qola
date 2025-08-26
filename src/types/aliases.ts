export type { WebhookEvent as WebhookEventT } from '@clerk/nextjs/server'

export type { Metadata as MetadataT } from 'next'

export type {
  ComponentType as ComponentTypeT,
  ReactNode as ReactNodeT,
  SVGProps as SVGPropsT,
} from 'react'

// Native Aliases
export type ArrayT<T> = Array<T>

// TS Aliases
export type ReadonlyT<T> = Readonly<T>

// HTTP Aliases
export type PromiseT<T> = Promise<T>
export type RequestT = Request
export type FormDataT = FormData

// HTML Aliases
export type HTMLInputElementT = HTMLInputElement
export type HTMLFormElementT = HTMLFormElement
export type SVGSVGElementT = SVGSVGElement
