import ActualityHome from '@/app/actualites/actualityHome'
import DataList from './dataList'
import React from 'react'
import SearchBar from '@/components/features/searchBar'

interface Props {
  searchParams: any
}

function ClientPage(props: Props) {
  const { searchParams } = props

  return (
    <>
      <div className="bg-primary py-8 md:hidden">
        <div className="mx-auto w-[90%]">
          <SearchBar />
        </div>
      </div>
      <DataList searchParams={searchParams} />
    </>
  )
}

export default ClientPage
