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
    <main>
      <FormationListContainer data={data}>
        <FormationList />
        <FormationTabs />
      </FormationListContainer>
    </main>
  )
}

export default ClientPage
