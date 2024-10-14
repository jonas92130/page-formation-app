import { FormationFacetsResponseModel } from '@/model/formation'
import LinkList from '@/components/features/linkList'
import React from 'react'
import SearchBar from '@/components/features/searchBar'
import Formation from './test-ui/formation/page'
import { TiArrowRight } from 'react-icons/ti'
import ActualityHome from './actualites/actualityHome'
import CitiesServerList from '@/components/features/linkList/citiesServerList'

interface Props {
  data: any
  facets: FormationFacetsResponseModel
  query: string
  variables: any
}

function ClientPage(props: Props) {
  const {} = props

  return (
    <>
      <main className="mx-auto flex flex-col lg:max-w-[1200px]">
        <SearchBar />
        <div className="flex justify-center min-[320px]:flex-col lg:flex-row">
          <Formation
            title="Formations CPF"
            label="Se former avec son compte personnel de formation"
            backgroundColor="bg-secondary"
          />
          <Formation
            title="Formations en ligne"
            label="Se former de chez soi et à son rythme"
            backgroundColor="bg-primary"
          />
        </div>
        <div className="absolute right-6 top-2/3 -translate-y-1/2 pr-2 text-[30px] text-background">
          <TiArrowRight />
        </div>
        <LinkList
          name="domain"
          label="Quels domaines vous interesses ?"
          backgroundColor="bg-card"
        />
        <ActualityHome />
        <LinkList
          name="domain"
          label="Les domaines professionnels"
          backgroundColor="bg-primary text-primary-foreground"
        />
        <CitiesServerList />
        <LinkList
          name="domain"
          label="Les métiers populaires"
          backgroundColor="bg-secondary/15 text-primary-background"
        />
      </main>
    </>
  )
}

export default ClientPage
