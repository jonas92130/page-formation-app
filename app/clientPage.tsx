import { FormationFacetsResponseModel } from '@/model/formation'
import LinkList from '@/components/features/linkList'
import React from 'react'
import SearchBar from '@/components/features/searchBar'
import Navbar from './test-ui/navbar/page'
import Formation from './test-ui/formation/page'

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
      <main>
        <Navbar />
        <SearchBar />
        <Formation
          title="Formations CPF"
          label="Se former avec son compte personnel de formation"
          backgroundColor="bg-secondary"
        />
        <div className="relative">
          <Formation
            title="Formations en ligne"
            label="Se former de chez soi et à son rythme"
            backgroundColor="bg-primary"
          />
          <div className="absolute right-6 top-1/2 -translate-y-1/2 pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>
        <LinkList name="domain" label="Quels domaines vous interesses ?" />
        <LinkList name="lieu" label="Formation par Localisation" />
      </main>
    </>
  )
}

export default ClientPage
