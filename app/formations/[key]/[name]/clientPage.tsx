'use client'

import { FormationsResponseModel } from '@/model/formation'
import {
  FormationListContainer,
  FormationList,
  FormationTabs,
} from '@/components/features/formation/list'
import React from 'react'
import SearchBar from '@/components/features/searchBar'

interface Props {
  data: FormationsResponseModel
}

function ClientPage(props: Props) {
  const { data } = props

  return (
    <main>
      <div className="bg-primary p-10">
        <div className="">
          <SearchBar />
        </div>
      </div>
      <FormationListContainer data={data}>
        <FormationList />
        <FormationTabs />
      </FormationListContainer>
    </main>
  )
}

export default ClientPage
