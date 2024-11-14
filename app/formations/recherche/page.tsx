import DataList from './dataList'
import SearchBar from '@/components/features/searchBar'
import React from 'react'

interface Props {
  searchParams: any
}

function ClientPage(props: Props) {
  const { searchParams } = props

  return (
    <div>
      {/* <h1>CLIENT</h1> */}
      <div className="bg-primary p-10">
        <SearchBar />
      </div>
      <DataList searchParams={searchParams} />
    </div>
  )
}

export default ClientPage
