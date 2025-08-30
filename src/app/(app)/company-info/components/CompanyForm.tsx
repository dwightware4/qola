'use client'

import { Button, Group } from '@mantine/core'
import { isNotEmpty, useForm } from '@mantine/form'

import { Form, TextInput } from '@/components'

import { updateCompanyInfo } from '../actions/update'

export const CompanyForm = () => {
  const form = useForm({
    mode: 'uncontrolled',
    onSubmitPreventDefault: 'validation-failed',
    initialValues: {
      companyName: '',
      companyWebsite: '',
    },

    validate: {
      companyName: isNotEmpty(),
      companyWebsite: isNotEmpty(),
    },
  })

  return (
    <Form action={updateCompanyInfo} form={form}>
      <TextInput
        name="companyName"
        label="Company Name"
        placeholder="Your Company's Name"
        form={form}
        required
      />

      <TextInput
        name="companyWebsite"
        label="Company Website URL"
        placeholder="yourcompany.com"
        form={form}
        required
        mt="md"
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit" formAction={updateCompanyInfo}>Save</Button>
      </Group>
    </Form>
  )
}
