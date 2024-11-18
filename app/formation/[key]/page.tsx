import React from 'react'
import { MongoDBHandler } from '@/back/MongoDBHandler'
import { createQueryMongoParams } from '@/lib/filter'
import ClientPage from './clientPage'
import { Formation } from '@/model/formation'
import Footer from '@/components/features/footer'
import OtherFormations from './otherFormations'
import { Organization } from '@/model/organization'

type Props = {
  params: { key: string }
}

async function page(props: Props) {
  const { params } = props
  const { key } = params
  const api = new MongoDBHandler()
  const decodedKey = decodeURIComponent(key)
  const newParams = { id: decodedKey }
  const paramsFormatted = createQueryMongoParams(newParams)
  const results = await api.getFormations(paramsFormatted)

  console.log('results', results)

  if (!results || results.length === 0) {
    return <div>404</div>
  }

  const DataFormatted = {
    result: results[0],
  } as {
    result: Formation
  }

  const otherFormationsParams = {
    limit: 6,
    query: DataFormatted.result.libelle_code_formacode_principal,
  }

  const siret = DataFormatted.result.siret_of

  console.log('siret', siret)

  const otherFormationsFormatted = createQueryMongoParams(otherFormationsParams)

  const organization = (await api.getOrganization(
    siret
  )) as unknown as Organization | null

  console.log('organization', organization)
  const otherFormations = (await api.getFormations(
    otherFormationsFormatted
  )) as Formation[]

  return (
    <>
      <ClientPage
        data={JSON.parse(JSON.stringify(DataFormatted.result))}
        organization={organization}
      />
      <OtherFormations data={otherFormations} />
      <Footer />
    </>
  )
}

export default page
