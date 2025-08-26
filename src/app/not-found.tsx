import { Image, Link, Text } from '@/components'

const NotFound = () => (
  <>
    <main className="relative isolate h-screen">
      <Image
        className="absolute inset-0 -z-10 size-full object-cover object-top"
        src="404.avif"
        description="Urban road construction site"
        fill
        priority
      />

      <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
        <Text size="base" weight="semibold" color="white" className="leading-8">
          404
        </Text>

        <div className="mt-4">
          <Text
            as="h1"
            size="5xl"
            weight="semibold"
            color="white"
            className="tracking-tight text-balance sm:text-7xl"
          >
            Page not found
          </Text>
        </div>

        <div className="mt-6">
          <Text size="lg" weight="medium" color="white" className="sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </Text>
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/" size="sm" color="white" aria-label="Home">
            <span aria-hidden="true">&larr;</span>
            {' '}
            Back to home
          </Link>
        </div>
      </div>
    </main>
  </>
)
export default NotFound
