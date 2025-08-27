'use client'

import { Button, Modal } from '@/components'
import { useDisclosure } from '@/hooks'

export const BlueprintButton = () => {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Modal opened={opened} onClose={close}>
        Hello, I'm a modal!
      </Modal>

      <Button onClick={open}>
        Get My Free Blueprint
      </Button>
    </>
  )
}
