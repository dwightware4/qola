import type { ButtonVariant as ButtonVariantT } from '@mantine/core'
import { Button as MantineButton } from '@mantine/core'

type PropsT = {
  type?: 'button' | 'submit'
  children: any
  href?: string
  target?: string
  fullWidth?: boolean
  variant?: ButtonVariantT
  component?: 'a'
  onClick?: () => void
  className?: string
}

export const Button = (props: PropsT) => {
  const { type = 'button', variant = 'filled', children, ...rest } = props

  const component = props.href ? 'a' : 'button'

  return (
    <MantineButton type={type} variant={variant} component={component} {...rest}>
      {children}
    </MantineButton>
  )
}
