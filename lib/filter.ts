export const FilterConnector = {
  lieu: 'nom_departement',
  domain: 'libelle_nsf_1',
}

export interface QueryMongoParamsModel {
  skip?: number
  limit?: number
  query?: Record<string, any>
  match?: { $match: Record<string, string> }
}

export const createQueryMongoParams = (
  searchParams: Record<string, string>
) => {
  const limit = searchParams.limit ? Number(searchParams.limit) : 20
  let params = {
    limit: 20,
    skip: 0,
  } as QueryMongoParamsModel

  let match = {} as Record<string, string>

  for (const [key, value] of Object.entries(searchParams)) {
    if (!value) continue

    if (key === 'pageNumber') {
      console.log('pageNumber:', value)
      const offset = limit * (Number(value) - 1)
      params.skip = offset
    }

    if (key === 'limit') {
      params.limit = limit
      continue
    }

    if (key === 'query') {
      params.query = {
        $search: {
          index: 'default',
          text: {
            query: value,
            path: {
              wildcard: '*',
            },
          },
        },
      }
      continue
    }
    if (!FilterConnector[key]) continue

    match[FilterConnector[key]] = value
  }

  console.log('match:', match)

  params.match = {
    $match: match,
  }

  return params
}

export const filtersAvailable = [
  'pageNumber',
  'limit',
  'query',
  'lieu',
  'domain',
]
