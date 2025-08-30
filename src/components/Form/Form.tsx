import type { ReactNodeT } from '@/types'

type PropsT = {
  children?: ReactNodeT
  action: any
  form: any
}

export const Form = (props: PropsT) => {
  const { children, action, form } = props

  return (
    /* eslint-disable-next-line no-console */
    <form action={action} onSubmit={form.onSubmit((values: any) => console.log(values))}>
      {children}
    </form>
  )
}
