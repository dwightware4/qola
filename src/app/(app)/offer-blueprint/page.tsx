'use client'

import { Button, PageSection, Text } from '@/components'
import { ChartBarIcon, CheckCircleIcon, DocumentMagnifyingGlassIcon, MapIcon, WrenchScrewdriverIcon } from '@/icons'

const OfferBlueprintPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageSection className="pt-12 pb-16 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <MapIcon className="mx-auto h-16 w-16 text-accent-500" />
          </div>

          <Text as="h1" size="3xl" className="font-display font-medium tracking-tight sm:text-5xl">
            Offer Blueprint
          </Text>

          <div className="mx-auto mt-6 max-w-2xl">
            <Text size="lg" className="tracking-tight text-gray-600">
              Get a comprehensive analysis of your offer structure, pricing strategy, and value proposition
              to maximize conversions and customer satisfaction.
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
                Offer Performance Analysis
              </Text>
              <Text className="text-gray-600">
                Deep dive into your current offer structure, identifying strengths and areas for improvement
                to maximize your conversion rates.
              </Text>
            </div>

            <div className="bg-gray-950 p-6 rounded-lg shadow-sm">
              <WrenchScrewdriverIcon className="h-8 w-8 text-accent-500 mb-4" />
              <Text as="h3" size="lg" className="font-medium mb-3">
                Pricing Strategy Optimization
              </Text>
              <Text className="text-gray-600">
                Get data-driven recommendations for pricing models, packages, and positioning
                that align with your target market's expectations.
              </Text>
            </div>

            <div className="bg-gray-950 p-6 rounded-lg shadow-sm">
              <CheckCircleIcon className="h-8 w-8 text-accent-500 mb-4" />
              <Text as="h3" size="lg" className="font-medium mb-3">
                Value Proposition Refinement
              </Text>
              <Text className="text-gray-600">
                Clarify and strengthen your value proposition to better communicate
                the unique benefits your offer provides to customers.
              </Text>
            </div>

            <div className="bg-gray-950 p-6 rounded-lg shadow-sm">
              <DocumentMagnifyingGlassIcon className="h-8 w-8 text-accent-500 mb-4" />
              <Text as="h3" size="lg" className="font-medium mb-3">
                Competitive Positioning
              </Text>
              <Text className="text-gray-600">
                Understand how your offer stacks up against competitors and identify
                opportunities to differentiate and stand out in the market.
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
                  Submit Your Offer Details
                </Text>
                <Text className="text-gray-600">
                  Provide information about your current offer, pricing, and target audience.
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
                  Our advanced algorithms analyze your offer against market data and best practices.
                </Text>
              </div>
            </div>

            <div className="flex items-start text-left">
              <div className="flex-shrink-0 w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center font-medium mr-4">
                3
              </div>
              <div>
                <Text as="h3" size="lg" className="font-medium mb-2">
                  Get Your Blueprint
                </Text>
                <Text className="text-gray-600">
                  Receive a comprehensive report with actionable recommendations and optimization strategies.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

    </div>
  )
}

export default OfferBlueprintPage
