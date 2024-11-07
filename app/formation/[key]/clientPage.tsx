import React from 'react'
import { Formation } from '@/model/formation'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription } from '@/components/ui/card'
import { TiPlus } from 'react-icons/ti'
import { FaAngleRight } from 'react-icons/fa6'
import { FaRegClock } from 'react-icons/fa6'
import { FaEuroSign } from 'react-icons/fa6'
import { FaLocationDot } from 'react-icons/fa6'

type Props = {
  data: Formation
}

function ClientPage(props: Props) {
  const { data } = props
  console.log(data)
  return (
    <div className="background-image">
      <div className="mx-auto flex w-[90%] max-w-[1200px] flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="pt-5 text-xl font-extrabold lg:text-3xl">
            {data.intitule_formation}
          </h1>
          {data ? (
            <p className="text-sm font-extralight">
              {data.nom_of} ASSOCIATION DE GESTION CONSERVATOIRE NATIONAL ARTS
              METIERS NOUVELLE AQUITAINE
            </p>
          ) : null}
        </div>

        <div className="flex gap-5">
          <Badge className="rounded-md">Eligibles CPF</Badge>
          <Badge className="rounded-md border border-primary bg-background text-primary">
            A distance
          </Badge>
        </div>
        <p className="flex flex-row items-center gap-1 text-base">
          <TiPlus className="text-2xl font-extrabold" />
          Voir des formations similaires
        </p>
        <Card className="flex flex-col gap-2 border px-5 py-4 shadow-sm">
          {data.nombre_heures_total_max > 0 ? (
            <p className="flex flex-col gap-1">
              <span className="flex items-center gap-2 font-bold">
                <FaRegClock />
                Durée
              </span>
              {data.nombre_heures_total_max}h de formation
            </p>
          ) : null}
          <p className="flex flex-col gap-1">
            <span className="flex items-center gap-2 font-bold">
              <FaEuroSign />
              Prix
            </span>
            {data.frais_ttc_tot_max} €
          </p>
          {data.nom_departement && data.code_departement ? (
            <p className="flex flex-col gap-2">
              <span className="flex items-center gap-2 font-bold">
                <FaLocationDot />
                Localisation
              </span>
              {data.nom_departement} {data.code_departement}
            </p>
          ) : null}
        </Card>
        {data ? (
          <Card className="bg-primary/20 px-5 py-4">
            <p className="text-xl">4,3 ⭐️⭐️⭐️⭐️⭐️ 100 avis{data.avis}</p>
          </Card>
        ) : null}
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-bold">Objectif</h4>
          <p>{data.objectif_formation}</p>
          <div className="flex items-center">
            <FaAngleRight />
            <p className="text-sm font-bold"> Voir plus </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-bold">Contenu</h4>
          <p>{data.contenu_formation}</p>
        </div>

        <Card className="flex flex-col gap-3 bg-primary/20 px-5 py-4">
          <h4 className="text-lg font-bold">Points Forts 🔥</h4>
          <p className="">{data.points_forts}</p>
        </Card>
      </div>
    </div>
  )
}

export default ClientPage
