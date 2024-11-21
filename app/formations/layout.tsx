import SearchBar from '@/components/features/searchBar'
import NavBar from '@/components/navBar'
import React from 'react'

interface Props {
  children: React.ReactNode
}

function Layout(props: Props) {
  const { children } = props

  return (
    <>
      <NavBar />
      <main className="background-image mt-14 lg:mt-20">
        <div className="bg-primary py-8 md:hidden">
          <div className="mx-auto w-[90%]">
            <SearchBar />
          </div>
        </div>

        {children}
      </main>
    </>
  )
}

export default Layout
