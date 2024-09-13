import { FormationFacetsResponseModel } from '@/model/formation'
import LinkList from '@/components/features/linkList'
import React from 'react'
import SearchBar from '@/components/features/searchBar'

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
      <div className="mt-10 px-4">
        <h1>Home Page</h1>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quas
          itaque excepturi ipsam molestias aliquid reiciendis facere nisi
          consequuntur laborum, soluta perferendis vel maxime!
        </p>
      </div>
      <LinkList name="domain" label="Formations par domaine" />
      <LinkList name="lieu" label="Formation par Localisation" />
    </main>
  )
}

export default ClientPage
