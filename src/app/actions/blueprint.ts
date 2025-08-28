'use server'

export const create = async (formData: any) => {
  const name = formData.get('name')
  const email = formData.get('email')
  const website = formData.get('website')
  console.log('---------------------------------')

  console.log({ name, email, website })

  console.log('---------------------------------')
}
