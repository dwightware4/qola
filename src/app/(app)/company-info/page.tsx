import { auth } from '@clerk/nextjs/server'
import { Text } from '@mantine/core'

import { getCompanyByUserId } from '@/db/queries/company'

import { CompanyForm } from './components/CompanyForm'
import { InitiateButton } from './components/InitiateButton'

const CompanyInfoPage = async () => {
  const { userId } = await auth()
  const company = await getCompanyByUserId(userId as string)

  return (
    <div className="w-1/2">
      <Text size="2xl">Company Info</Text>

      <br />

      <CompanyForm company={company} />

      <br />

      <InitiateButton />
    </div>
  )
}

export default CompanyInfoPage
