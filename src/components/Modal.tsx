'use client'

import type { ReactNodeT } from '@/types'

import { Modal as MantineModal } from '@mantine/core'

type PropsT = {
  children?: ReactNodeT
  onClose: () => void
  opened: boolean
  title?: string
}

export const Modal = (props: PropsT) => {
  const { children, opened, onClose, title } = props

  return (
    <MantineModal opened={opened} onClose={onClose} centered title={title}>
      {children}
    </MantineModal>
  )
}
