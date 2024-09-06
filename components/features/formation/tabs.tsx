import React, { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import useFilterSearchParams from '@/hook/useFilterSearchParams'
interface Props {
  totalCount: number
}

function FormationTabs(props: Props) {
  const { totalCount } = props
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
    const url =
      '/formations/recherche?' + new URLSearchParams(newParams).toString()

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

export default FormationTabs
