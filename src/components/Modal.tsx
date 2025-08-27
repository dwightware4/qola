'use client'

import type { ReactNodeT } from '@/types'

import { Modal as MantineModal } from '@mantine/core'

type PropsT = {
  children?: ReactNodeT
  onClose: () => void
  opened: boolean
}

export const Modal = (props: PropsT) => {
  const { children, opened, onClose } = props

  return (
    <MantineModal opened={opened} onClose={onClose}>
      {children}
    </MantineModal>
  )
}
