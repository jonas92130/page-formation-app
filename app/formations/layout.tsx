import SearchBar from '@/components/features/searchBar'
import NavBar from '@/components/navBar'
import React from 'react'
import Actuality from '../actualites/page'
import ActualityHome from '../actualites/actualityHome'

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
        <ActualityHome className="mx-auto my-10 w-[90%] max-w-[1100px]" />
      </main>
    </>
  )
}

export default Layout
