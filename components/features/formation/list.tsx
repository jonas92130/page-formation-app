'use client'

import { Formation, FormationsResponseModel } from '@/model/formation'
import { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
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
import { DialogHeader, DialogFooter } from '@/components/ui/dialog'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { cn } from '@/lib/utils'

const AVAILABLE_FILTER = [
  {
    name: 'price',
    label: 'Prix de la formation',
    type: 'range',
    min: 0,
    max: 20000,
  },
  {
    name: 'duration',
    label: 'Durée de la formation',
    type: 'select',
    options: [
      {
        value: 'courte',
        label: 'Courte (< 2 semaines )',
      },
      {
        value: 'moyenne',
        label: 'Moyenne (2 semaines - 4 mois)',
      },
      {
        value: 'longue',
        label: 'Longue (> 4 mois)',
      },
    ],
  },
  {
    name: 'learningType',
    label: "Type d'enseignement",
    type: 'select',
    options: [
      {
        value: 'présentiel',
        label: 'Présentiel',
      },
      {
        value: 'distanciel',
        label: 'A distance',
      },
    ],
  },
  {
    name: 'certification',
    label: 'Certification',
    type: 'select',
    options: [
      {
        value: 'RS',
        label: 'Formation certifiante',
      },

      {
        value: 'RNCP',
        label: 'Formation diplômante',
      },
    ],
  },
]

interface Props {
  results: Formation[]
  totalCount?: number
  data?: FormationsResponseModel
  children: React.ReactNode
}

function FormationList(props: Props) {
  const { children } = props
  return (
    <FormationListContext.Provider value={props}>
      {children}
    </FormationListContext.Provider>
  )
}

const FormationListContext = createContext<Props | null>(null)

function FormationsCards({ className }: { className?: string }) {
  const props = useContext(FormationListContext)
  const results = props!.results

  return (
    <div className={cn('my-10 flex w-full flex-col gap-10', className)}>
      {results?.map((formation, index) => (
        <Link
          href={`/formation/${formation.numero_formation}`}
          key={index}
          className="h-full"
        >
          <Card
            key={formation.numero_formation}
            className="flex h-full flex-col gap-5 border p-5"
          >
            <CardContent className="flex flex-col gap-2 p-0 text-sm">
              <div className="flex flex-col gap-1">
                <h3 className="m-0 text-base font-bold">
                  {formation.intitule_formation}
                </h3>
                {formation.nom_of && (
                  <p className="text-xs font-extralight">{formation.nom_of}</p>
                )}
              </div>

              <div className="flex gap-6 py-3">
                <Badge className="rounded-md">Eligible CPF</Badge>
                {formation.nb_session_a_distance > 0 && (
                  <Badge className="rounded-md border border-primary bg-background text-primary">
                    A distance
                  </Badge>
                )}
                {formation.type_referentiel === 'RNCP' && (
                  <Badge className="rounded-md border border-primary bg-background text-primary">
                    RNCP
                  </Badge>
                )}
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
              {formation.intitule_certification && (
                <p className="flex items-center gap-2">
                  🎓 {formation.intitule_certification}{' '}
                </p>
              )}
            </CardContent>
            <CardFooter className="mt-auto p-0">
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
    <div className="relative mx-auto w-[90%] max-w-[1100px]">
      <div className="flex flex-col">
        <div className="flex items-center gap-3 pt-8 lg:mt-8 lg:pt-0">
          <Filter />
          <p className="md:text-lg lg:text-xl">
            <span className="font-bold text-red-500">{totalCount} </span>
            formations trouvées
          </p>
        </div>
        <ul className="mt-2 flex flex-col lg:mt-0 lg:w-[60%]">
          <FormationsCards />
        </ul>
      </div>
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

function Filter() {
  const { filterParams } = useFilterSearchParams()
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleOptionClick = (name: string, value: string) => {
    setOpen(false)

    if (filterParams[name] === value) {
      const newParams = {
        ...filterParams,
        [name]: '',
      }
      const url = '?' + new URLSearchParams(newParams).toString()
      router.push(url)
      return
    }

    const newParams = {
      ...filterParams,
      [name]: value,
    }

    const url = '?' + new URLSearchParams(newParams).toString()

    router.push(url)
  }

  const removeAllFilters = () => {
    const {
      priceMin,
      priceMax,
      duration,
      learningType,
      certification,
      ...newParams
    } = filterParams

    const url = '?' + new URLSearchParams(newParams).toString()

    console.log('url', url)
    setOpen(false)
    router.push(url)
  }

  const handleRangeChange = (values: number[], name: string) => {
    const newParams = {
      ...filterParams,
      [name + 'Min']: values[0],
      [name + 'Max']: values[1],
    }

    const url = '?' + new URLSearchParams(newParams).toString()

    router.push(url)
    setOpen(false)
  }

  const Content = () => {
    return (
      <Accordion
        type="multiple"
        defaultValue={AVAILABLE_FILTER.map((filter) => filter.name)}
      >
        {AVAILABLE_FILTER.map((filter, index) => (
          <AccordionItem key={index} value={filter.name}>
            <AccordionTrigger>{filter.label}</AccordionTrigger>
            <AccordionContent>
              {filter.type === 'range' &&
              (filter.min || filter.min === 0) &&
              filter.max ? (
                <div className="h-fit w-full py-2 pl-2 pr-14">
                  <Slider
                    min={filter.min}
                    max={filter.max}
                    minStepsBetweenThumbs={1}
                    step={100}
                    value={[
                      filterParams[filter.name + 'Min'] || filter.min,
                      filterParams[filter.name + 'Max'] || filter.max,
                    ]}
                    onValueChange={(values) =>
                      handleRangeChange(values, filter.name)
                    }
                  />
                </div>
              ) : null}
              {filter.type === 'select' ? (
                <div>
                  {filter.options?.map((option, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Checkbox
                        id={`${filter.name}-${option.value}`}
                        checked={filterParams[filter.name] === option.value}
                        onClick={() =>
                          handleOptionClick(filter.name, option.value)
                        }
                      />
                      <label htmlFor={`${filter.name}-${option.value}`}>
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              ) : null}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
  }

  return (
    <>
      <Dialog open={open} onOpenChange={(o) => setOpen(o)}>
        <DialogTrigger asChild>
          <Button variant={'outline'} className="text-primary lg:hidden">
            Filtrer
          </Button>
        </DialogTrigger>
        <DialogContent className="flex h-fit max-h-[90dvh] min-w-[90%] flex-col justify-between overflow-auto lg:hidden">
          <DialogHeader>
            <DialogTitle>Filtres</DialogTitle>
            <DialogDescription>
              Ajustez les filtres pour affiner les résultats.
            </DialogDescription>
          </DialogHeader>
          <div className="">
            <Content />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant={'link'} onClick={removeAllFilters}>
                Tout effacer
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button>Annuler</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="absolute right-0 top-20 hidden w-[35%] flex-col gap-2 lg:flex">
        <p className="w-full border-b pb-4 font-bold text-primary">Filter</p>
        <Content />
        <Button
          onClick={removeAllFilters}
          className="mt-4 self-start"
          variant={'link'}
          size={'lg'}
        >
          Tout effacer
        </Button>
      </div>
    </>
  )
}

export {
  FormationList as FormationListContainer,
  List as FormationList,
  Tabs as FormationTabs,
  FormationsCards,
}
