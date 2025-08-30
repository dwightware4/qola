'use client'

import type { ReactNodeT } from '@/types'

import { Modal as MantineModal } from '@mantine/core'

type PropsT = {
  opened: boolean
  onClose: () => void
  children?: ReactNodeT
  title?: string
  closeOnClickOutside?: boolean
  closeOnEscape?: boolean
  withCloseButton?: boolean
  className?: string
}

export const Modal = (props: PropsT) => {
  const { children, ...rest } = props

  return (
    <MantineModal {...rest}>
      {children}
    </MantineModal>
  )
}
