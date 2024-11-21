'use client'

import { FormationsResponseModel } from '@/model/formation'
import {
  FormationListContainer,
  FormationList,
  FormationTabs,
} from '@/components/features/formation/list'
import React from 'react'

interface Props {
  data: FormationsResponseModel
}

function ClientPage(props: Props) {
  const { data } = props

  return (
    <>
      <FormationListContainer
        data={data}
        results={data.results}
        totalCount={data.total_count}
      >
        <FormationList />
        <FormationTabs />
      </FormationListContainer>
    </>
  )
}

export default ClientPage
