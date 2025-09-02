'use client'

import { Button, Group } from '@mantine/core'
import { isNotEmpty, useForm } from '@mantine/form'

import { Form, TextInput } from '@/components'

import { upsertCompany } from '../actions/upsert'

type PropsT = {
  company?: any
}

export const CompanyForm = (props: PropsT) => {
  const { company } = props

  const form = useForm({
    mode: 'uncontrolled',
    onSubmitPreventDefault: 'validation-failed',
    initialValues: {
      companyName: company?.name || '',
      companyWebsite: company?.websiteUrl || '',
    },
    validate: {
      companyName: isNotEmpty(),
      companyWebsite: isNotEmpty(),
    },
  })

  return (
    <Form action={upsertCompany} form={form}>
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
        <Button type="submit" formAction={upsertCompany}>Save</Button>
      </Group>
    </Form>
  )
}
