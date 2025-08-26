import { SIGN_UP_ROUTE } from '@/core'

import { Plan } from './Plan'

const PLANS = [
  {
    name: 'Starter',
    price: '$49/month',
    description: 'Perfect for smaller construction companies',
    href: SIGN_UP_ROUTE,
    features: [
      'Up to 50 RFIs per month',
      'Basic email integration',
      'Standard response templates',
      'Email support',
      'Basic reporting',
    ],
    featured: false,
  },
  {
    name: 'Pro',
    price: '$499/month',
    description: 'Ideal for mid-sized construction companies',
    href: SIGN_UP_ROUTE,
    features: [
      'Up to 200 RFIs per month',
      'Advanced email integration',
      'Custom response templates',
      'Priority email support',
      'Advanced reporting & analytics',
      'Multi-project management',
      'Custom escalation rules',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '$999/month',
    description: 'For the largest construction companies',
    href: SIGN_UP_ROUTE,
    features: [
      'Unlimited RFIs',
      '24/7 phone support',
      'Unlimited projects',
      'Advanced integrations',
      'Dedicated account manager',
    ],
    featured: false,
  },
]

export const Plans = () => (
  <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
    {PLANS.map(plan => (
      <Plan key={plan.name} {...plan} />
    ))}
  </div>
)
