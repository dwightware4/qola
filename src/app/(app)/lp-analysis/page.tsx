'use client'

import { Button, PageSection, Text } from '@/components'
import { ChartBarIcon, CheckCircleIcon, DocumentMagnifyingGlassIcon, WrenchScrewdriverIcon } from '@/icons'

const LPAnalysisPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageSection className="pt-12 pb-16 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <ChartBarIcon className="mx-auto h-16 w-16 text-accent-500" />
          </div>

          <Text as="h1" size="3xl" className="font-display font-medium tracking-tight sm:text-5xl">
            Landing Page Insights
          </Text>

          <div className="mx-auto mt-6 max-w-2xl">
            <Text size="lg" className="tracking-tight text-gray-600">
              Define and understand your ideal customer with detailed demographics, psychographics,
              and behavioral insights to optimize your marketing and sales efforts.
            </Text>
          </div>

          <div className="mt-8 inline-flex items-center">
            <Button href="/company-info">
              Get Started
            </Button>
          </div>
        </div>
      </PageSection>

      {/* Features Section */}
      <PageSection className="py-16">
        <div className="mx-auto max-w-4xl">
          <Text as="h2" size="2xl" className="text-center font-display font-medium mb-12">
            What You'll Get
          </Text>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-950 p-6 rounded-lg shadow-sm">
              <ChartBarIcon className="h-8 w-8 text-accent-500 mb-4" />
              <Text as="h3" size="lg" className="font-medium mb-3">
                Customer Demographics Analysis
              </Text>
              <Text className="text-gray-600">
                Detailed breakdown of your ideal customer's age, location, income, education,
                and other key demographic characteristics.
              </Text>
            </div>

            <div className="bg-gray-950 p-6 rounded-lg shadow-sm">
              <WrenchScrewdriverIcon className="h-8 w-8 text-accent-500 mb-4" />
              <Text as="h3" size="lg" className="font-medium mb-3">
                Behavioral Insights
              </Text>
              <Text className="text-gray-600">
                Understand your customer's buying patterns, decision-making process,
                and preferred communication channels for maximum engagement.
              </Text>
            </div>

            <div className="bg-gray-950 p-6 rounded-lg shadow-sm">
              <CheckCircleIcon className="h-8 w-8 text-accent-500 mb-4" />
              <Text as="h3" size="lg" className="font-medium mb-3">
                Pain Points & Motivations
              </Text>
              <Text className="text-gray-600">
                Identify the key challenges your ideal customers face and what motivates
                them to seek solutions like yours.
              </Text>
            </div>

            <div className="bg-gray-950 p-6 rounded-lg shadow-sm">
              <DocumentMagnifyingGlassIcon className="h-8 w-8 text-accent-500 mb-4" />
              <Text as="h3" size="lg" className="font-medium mb-3">
                Marketing & Sales Strategy
              </Text>
              <Text className="text-gray-600">
                Get targeted recommendations for reaching your ideal customers through
                the right channels with the right messaging.
              </Text>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Process Section */}
      <PageSection className="py-16">
        <div className="mx-auto max-w-3xl text-center">
          <Text as="h2" size="2xl" className="font-display font-medium mb-8">
            How It Works
          </Text>

          <div className="space-y-8">
            <div className="flex items-start text-left">
              <div className="flex-shrink-0 w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center font-medium mr-4">
                1
              </div>
              <div>
                <Text as="h3" size="lg" className="font-medium mb-2">
                  Share Your Business Details
                </Text>
                <Text className="text-gray-600">
                  Provide information about your business, current customers, and target market.
                </Text>
              </div>
            </div>

            <div className="flex items-start text-left">
              <div className="flex-shrink-0 w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center font-medium mr-4">
                2
              </div>
              <div>
                <Text as="h3" size="lg" className="font-medium mb-2">
                  AI-Powered Analysis
                </Text>
                <Text className="text-gray-600">
                  Our advanced algorithms analyze your data against market insights and customer behavior patterns.
                </Text>
              </div>
            </div>

            <div className="flex items-start text-left">
              <div className="flex-shrink-0 w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center font-medium mr-4">
                3
              </div>
              <div>
                <Text as="h3" size="lg" className="font-medium mb-2">
                  Get Your Customer Profile
                </Text>
                <Text className="text-gray-600">
                  Receive a detailed ICP report with actionable insights for targeting and engaging your ideal customers.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

    </div>
  )
}

export default LPAnalysisPage
