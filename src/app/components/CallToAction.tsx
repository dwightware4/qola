import { PageSection, Text } from '@/components'

import { WaitlistButton } from './WaitlistButton'

export const CallToAction = () => (
  <PageSection className={`bg-[url('/images/bg.svg')] bg-cover bg-center py-32`} fullWidth>
    <div className="mx-auto max-w-lg text-center">
      <Text as="h2" size="3xl" color="white" className="font-display tracking-tight sm:text-4xl">
        What you'll get
      </Text>

      <div className="mt-4">
        <Text size="lg" color="white" className="tracking-tight">
          Our AI-powered analysis provides you with a comprehensive blueprint to optimize your marketing and product strategy.
        </Text>
      </div>

      <div className="mt-10">
        <WaitlistButton />
      </div>
    </div>
  </PageSection>
)
