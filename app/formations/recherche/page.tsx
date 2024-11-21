import ActualityHome from '@/app/actualites/actualityHome'
import DataList from './dataList'
import React from 'react'

interface Props {
  searchParams: any
}

function ClientPage(props: Props) {
  const { searchParams } = props

  return (
    <>
      <DataList searchParams={searchParams} />
      <ActualityHome className="mt-10" />
    </>
  )
}

export default ClientPage
