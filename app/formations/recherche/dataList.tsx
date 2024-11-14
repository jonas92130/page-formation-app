'use client'

import useSWR from 'swr'
import axios from 'axios'
import {
  FormationListContainer,
  FormationList,
  FormationTabs,
} from '@/components/features/formation/list'

const fetcher = async (url) => {
  const response = await axios.get(url)
  return response.data
}

interface Props {
  searchParams: { [key: string]: string }
}

function DataList(props: Props) {
  const { searchParams } = props

  console.log(searchParams)

  const params = new URLSearchParams(searchParams)

  const { data, isLoading, error } = useSWR(
    ['/api/formations/list' + '?' + params.toString()],
    fetcher
  )

  return (
    <>
      {isLoading && (
        <div className="flex h-[60dvh] w-full items-center justify-center">
          Chargement...
        </div>
      )}
      {data && (
        <FormationListContainer data={data}>
          <FormationList />
          <FormationTabs />
        </FormationListContainer>
      )}
      {error && <div>Erreur lors du chargement des données</div>}
    </>
  )
}

export default DataList
