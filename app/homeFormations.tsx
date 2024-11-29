import { MongoDBHandler } from '@/back/MongoDBHandler'
import {
  FormationListContainer,
  FormationsCards,
} from '@/components/features/formation/list'
import { createQueryMongoParams } from '@/lib/filter'
import { Formation } from '@/model/formation'
import React, { Suspense } from 'react'

interface Props {}

async function HomeFormations(props: Props) {
  const {} = props
  const formationParams = {
    limit: 6,
    query: 'top',
  }

  const api = new MongoDBHandler()
  const formationFormatted = createQueryMongoParams(formationParams)
  const data = (await api.getFormations(formationFormatted)) as Formation[]

  return (
    <div className="">
      <h2 className="text-2xl lg:text-3xl">
        Nos formations les plus recherchées
      </h2>
      <Suspense fallback={<div>Chargement...</div>}>
        <FormationListContainer results={data}>
          <FormationsCards className="mb-0 mt-4 grid items-center justify-stretch justify-items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3" />
        </FormationListContainer>
      </Suspense>
    </div>
  )
}

export default HomeFormations
