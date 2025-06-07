import React from 'react'
import Header from './Header'
import PageBoxes from './PageBoxes'
import Footer from './Footer'

export default function BookmarkBoxApp() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-start">
        <PageBoxes />
      </main>
      <Footer className="mt-auto" />
    </div>
  )
}
