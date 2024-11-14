'use client'

import { FormationsResponseModel } from '@/model/formation'
import { createContext, useContext, useState } from 'react'
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
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

interface Props {
  data: FormationsResponseModel
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

function FormationsCard() {
  const props = useContext(FormationListContext)
  const { results } = props!.data

  return (
    <div>
      {results?.map((formation) => (
        <Link href={`/formation/${formation.numero_formation}`}>
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
                <Badge className="rounded-md transition-transform duration-300 ease-in-out hover:scale-95 hover:shadow-xl">
                  Eligible CPF
                </Badge>
                <Badge className="rounded-md border border-primary bg-background text-primary transition-transform duration-300 ease-in-out hover:scale-95 hover:shadow-xl">
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
                  💲 {formation.frais_ttc_tot_mean} €
                </p>
              )}
              {formation.code_rncp && (
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
  const { total_count } = props!.data

  return (
    <div className="mx-auto flex w-[90%] max-w-[1200px] flex-col">
      <div className="flex items-center gap-3 pt-4">
        <Badge className="rounded-md border border-primary bg-background p-2 text-base text-primary transition-transform duration-300 ease-in-out hover:scale-95 hover:shadow-xl">
          Filtrer
        </Badge>
        <p>
          <span className="font-bold text-red-500">{total_count} </span>
          formations trouvées
        </p>
      </div>
      <ul className="mt-2 flex flex-col">
        <FormationsCard />
      </ul>
    </div>
  )
}

function Tabs() {
  const props = useContext(FormationListContext)
  const { total_count } = props!.data
  const totalCount = total_count
  const { filterParams } = useFilterSearchParams()

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

  const pagination = () => {
    let pg = [],
      i = 1

    while (i <= totalPages) {
      if (
        i <= 3 ||
        i >= totalPages - 2 ||
        (i >= currentPage - 1 && currentPage + 1)
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

  return (
    <div className="mx-auto mb-5 flex w-10/12 flex-wrap gap-1 overflow-scroll">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="" />
          </PaginationItem>
          {Array.from({ length: totalPages }).map((_, index) => (
            <PaginationItem>
              <PaginationLink
                key={index}
                size={'sm'}
                onClick={() => handlePageChange(index + 1)}
                className={
                  currentPage === index + 1
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'hover:bg-accent hover:text-accent-foreground'
                }
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext href={''} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export {
  FormationList as FormationListContainer,
  List as FormationList,
  Tabs as FormationTabs,
  FormationsCard,
}
