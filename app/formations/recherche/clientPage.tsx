'use client'

import FormationList from '@/components/features/formation/list'
import FormationTabs from '@/components/features/formation/tabs'
import SearchBar from '@/components/features/searchBar'
import { FormationsResponseModel } from '@/model/formation'
import React, { useEffect } from 'react'

interface Props {
  data: FormationsResponseModel
}

function ClientPage(props: Props) {
  const { data } = props

  useEffect(() => {
    console.log('data:', data)
  }, [data])

  return (
    <div>
      <h1>CLIENT</h1>
      <SearchBar />
      <FormationList data={data} />
      <FormationTabs totalCount={data.total_count} />
    </div>
  )
}

export default ClientPage
