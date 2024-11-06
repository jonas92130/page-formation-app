'use client'

import { FormationsResponseModel } from '@/model/formation'
import {
  FormationListContainer,
  FormationList,
  FormationTabs,
} from '@/components/features/formation/list'
import React from 'react'
import SearchBar from '@/components/features/searchBar'
import RSSFeed from '@/components/rssFeed'

interface Props {
  data: FormationsResponseModel
  rssUrl: string | undefined | null
}

function ClientPage(props: Props) {
  const { data, rssUrl } = props

  return (
    <main>
      <SearchBar />
      <FormationListContainer data={data}>
        <FormationList />
        <FormationTabs />
      </FormationListContainer>
      {rssUrl && <RSSFeed url={rssUrl} />}
    </main>
  )
}

export default ClientPage
