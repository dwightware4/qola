'use client'

import type { ReactNodeT } from '@/types'
import { Button, Modal } from '@/components'
import { useDisclosure } from '@/hooks'

type PropsT = {
  children?: ReactNodeT
  title?: string
  buttonLabel?: string
}

export const ButtonModal = (props: PropsT) => {
  const { children, title, buttonLabel = 'Open' } = props
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Modal opened={opened} onClose={close} title={title}>
        {children}
      </Modal>

      <Button onClick={open}>
        {buttonLabel}
      </Button>
    </>
  )
}
