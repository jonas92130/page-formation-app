export const FiltreConnector = {
  region: 'nom_departement',
}

export const createUrlSearchParams = (searchParams: Record<string, string>) => {
  let params = new URLSearchParams()

  const limit = params.get('limit') ? Number(params.get('limit')) : 20

  for (const [key, value] of Object.entries(searchParams)) {
    if (!value) continue

    if (key === 'pageNumber') {
      console.log('pageNumber:', value)
      const offset = limit * (Number(value) - 1)
      params.append('offset', offset.toString())
    }

    if (key === 'query') {
      params.append('where', `"${value}"`)
      continue
    }
    if (!FiltreConnector[key]) continue

    const paramsValue = `${FiltreConnector[key]}:"${value}"`
    params.append('refine', paramsValue)
  }

  return params
}

export const filtersAvailable = ['pageNumber', 'limit', 'query', 'region']
