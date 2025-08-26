import { PageSection, Text } from '@/components'
import { Logo } from '@/core'

export const Footer = () => (
  <PageSection>
    <footer>
      <div className="flex items-center justify-center py-16">
        <Logo />
      </div>

      <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-center">
        <div className="mt-6 sm:mt-0">
          <Text size="sm">
            Copyright &copy;
            {' '}
            {new Date().getFullYear()}
            {' '}
            BuildFlow. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  </PageSection>
)
