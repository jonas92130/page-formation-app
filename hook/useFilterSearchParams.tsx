import { useSearchParams, useParams } from 'next/navigation'
import { filtersAvailable } from '@/lib/filter'

function useFilterSearchParams() {
  const searchParams = useSearchParams()
  const params = useParams()

  const key = params?.key
  const name = params?.name

  console.log('searchParams:', key, name)

  const otherFilter = filtersAvailable.map((filter) => {
    const value = searchParams!.get(filter)

    if (!value) return {}

    return {
      [filter]: value,
    }
  })

  const filterAvailableObject = Object.assign(
    {},
    ...otherFilter,
    key && name ? { [key as string]: name } : {}
  )

  return {
    filterParams: filterAvailableObject,
  }
}

export default useFilterSearchParams
