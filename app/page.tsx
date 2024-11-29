import { FormationFacetsResponseModel } from '@/model/formation'
import LinkList from '@/components/features/linkList'
import React from 'react'
import Formation from './formationCard'
import ActualityHome from './actualites/actualityHome'
import CitiesServerList from '@/components/features/linkList/citiesServerList'
import SearchBarBanner from '@/app/SearchBarBanner'
import ClientNavbar from './clientNavbar'
import HomeFormations from './homeFormations'
import Container from '@/components/ui/container'

interface Props {}

function ClientPage(props: Props) {
  const {} = props

  return (
    <>
      <ClientNavbar />
      <SearchBarBanner />
      <main className="">
        <Container>
          <div className="flex flex-col items-stretch justify-center gap-6 pt-8 md:flex-row md:gap-14 lg:gap-32">
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
        </Container>
        <Container>
          <HomeFormations />
        </Container>
        <Container>
          <LinkList
            name="domain"
            label="Quels domaines vous interesses ?"
            backgroundColor="bg-card"
            className=""
          />
        </Container>
        <Container>
          <ActualityHome className="" />
        </Container>
        <Container>
          <LinkList
            name="domain"
            label="Les domaines professionnels"
            backgroundColor="bg-primary/85 text-primary-foreground"
            className=""
          />
        </Container>
        <Container>
          <CitiesServerList className="" />
        </Container>
        <Container>
          <LinkList
            name="domain"
            label="Les métiers populaires"
            backgroundColor="bg-secondary/15 text-primary-background"
            className=""
          />
        </Container>
      </main>
    </>
  )
}

export default ClientPage
