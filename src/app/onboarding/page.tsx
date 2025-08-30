'use client'

import { createCompanyInfo } from '@/app/(app)/company-info/actions/create'
import { CompanyForm } from '@/app/(app)/company-info/components/CompanyForm'

import { Modal } from '@/components'

const OnboardingPage = () => {
  return (
    <div>
      <Modal
        opened={true}
        title="Setup Your Company"
        closeOnEscape={false}
        closeOnClickOutside={false}
        withCloseButton={false}
        onClose={() => { }}
      >
        <CompanyForm action={createCompanyInfo} />
      </Modal>
    </div>
  )
}

export default OnboardingPage
