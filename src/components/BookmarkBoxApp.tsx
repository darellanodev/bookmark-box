import React from 'react'
import Header from './Header'
import PageBoxes from './PageBoxes'
import Footer from './Footer'

export default function BookmarkBoxApp() {
  return (
    <div className="flex flex-col h-full min-h-screen">
      <Header />
      <main className="flex-1 overflow-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <PageBoxes />
      </main>
      <Footer />
    </div>
  )
}
