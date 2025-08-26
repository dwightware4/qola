import { PageSection, Text } from '@/components'

import { Plans, SwirlyDoodle } from './components'

export const Pricing = () => (
  <PageSection>
    <section id="pricing" aria-label="Pricing" className="py-20 sm:py-32">
      <div className="md:text-center">
        <Text as="h2" size="3xl" className="font-display tracking-tight sm:text-4xl">
          <span className="relative whitespace-nowrap">
            <SwirlyDoodle className="fill-accent-400 absolute top-1/2 left-0 h-[1em] w-full" />

            <span className="relative">Simple pricing,</span>
          </span>
          {' '}
          for everyone.
        </Text>

        <div className="mt-4">
          <Text size="lg">
            From single-family residential to 40+ story high-rises and regional hospitals,
            QOLA Agent is priced for every business.
          </Text>
        </div>
      </div>

      <Plans />
    </section>
  </PageSection>
)
