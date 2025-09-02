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
            Landing Page Analysis
          </Text>

          <div className="mx-auto mt-6 max-w-2xl">
            <Text size="lg" className="tracking-tight text-gray-600">
              Get comprehensive insights into your landing page performance with detailed analytics,
              conversion optimization recommendations, and user behavior analysis to maximize your ROI.
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
            What You'll Discover
          </Text>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-950 p-6 rounded-lg shadow-sm">
              <ChartBarIcon className="h-8 w-8 text-accent-500 mb-4" />
              <Text as="h3" size="lg" className="font-medium mb-3">
                Performance Metrics Analysis
              </Text>
              <Text className="text-gray-600">
                Detailed breakdown of conversion rates, bounce rates, time on page,
                and other key performance indicators that impact your success.
              </Text>
            </div>

            <div className="bg-gray-950 p-6 rounded-lg shadow-sm">
              <WrenchScrewdriverIcon className="h-8 w-8 text-accent-500 mb-4" />
              <Text as="h3" size="lg" className="font-medium mb-3">
                User Experience Insights
              </Text>
              <Text className="text-gray-600">
                Understand how visitors interact with your page, identify friction points,
                and discover optimization opportunities to improve user flow.
              </Text>
            </div>

            <div className="bg-gray-950 p-6 rounded-lg shadow-sm">
              <CheckCircleIcon className="h-8 w-8 text-accent-500 mb-4" />
              <Text as="h3" size="lg" className="font-medium mb-3">
                Conversion Optimization
              </Text>
              <Text className="text-gray-600">
                Get specific recommendations for improving your call-to-action placement,
                form design, and messaging to boost conversion rates.
              </Text>
            </div>

            <div className="bg-gray-950 p-6 rounded-lg shadow-sm">
              <DocumentMagnifyingGlassIcon className="h-8 w-8 text-accent-500 mb-4" />
              <Text as="h3" size="lg" className="font-medium mb-3">
                Content & Messaging Review
              </Text>
              <Text className="text-gray-600">
                Analyze your headline effectiveness, value proposition clarity,
                and overall messaging alignment with your target audience.
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
                  Submit Your Landing Page
                </Text>
                <Text className="text-gray-600">
                  Provide your landing page URL and share your campaign goals and target metrics.
                </Text>
              </div>
            </div>

            <div className="flex items-start text-left">
              <div className="flex-shrink-0 w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center font-medium mr-4">
                2
              </div>
              <div>
                <Text as="h3" size="lg" className="font-medium mb-2">
                  Comprehensive Analysis
                </Text>
                <Text className="text-gray-600">
                  Our AI analyzes your page structure, content, design, and performance against best practices and industry benchmarks.
                </Text>
              </div>
            </div>

            <div className="flex items-start text-left">
              <div className="flex-shrink-0 w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center font-medium mr-4">
                3
              </div>
              <div>
                <Text as="h3" size="lg" className="font-medium mb-2">
                  Get Actionable Insights
                </Text>
                <Text className="text-gray-600">
                  Receive a detailed report with specific recommendations and priority optimizations to improve your conversion rates.
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
