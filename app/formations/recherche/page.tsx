'use server'

import { CPFApiHandler } from '@/back/CPFApiHandler'
import ClientPage from './clientPage'
import { createUrlSearchParams } from '@/lib/filter'

async function Page(props) {
  const { searchParams } = props

  const params = createUrlSearchParams(searchParams)
  const api = new CPFApiHandler()
  const data = await api.getAll(params)

  return <ClientPage data={JSON.parse(JSON.stringify(data))} />
}

export default Page
