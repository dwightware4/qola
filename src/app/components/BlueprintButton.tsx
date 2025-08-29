'use client'

import { Checkbox, Group } from '@mantine/core'
import { isEmail, isNotEmpty, matches } from '@mantine/form'

import { useActionState, useState } from 'react'
import { Button, Modal, TextInput } from '@/components'
import { useDisclosure, useForm } from '@/hooks'

import { create } from '../actions/blueprint'

export const BlueprintButton = () => {
  const [opened, { open, close }] = useDisclosure(false)

  const [loading, setLoading] = useState(false)

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
      website: '',
      auditPermission: false,
    },
    validate: {
      name: isNotEmpty('Name is required'),
      email: isEmail('Invalid email'),
      website: matches(/^(?:https?:\/\/)?(?:www\.)?[-\w@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b[-\w()@:%+.~#?&/=]*$/, 'Invalid website'),
      auditPermission: isNotEmpty('Permission is required'),
    },
    onSubmitPreventDefault: 'validation-failed',
  })

  const [state, createAction] = useActionState(create, form.getValues() as any)

  return (
    <>
      <Modal opened={opened} onClose={close} title="Enter Your Details">
        {state.success && (<div>{state.text}</div>)}

        {!state.success && loading && <div>Loading...</div>}

        {!loading && (
          <form action={createAction} onSubmit={form.onSubmit(() => { setLoading(true) })}>
            <TextInput
              withAsterisk
              label="Name"
              placeholder="Your Name"
              key={form.key('name')}
              name="name"
              data-autofocus
              {...form.getInputProps('name')}
            />

            <TextInput
              mt="lg"
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              key={form.key('email')}
              name="email"
              {...form.getInputProps('email')}
            />

            <TextInput
              mt="lg"
              withAsterisk
              label="Website"
              placeholder="yourwebsite.com"
              key={form.key('website')}
              name="website"
              {...form.getInputProps('website')}
            />

            <Checkbox
              mt="xl"
              label="I give permission to QOLA360 Convert to analyze my site and ads for audit purposes."
              key={form.key('auditPermission')}
              {...form.getInputProps('auditPermission', { type: 'checkbox' })}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        )}

      </Modal>

      <Button onClick={open}>
        Get My Free Blueprint
      </Button>
    </>
  )
}
