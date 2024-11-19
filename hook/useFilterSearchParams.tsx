import { useSearchParams } from 'next/navigation'
import { filtersAvailable } from '@/lib/filter'

function useFilterSearchParams() {
  const searchParams = useSearchParams()
  const otherFilter = filtersAvailable.map((filter) => {
    const value = searchParams!.get(filter)

    if (!value) return {}

    return {
      [filter]: value,
    }
  })

  const filterAvailableObject = Object.assign({}, ...otherFilter)

  return {
    filterParams: filterAvailableObject,
  }
}

export default useFilterSearchParams
