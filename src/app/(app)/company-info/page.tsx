import { Text } from '@mantine/core'

import { CompanyForm } from './components/CompanyForm'

const CompanyInfoPage = () => {
  return (
    <div className="w-1/2">
      <Text size="2xl">Company Info</Text>

      <br />

      <CompanyForm />
    </div>
  )
}

export default CompanyInfoPage
