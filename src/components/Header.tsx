import React from 'react'
import NavLink from './NavLink'
import { searchQuery } from '../stores/searchStore'

const Header = () => {
  return (
    <header className="h-16 bg-gray-600 text-gray-300 flex justify-between py-4 px-6 items-center">
      <a href="/bookmark-box/" className="flex items-center">
        <span className="text-xl font-bold">Bookmark Box</span>
      </a>
      <input
        type="search"
        placeholder="Filter boxes"
        className="bg-gray-700 px-2 py-1 rounded-lg"
        onChange={(e) => searchQuery.set(e.target.value)}
      />
      <nav>
        <NavLink href="/bookmark-box/">Home</NavLink>
        <NavLink href="/bookmark-box/about">About</NavLink>
      </nav>
    </header>
  )
}

export default Header
