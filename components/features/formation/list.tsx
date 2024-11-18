'use client'

import { Formation, FormationsResponseModel } from '@/model/formation'
import { createContext, useContext } from 'react'
import useFilterSearchParams from '@/hook/useFilterSearchParams'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

interface Props {
  results: Formation[]
  totalCount?: number
  data?: FormationsResponseModel
  children: React.ReactNode
}

function FormationList(props: Props) {
  const {} = props
  return (
    <FormationListContext.Provider value={props}>
      {props.children}
    </FormationListContext.Provider>
  )
}

const FormationListContext = createContext<Props | null>(null)

function FormationsCards() {
  const props = useContext(FormationListContext)
  const results = props!.results

  return (
    <div>
      {results?.map((formation, index) => (
        <Link href={`/formation/${formation.numero_formation}`} key={index}>
          <Card
            key={formation.numero_formation}
            className="my-10 flex flex-col gap-5 border p-5"
          >
            <CardContent className="flex flex-col gap-3 p-0">
              <div className="flex flex-col gap-2">
                <h2 className="m-0 text-lg font-bold">
                  {formation.intitule_formation}
                </h2>
                {formation.nom_of && (
                  <p className="text-xs font-extralight">{formation.nom_of}</p>
                )}
              </div>

              <div className="flex gap-6 py-3">
                <Badge className="rounded-md">Eligible CPF</Badge>
                <Badge className="rounded-md border border-primary bg-background text-primary">
                  A distance
                </Badge>
              </div>
              {formation.nombre_heures_total_max > 0 && (
                <p className="flex items-center gap-2">
                  🕓 {formation.nombre_heures_total_max}h de formation
                </p>
              )}
              {formation.nom_departement && formation.code_departement && (
                <p className="flex items-center gap-2">
                  📍 {formation.nom_departement}, {formation.code_departement}
                </p>
              )}
              {formation.frais_ttc_tot_max && (
                <p className="flex items-center gap-2">
                  💲 {formation.frais_ttc_tot_mean.toFixed(2)} €
                </p>
              )}
              {formation.code_rncp > 0 && (
                <p className="flex items-center gap-2">
                  🎓 Certification RNCP : {formation.code_rncp}
                </p>
              )}
            </CardContent>
            <CardFooter className="p-0">
              <Button className="rounded-full px-14 font-bold transition-transform duration-300 ease-in-out hover:scale-95 hover:shadow-xl">
                En savoir plus
              </Button>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}

function List() {
  const props = useContext(FormationListContext)
  const totalCount = props?.totalCount

  return (
    <div className="mx-auto flex w-[90%] max-w-[1200px] flex-col">
      <div className="flex items-center gap-3 pt-4">
        <Badge className="rounded-md border border-primary bg-background p-2 text-base text-primary transition-transform duration-300 ease-in-out hover:scale-95 hover:shadow-xl">
          Filtrer
        </Badge>
        <p>
          <span className="font-bold text-red-500">{totalCount} </span>
          formations trouvées
        </p>
      </div>
      <ul className="mt-2 flex flex-col">
        <FormationsCards />
      </ul>
    </div>
  )
}

function Tabs() {
  const props = useContext(FormationListContext)
  const totalCount = props?.totalCount || 0
  const { filterParams } = useFilterSearchParams()

  const currentPage = filterParams.pageNumber
    ? Number(filterParams.pageNumber)
    : 1
  const limit = filterParams.limit ? Number(filterParams.limit) : 20

  const totalPages = Math.ceil(totalCount / limit)

  const paginationDots = () => {
    let pg: ('...' | number)[] = [],
      i = 1

    while (i <= totalPages) {
      if (
        i <= 3 ||
        i >= totalPages - 2 ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pg.push(i)
        i++
      } else {
        pg.push('...')
        i = i < currentPage ? currentPage - 1 : totalPages - 2
      }
    }
    return pg
  }

  const pagination = paginationDots()

  const createUrl = (pageNumber: number) => {
    const newParams = {
      ...filterParams,
      pageNumber: pageNumber,
    }
    const url = '?' + new URLSearchParams(newParams).toString()

    return url
  }

  const previousUrl = createUrl(currentPage - 1)
  const nextUrl = createUrl(currentPage + 1)

  console.log(previousUrl)
  return (
    <div className="mx-auto mb-5 flex w-10/12 flex-wrap justify-center gap-1 md:w-8/12 lg:w-6/12">
      <Pagination>
        <PaginationContent className="flex flex-wrap justify-center gap-2">
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious href={`${previousUrl}`} />
            </PaginationItem>
          )}

          {pagination.map((value, index) => {
            if (value === '...') {
              return <PaginationEllipsis key={`ellipsis-${index}`} />
            }

            const url = createUrl(value)

            return (
              <PaginationItem key={index}>
                <Button
                  size={'sm'}
                  variant={currentPage === value ? 'pagination' : 'ghost'}
                  asChild
                >
                  <Link href={url}>{value}</Link>
                </Button>
              </PaginationItem>
            )
          })}
          {currentPage < totalPages && (
            <PaginationItem>
              <PaginationNext href={`${nextUrl}`} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export {
  FormationList as FormationListContainer,
  List as FormationList,
  Tabs as FormationTabs,
  FormationsCards,
}
