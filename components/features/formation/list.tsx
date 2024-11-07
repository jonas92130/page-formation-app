'use client'

import { FormationsResponseModel } from '@/model/formation'
import { createContext, useContext } from 'react'
import useFilterSearchParams from '@/hook/useFilterSearchParams'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

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
          <Card key={formation.numero_formation}>
            <CardHeader>
              <CardTitle>{formation.intitule_formation}</CardTitle>
            </CardHeader>
            <CardContent>
              {formation.nombre_heures_total_max > 0 && (
                <p>{formation.nombre_heures_total_max}h de formation</p>
              )}
              {formation.frais_ttc_tot_max && (
                <p>{formation.frais_ttc_tot_mean} €</p>
              )}
              {formation.nom_departement && formation.code_departement && (
                <p>
                  {formation.nom_departement}, {formation.code_departement}
                </p>
              )}
              {formation.code_rncp && (
                <p>Certification RNCP {formation.code_rncp}</p>
              )}
            </CardContent>
            <CardFooter>
              <Button className="rounded-full px-10 font-bold">
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
    <div className="px-10 py-4">
      <div className="flex items-center gap-2">
        <Badge className="rounded-sm border border-primary bg-background p-2 text-primary">
          Filtrer
        </Badge>
        <p>
          <span className="font-bold text-red-500">{total_count}</span>
          formations trouvées
        </p>
      </div>
      <ul className="mt-2 flex flex-col gap-y-2">
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
  FormationsCard,
}
