import type { ClassValue as ClassValueT } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValueT[]) => twMerge(clsx(inputs))
