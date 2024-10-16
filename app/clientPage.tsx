import { FormationFacetsResponseModel } from '@/model/formation'
import LinkList from '@/components/features/linkList'
import React from 'react'
import Formation from './test-ui/formation/formation'
import { FaArrowRight } from 'react-icons/fa'
import ActualityHome from './actualites/actualityHome'
import CitiesServerList from '@/components/features/linkList/citiesServerList'
import SearchBar from '@/components/searchBar'

interface Props {
  data: any
  facets: FormationFacetsResponseModel
  query: string
  variables: any
}

function ClientPage(props: Props) {
  const {} = props

  return (
    <main>
      <SearchBar />

      <div className="mx-auto flex flex-col px-2 lg:max-w-[1200px]">
        <div className="flex justify-center gap-5 min-[320px]:flex-col lg:flex-row">
          <Formation
            title="Formations CPF"
            label="Se former avec son compte personnel de formation"
            backgroundColor="bg-secondary"
          />
          <Formation
            title="Formations en ligne"
            label="Se former de chez soi et à son rythme"
            backgroundColor="bg-primary"
            isArrow={true}
          />
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
      </div>
    </main>
  )
}

export default ClientPage
