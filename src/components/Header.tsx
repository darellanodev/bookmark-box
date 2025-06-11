import React from 'react'
import NavLink from './NavLink'
import { searchQuery } from '../stores/searchStore'

const Header = () => {
  return (
    <header className="h-20 bg-gray-600 text-gray-300 flex flex-wrap justify-between py-4 px-6 items-center break-words max-w-full">
      <a href="/bookmark-box/" className="text-xl font-bold break-words">
        <span className="text-xl font-bold break-words">Bookmark Box</span>
      </a>
      <input
        type="search"
        placeholder="Filter boxes"
        className="bg-gray-700 px-2 py-1 rounded-lg"
        onChange={(e) => searchQuery.set(e.target.value)}
      />
      <nav className="flex gap-2">
        <NavLink href="/bookmark-box/">Home</NavLink>
        <NavLink href="/bookmark-box/about">About</NavLink>
      </nav>
    </header>
  )
}

export default Header
