import {
  FormationListContainer,
  FormationsCards,
} from '@/components/features/formation/list'
import { Formation } from '@/model/formation'
import React from 'react'

interface Props {
  data: Formation[]
}

function OtherFormations(props: Props) {
  const { data } = props

  return (
    <div>
      <h2 className="text-lg font-bold">
        D'autres formations qui peuvent vous intéresser
      </h2>
      <FormationListContainer results={data}>
        <FormationsCards />
      </FormationListContainer>
    </div>
  )
}

export default OtherFormations
