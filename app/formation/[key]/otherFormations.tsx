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
    <div className="mx-auto mt-16 w-[90%] max-w-[1100px]">
      <div className="flex w-full flex-col lg:w-[60%]">
        <h2 className="text-lg font-bold md:text-xl">
          Ces formations peuvent vous intéresser
        </h2>
        <FormationListContainer results={data}>
          <FormationsCards />
        </FormationListContainer>
      </div>
    </div>
  )
}

export default OtherFormations
