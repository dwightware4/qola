import { UserButton } from '@clerk/nextjs'

export const NavFooter = () => (
  <li className="mt-auto hidden lg:block">
    <UserButton />
  </li>
)
