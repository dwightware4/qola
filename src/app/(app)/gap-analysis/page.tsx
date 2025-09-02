'use client'

import { Button, PageSection, Text } from '@/components'
import { ChartBarIcon, CheckCircleIcon, DocumentMagnifyingGlassIcon, WrenchScrewdriverIcon } from '@/icons'

const GapAnalysisPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageSection className="pt-12 pb-16 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <DocumentMagnifyingGlassIcon className="mx-auto h-16 w-16 text-accent-500" />
          </div>

          <Text as="h1" size="3xl" className="font-display font-medium tracking-tight sm:text-5xl">
            Validation Gap Analysis
          </Text>

          <div className="mx-auto mt-6 max-w-2xl">
            <Text size="lg" className="tracking-tight text-gray-600">
              Identify critical gaps between your market assumptions and real customer needs.
              Validate your ideas before you build and avoid costly mistakes.
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
            Uncover Hidden Gaps
          </Text>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-950 p-6 rounded-lg shadow-sm">
              <ChartBarIcon className="h-8 w-8 text-accent-500 mb-4" />
              <Text as="h3" size="lg" className="font-medium mb-3">
                Market Reality Check
              </Text>
              <Text className="text-gray-600">
                Compare your assumptions against real market data to identify where your understanding
                might be off-target and what customers actually want.
              </Text>
            </div>

            <div className="bg-gray-950 p-6 rounded-lg shadow-sm">
              <WrenchScrewdriverIcon className="h-8 w-8 text-accent-500 mb-4" />
              <Text as="h3" size="lg" className="font-medium mb-3">
                Solution-Problem Fit Analysis
              </Text>
              <Text className="text-gray-600">
                Evaluate how well your proposed solution addresses real customer problems
                and discover gaps in your approach before investing resources.
              </Text>
            </div>

            <div className="bg-gray-950 p-6 rounded-lg shadow-sm">
              <CheckCircleIcon className="h-8 w-8 text-accent-500 mb-4" />
              <Text as="h3" size="lg" className="font-medium mb-3">
                Customer Validation Insights
              </Text>
              <Text className="text-gray-600">
                Get clear recommendations on what to validate with customers, which assumptions
                to test first, and how to gather meaningful feedback.
              </Text>
            </div>

            <div className="bg-gray-950 p-6 rounded-lg shadow-sm">
              <DocumentMagnifyingGlassIcon className="h-8 w-8 text-accent-500 mb-4" />
              <Text as="h3" size="lg" className="font-medium mb-3">
                Risk Assessment Report
              </Text>
              <Text className="text-gray-600">
                Understand which gaps pose the highest risk to your success and get a prioritized
                action plan to address them systematically.
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
                  Share Your Assumptions
                </Text>
                <Text className="text-gray-600">
                  Tell us about your target market, customer problems, and proposed solution approach.
                </Text>
              </div>
            </div>

            <div className="flex items-start text-left">
              <div className="flex-shrink-0 w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center font-medium mr-4">
                2
              </div>
              <div>
                <Text as="h3" size="lg" className="font-medium mb-2">
                  Gap Identification Engine
                </Text>
                <Text className="text-gray-600">
                  Our AI analyzes your assumptions against market reality to identify critical validation gaps.
                </Text>
              </div>
            </div>

            <div className="flex items-start text-left">
              <div className="flex-shrink-0 w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center font-medium mr-4">
                3
              </div>
              <div>
                <Text as="h3" size="lg" className="font-medium mb-2">
                  Get Your Validation Roadmap
                </Text>
                <Text className="text-gray-600">
                  Receive a detailed report highlighting gaps and a step-by-step plan to validate your assumptions.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

    </div>
  )
}

export default GapAnalysisPage
