import React from 'react'
import NavLink from './NavLink'

const Header = () => {
  return (
    <header className="bg-gray-600 text-gray-300 flex justify-between py-4 px-6 items-center">
      <a href="/bookmark-box/" className="flex items-center">
        <span className="text-xl font-bold">Bookmark Box</span>
      </a>
      <input type="search" placeholder="Filter boxes" className="bg-gray-700 px-2 py-1 rounded-lg" />
      <nav>
        <NavLink href="/bookmark-box/">Home</NavLink>
        <NavLink href="/bookmark-box/about">About</NavLink>
      </nav>
    </header>
  )
}

export default Header
