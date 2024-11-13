'use client'

import {
  FormationListContainer,
  FormationList,
  FormationTabs,
} from '@/components/features/formation/list'
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
      {/* <h1>CLIENT</h1> */}
      <div className="bg-primary p-10">
        <SearchBar />
      </div>
      <FormationListContainer data={data}>
        <FormationList />
        <FormationTabs />
      </FormationListContainer>
    </div>
  )
}

export default ClientPage
