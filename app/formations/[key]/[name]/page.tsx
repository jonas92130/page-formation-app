'use server'

import ClientPage from './clientPage'
import { createQueryMongoParams } from '@/lib/filter'
import { MongoDBHandler } from '@/back/MongoDBHandler'
import { client } from '@/tina/__generated__/databaseClient'
import RSSFeed from '@/components/rssFeed'
import ActualityHome from '@/app/actualites/actualityHome'
import { Formation } from '@/model/formation'

type Props = {
  searchParams: Record<string, string>
  params: { key: string; name: string }
}

async function Page(props: Props) {
  const { searchParams, params } = props
  const { key, name } = params
  const decodedKey = decodeURIComponent(key)
  const decodedName = decodeURIComponent(name)
  const newParams = {
    ...searchParams,
    [decodedKey]: decodedName,
  }

  const paramsFormatted = createQueryMongoParams(newParams)
  const api = new MongoDBHandler()
  const results = (await api.getFormations(paramsFormatted)) as Formation[]
  const count = await api.getFormationsCount(paramsFormatted)

  const { data } = await client.queries.rssConnection()
  const currentRss = data.rssConnection.edges?.find(
    (edge) => `${edge?.node?.name}`.toLowerCase() === decodedName.toLowerCase()
  )
  const rssUrl = currentRss?.node?.url

  console.log('rssUrl:', rssUrl)

  const dataFormated = {
    results,
    total_count: count[0]?.total_count,
  }

  return (
    <>
      <ClientPage data={JSON.parse(JSON.stringify(dataFormated))} />
      <ActualityHome />
      {rssUrl && <RSSFeed url={rssUrl} />}
    </>
  )
}

export default Page
