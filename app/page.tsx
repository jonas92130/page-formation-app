import ClientPage from './clientPage'
import { client } from '../tina/__generated__/databaseClient'
import { CPFApiHandler } from '@/back/CPFApiHandler'

export default async function Home() {
  const res = await client.queries.page({ relativePath: 'home.md' })
  const facets = await new CPFApiHandler().getFacets()
  return (
    <ClientPage
      // https://github.com/vercel/next.js/issues/47447
      data={JSON.parse(JSON.stringify(res.data))}
      facets={JSON.parse(JSON.stringify(facets))}
      query={res.query}
      variables={res.variables}
    />
  )
}
