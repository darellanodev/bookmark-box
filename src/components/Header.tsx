import React from 'react'
import NavLink from './NavLink'
import { searchQuery } from '../stores/searchStore'

const Header = () => {
  return (
    <header className="bg-gray-600 text-gray-300 flex flex-wrap justify-between py-4 px-6 items-center break-words max-w-full">
      <div className="flex flex-1 items-center justify-between gap-4 px-3 py-2">
        <a href="/bookmark-box/" className="text-xl font-bold break-words">
          Bookmark Box
        </a>
        <select className="bg-gray-700 rounded-lg p-1 w-full md:w-auto" defaultValue="">
          <option value="" disabled>
            What do you want to do?
          </option>
          <option value="1">View all boxes</option>
          <option value="2">Edit a video for YouTube</option>
          <option value="3">Practice with katas</option>
        </select>
        <nav className="flex gap-2 mt-1 md:mt-0 md:mr-15">
          <NavLink href="/bookmark-box/">Home</NavLink>
          <NavLink href="/bookmark-box/about">About</NavLink>
        </nav>
      </div>
      <input
        type="search"
        placeholder="Filter boxes"
        className="bg-gray-700 px-2 py-1 rounded-lg w-full md:w-auto mt-2 md:mt-0"
        onChange={(e) => searchQuery.set(e.target.value)}
      />
    </header>
  )
}

export default Header
