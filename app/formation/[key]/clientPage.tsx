import React from 'react'
import { Formation } from '@/model/formation'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription } from '@/components/ui/card'
import { TiPlus } from 'react-icons/ti'
import { TiChevronRight } from 'react-icons/ti'

type Props = {
  data: Formation
}

function ClientPage(props: Props) {
  const { data } = props
  console.log(data)
  return (
    <div className="background-image">
      <div className="mx-auto flex w-[90%] max-w-[1200px] flex-col gap-2">
        <h1 className="pt-5 font-extrabold lg:text-3xl">
          {data.intitule_formation}
        </h1>
        <p>{data.nom_of}</p>
        <div className="flex gap-5 py-2">
          <Badge className="rounded-md">Eligibles CPF</Badge>
          <Badge className="rounded-md border border-primary bg-background text-primary">
            A distance
          </Badge>
        </div>
        <p className="flex flex-row items-center text-base">
          <span className="font-extrabold">
            <TiPlus />
          </span>
          Voir des formations similaires
        </p>
        <Card className="flex flex-col gap-2 border px-5 py-4 shadow-sm">
          <p>
            {data.nombre_heures_total_max > 0
              ? `Durée : ${data.nombre_heures_total_max}h de formation`
              : null}
          </p>
          <p>Prix : {data.frais_ttc_tot_max}€</p>
          <p>
            {data.nom_departement && data.code_departement
              ? `Localisation : ${data.nom_departement} ${data.code_departement}`
              : null}
          </p>
        </Card>
        {data ? (
          <Card className="bg-primary/20 px-5 py-4">
            <p>4,3 ⭐️⭐️⭐️⭐️⭐️ 100 avis{data.avis}</p>
          </Card>
        ) : null}
        <h4 className="text-lg font-bold">Objectif</h4>
        <p>{data.objectif_formation}</p>
        <div className="flex items-center">
          <TiChevronRight />
          <p className="font-bold text-sm"> Voir plus </p>
        </div>

        <h4 className="text-lg font-bold">Contenu</h4>
        <p>{data.contenu_formation}</p>
        <Card className="flex flex-col gap-3 bg-primary/20 px-5 py-4">
          <h4 className="text-lg font-bold">Points Forts 🔥</h4>
          <p className="">{data.points_forts}</p>
        </Card>
      </div>
    </div>
  )
}

export default ClientPage
