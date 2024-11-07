'use client'

import React, { useState } from 'react'
import { Formation } from '@/model/formation'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { TiPlus } from 'react-icons/ti'
import { FaAngleRight } from 'react-icons/fa6'
import { FaRegClock } from 'react-icons/fa6'
import { FaEuroSign } from 'react-icons/fa6'
import { FaLocationDot } from 'react-icons/fa6'
import { TiMinus } from 'react-icons/ti'
import { Button } from '@/components/ui/button'
import parse from 'html-react-parser'

type Props = {
  data: Formation
}

function ClientPage(props: Props) {
  const { data } = props
  const [showText, setShowText] = useState(false)

  return (
    <div className="background-image">
      <div className="mx-auto flex w-[90%] max-w-[1200px] flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="pt-5 text-xl font-extrabold lg:text-3xl">
            {data.intitule_formation}
          </h1>
          {data.nom_of && (
            <p className="text-sm font-extralight">{data.nom_of}</p>
          )}
        </div>
        <Badges />
        <p className="flex flex-row items-center gap-1 text-base">
          <TiPlus className="text-2xl font-extrabold" />
          Voir des formations similaires
        </p>
        <Card className="flex flex-col gap-2 border px-5 py-4 shadow-sm">
          {data.nombre_heures_total_max > 0 && (
            <p className="flex flex-col gap-1">
              <span className="flex items-center gap-2 font-bold">
                <FaRegClock />
                Durée
              </span>
              {data.nombre_heures_total_max}h de formation
            </p>
          )}
          {data.frais_ttc_tot_max && (
            <p className="flex flex-col gap-1">
              <span className="flex items-center gap-2 font-bold">
                <FaEuroSign />
                Prix
              </span>
              {data.frais_ttc_tot_max} €
            </p>
          )}
          {data.nom_departement && data.code_departement && (
            <p className="flex flex-col gap-2">
              <span className="flex items-center gap-2 font-bold">
                <FaLocationDot />
                Localisation
              </span>
              {data.nom_departement} {data.code_departement}
            </p>
          )}
        </Card>
        {data ? (
          <Card className="bg-primary/20 px-5 py-4">
            <p className="text-xl">4,3 ⭐️⭐️⭐️⭐️⭐️ 100 avis{data.avis}</p>
          </Card>
        ) : null}
        <div
          className={
            showText
              ? 'my-5 flex flex-wrap gap-5 overflow-hidden'
              : 'my-5 flex max-h-[30dvh] flex-wrap gap-5 overflow-hidden'
          }
        >
          <h4 className="text-lg font-bold">Objectif</h4>
          <p>{parse(data.objectif_formation)}</p>
          <div className="flex items-center">
            <FaAngleRight />
            <p className="text-sm font-bold"> Voir plus </p>
          </div>
          <div></div>
        </div>
        <Button
          onClick={() => setShowText(!showText)}
          className="p-0 text-sm text-foreground no-underline"
          variant="link"
        >
          {showText ? (
            <h4 className="m-0 flex flex-row items-center">
              <span className="text-lg font-extrabold">
                <TiMinus />
              </span>
              Afficher moins
            </h4>
          ) : (
            <h4 className="m-0 flex flex-row items-center font-bold">
              <span className="text-lg font-extrabold">
                <TiPlus />
              </span>
              Afficher plus
            </h4>
          )}
        </Button>
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-bold">Contenu</h4>
          <p>{parse(data.contenu_formation)}</p>
        </div>

        <Card className="flex flex-col gap-3 bg-primary/20 px-5 py-4">
          <h4 className="m-0 text-lg font-bold">Points Forts 🔥</h4>
          <p className="">{parse(data.points_forts)}</p>
        </Card>
      </div>
    </div>
  )
}

function Badges() {
  return (
    <div className="flex gap-5">
      <Badge className="rounded-md">Eligible CPF</Badge>
      <Badge className="rounded-md border border-primary bg-background text-primary">
        A distance
      </Badge>
    </div>
  )
}

export default ClientPage
