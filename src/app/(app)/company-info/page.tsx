import { auth } from '@clerk/nextjs/server'
import { Text } from '@mantine/core'

import { Button } from '@/components'
import { getCompanyByUserId } from '@/db/queries/company'

import { CompanyForm } from './components/CompanyForm'

const CompanyInfoPage = async () => {
  const { userId } = await auth()
  const company = await getCompanyByUserId(userId as string)

  return (
    <div className="w-1/2">
      <Text size="2xl">Company Info</Text>

      <br />

      <CompanyForm company={company} />

      <br />

      <Button disabled={!company}>Initiate Market Research</Button>
    </div>
  )
}

export default CompanyInfoPage
