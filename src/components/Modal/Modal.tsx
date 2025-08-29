'use client'

import type { ReactNodeT } from '@/types'

import { Modal as MantineModal } from '@mantine/core'

type PropsT = {
  opened: boolean
  onClose: () => void
  children?: ReactNodeT
  title?: string
}

export const Modal = (props: PropsT) => {
  const { children, opened, onClose, title } = props

  return (
    <MantineModal opened={opened} onClose={onClose} title={title}>
      {children}
    </MantineModal>
  )
}
