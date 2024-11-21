import { FormationFacetsResponseModel } from '@/model/formation'
import LinkList from '@/components/features/linkList'
import React from 'react'
import Formation from './formationCard'
import ActualityHome from './actualites/actualityHome'
import CitiesServerList from '@/components/features/linkList/citiesServerList'
import SearchBarBanner from '@/app/SearchBarBanner'
import ClientNavbar from './clientNavbar'

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
      <ClientNavbar />
      <SearchBarBanner />
      <main className="background-image pb-10">
        <div className="mx-auto flex w-[90%] max-w-[1100px] flex-col">
          <div className="mt-10 flex flex-col items-stretch justify-center gap-6 md:flex-row md:gap-14 lg:gap-32">
            <Formation
              title="Formations CPF"
              label="Se former avec son compte personnel de formation"
              backgroundColor="bg-secondary"
              link="formations/type/CPF"
            />
            <Formation
              title="Formations en ligne"
              label="Se former de chez soi et à son rythme"
              backgroundColor="bg-primary"
              isArrow={true}
              link="formations/learningType/distanciel"
            />
          </div>
          <LinkList
            name="domain"
            label="Quels domaines vous interesses ?"
            backgroundColor="bg-card"
            className="mt-10"
          />
          <ActualityHome className="mt-10" />
          <LinkList
            name="domain"
            label="Les domaines professionnels"
            backgroundColor="bg-primary/85 text-primary-foreground"
            className="mt-10"
          />
          <CitiesServerList className="mt-10" />
          <LinkList
            name="domain"
            label="Les métiers populaires"
            backgroundColor="bg-secondary/15 text-primary-background"
            className="mt-10"
          />
        </div>
      </main>
    </>
  )
}

export default ClientPage
