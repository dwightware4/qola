import type { ReactNodeT } from '@/types'
import { Image } from '@/components'

type PropsT = {
  children: ReactNodeT
}

export const AuthPageContainer = (props: PropsT) => {
  const { children } = props

  return (
    <div className="flex min-h-screen flex-1">
      {/* Left Side */}
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">{children}</div>
      </div>
      {/* Left Side */}

      {/* Right side */}
      <div className="relative hidden w-0 flex-1 lg:block">
        <Image
          src="sign-in.jpg"
          description="Seattle skyline, gray rainy day"
          className="absolute inset-0 size-full object-cover"
          fill
          priority
        />
      </div>
      {/* Right Side */}
    </div>
  )
}
