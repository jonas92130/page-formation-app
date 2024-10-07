'use client'

import { FormationsResponseModel } from '@/model/formation'
import { createContext, useContext } from 'react'
import useFilterSearchParams from '@/hook/useFilterSearchParams'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

interface Props {
  data: FormationsResponseModel
  children: React.ReactNode
}

const FormationListContext = createContext<Props | null>(null)

function FormationList(props: Props) {
  const {} = props
  return (
    <FormationListContext.Provider value={props}>
      {props.children}
    </FormationListContext.Provider>
  )
}

function List() {
  const props = useContext(FormationListContext)
  const { results, total_count } = props!.data

  return (
    <div className="px-10 py-4">
      <p>Nombre de formations: {total_count}</p>
      <ul className="mt-2 flex flex-col gap-y-2">
        {results?.map((formation) => (
          <li key={formation.numero_formation}>
            <h2 className="text-sm">{formation.intitule_formation}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Tabs() {
  const props = useContext(FormationListContext)
  const { total_count } = props!.data
  const totalCount = total_count
  const { filterParams } = useFilterSearchParams()
  const router = useRouter()

  const currentPage = filterParams.pageNumber
    ? Number(filterParams.pageNumber)
    : 1
  const limit = filterParams.limit ? Number(filterParams.limit) : 20

  const totalPages = Math.ceil(totalCount / limit)

  const handlePageChange = (page: number) => {
    const newParams = {
      ...filterParams,
      pageNumber: page,
    }
    const url = '?' + new URLSearchParams(newParams).toString()

    router.push(url)
  }

  return (
    <div className="mx-auto mb-5 flex w-10/12 flex-wrap gap-1">
      {Array.from({ length: totalPages }).map((_, index) => (
        <Button
          key={index}
          size={'sm'}
          onClick={() => handlePageChange(index + 1)}
          variant={currentPage === index + 1 ? 'default' : 'ghost'}
        >
          {index + 1}
        </Button>
      ))}
    </div>
  )
}

export {
  FormationList as FormationListContainer,
  List as FormationList,
  Tabs as FormationTabs,
}
