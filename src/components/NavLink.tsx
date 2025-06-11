import React from 'react'
import type { AnchorHTMLAttributes } from 'react'

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const NavLink = ({ href, children, ...props }: NavLinkProps) => {
  return (
    <a href={href} className="hover:bg-gray-500 px-3 py-2 rounded-lg" {...props}>
      {children}
    </a>
  )
}

export default NavLink
