import { FormationFacetsResponseModel } from '@/model/formation'
import LinkList from '@/components/features/linkList'
import React from 'react'
import Formation from './test-ui/formation/formation'
import ActualityHome from './actualites/actualityHome'
import CitiesServerList from '@/components/features/linkList/citiesServerList'
import SearchBar from '@/components/features/Banner'
import Footer from '@/components/features/footer'

interface Props {
  data: any
  facets: FormationFacetsResponseModel
  query: string
  variables: any
}

function ClientPage(props: Props) {
  const {} = props

  return (
    <main className="background-image">
      <div>
        <SearchBar />
      </div>
      <div className="mx-8 flex flex-col lg:mx-36 lg:max-w-[1400px]">
        <div className="flex flex-col items-center justify-center gap-12 pt-16 lg:flex-row lg:gap-24">
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
          backgroundColor="bg-primary/85 text-primary-foreground"
        />
        <CitiesServerList />
        <LinkList
          name="domain"
          label="Les métiers populaires"
          backgroundColor="bg-secondary/15 text-primary-background"
        />
      </div>
      <Footer />
    </main>
  )
}

export default ClientPage
