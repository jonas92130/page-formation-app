export const FilterConnector = {
  lieu: 'nom_departement',
  domain: 'libelle_nsf_1',
  id: 'numero_formation',
  certification: 'type_referentiel',
}

export interface QueryMongoParamsModel {
  skip?: number
  limit?: number
  query?: Record<string, any>
  match?: { $match: Record<string, any> }
}

export const createQueryMongoParams = (
  searchParams: Record<string, string | number>
) => {
  const limit = searchParams.limit ? Number(searchParams.limit) : 20
  let params = {
    limit: 20,
    skip: 0,
  } as QueryMongoParamsModel

  let match = {} as Record<string, any>

  for (const [key, value] of Object.entries(searchParams)) {
    if (!value || value === '') continue

    if (key === 'pageNumber') {
      console.log('pageNumber:', value)
      const offset = limit * (Number(value) - 1)
      params.skip = offset
    }

    if (key === 'limit') {
      params.limit = limit
      continue
    }

    if (key === 'duration') {
      if (value === 'courte') {
        match['nombre_heures_total_mean'] = { $lte: 70 }
      }

      if (value === 'moyenne') {
        match['nombre_heures_total_mean'] = { $gte: 70, $lte: 560 }
      }

      if (value === 'longue') {
        match['nombre_heures_total_mean'] = { $gt: 560 }
      }

      continue
    }

    if (key === 'learningType') {
      const filter = value === 'distanciel' ? { $gte: 1 } : { $eq: 0 }
      match['nb_session_a_distance'] = filter
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

    if (key === 'priceMin') {
      match['frais_ttc_tot_min'] = { $gte: Number(value) }
      continue
    }

    if (key === 'priceMax') {
      match['frais_ttc_tot_max'] = { $lte: Number(value) }
      continue
    }

    if (!FilterConnector[key]) continue

    match[FilterConnector[key]] = String(value)
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
  'duration',
  'learningType',
  'priceMin',
  'priceMax',
  'certification',
]
