import { cn } from '@/utils'

type PropsT = {
  open: boolean
}

export const MobileNavIcon = (props: PropsT) => {
  const { open } = props

  return (
    <svg
      aria-hidden="true"
      className="stroke-main-700 h-3.5 w-3.5 overflow-visible dark:stroke-white"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={cn('origin-center transition', open && 'scale-90 opacity-0')}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={cn('origin-center transition', !open && 'scale-90 opacity-0')}
      />
    </svg>
  )
}
