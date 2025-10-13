import React from 'react'
import type { AnchorHTMLAttributes } from 'react'

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: React.ElementType
}

const NavLink = ({ href, children, icon: Icon, ...props }: NavLinkProps) => {
  return (
    <a href={href} className="btn" {...props}>
      {Icon && <Icon />}
      {children}
    </a>
  )
}

export default NavLink
