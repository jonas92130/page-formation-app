import { FormationsResponseModel } from '@/model/formation'
import React from 'react'

interface Props {
  data: FormationsResponseModel
}

function FormationList(props: Props) {
  const { data } = props
  const { results, total_count } = data
  return (
    <div className="px-10 py-4">
      <p>Nombre de formations: {total_count}</p>
      <ul className="mt-2 flex flex-col gap-y-2">
        {results.map((formation) => (
          <li key={formation.numero_formation}>
            <h2 className="text-sm">{formation.intitule_formation}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FormationList
