// import type { ReactNodeT } from '@/types'

import { TextInput as MantineTextInput } from '@mantine/core'

type PropsT = {
  form: any
  required?: boolean
  label?: string
  placeholder?: string
  name?: string
  mt?: string
}

export const TextInput = (props: PropsT) => {
  const { form, required, label, placeholder, name, mt } = props

  return (
    <MantineTextInput
      label={label}
      placeholder={placeholder}
      withAsterisk={required}
      key={form.key(name)}
      name={name}
      mt={mt}
      {...form.getInputProps(name)}
    />
  )
}
