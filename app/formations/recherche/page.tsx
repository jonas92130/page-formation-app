'use server'

import { CPFApiHandler } from '@/back/CPFApiHandler'
import { MongoDBHandler } from '@/back/MongoDBHandler'
import ClientPage from './clientPage'
import { createQueryMongoParams } from '@/lib/filter'

async function Page(props) {
  const { searchParams } = props

  const params = createQueryMongoParams(searchParams)
  const api = new MongoDBHandler()
  const results = await api.getFormations(params)
  const count = await api.getFormationsCount(params)

  const dataFormated = {
    results,
    total_count: count[0]?.total_count,
  }

  return <ClientPage data={JSON.parse(JSON.stringify(dataFormated))} />
}

export default Page
