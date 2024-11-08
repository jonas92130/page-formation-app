'use client'

import React, { useState } from 'react'
import { Formation } from '@/model/formation'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { TiPlus } from 'react-icons/ti'
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
      <div className="mx-auto flex w-[90%] max-w-[1200px] flex-col gap-6">
        <div className="flex flex-col gap-2">
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
        <Card className="flex flex-col gap-5 border px-4 py-3 shadow-sm">
          {data.nombre_heures_total_max > 0 && (
            <p className="flex flex-col gap-2">
              <span className="flex items-center gap-2 font-bold">
                <FaRegClock className="text-lg" />
                Durée
              </span>
              {data.nombre_heures_total_max}h de formation
            </p>
          )}
          {data.frais_ttc_tot_max && (
            <p className="flex flex-col gap-1">
              <span className="flex items-center gap-2 font-bold">
                <FaEuroSign className="text-lg" />
                Prix
              </span>
              {data.frais_ttc_tot_max} €
            </p>
          )}
          {data.nom_departement && data.code_departement && (
            <p className="flex flex-col gap-2">
              <span className="flex items-center gap-2 font-bold">
                <FaLocationDot className="text-lg" />
                Localisation
              </span>
              {data.nom_departement} {data.code_departement}
            </p>
          )}
        </Card>
        {data ? (
          <Card className="bg-primary/20 px-5 py-6">
            <p className="text-xl">4,3 ⭐️⭐️⭐️⭐️⭐️ 100 avis{data.avis}</p>
          </Card>
        ) : null}
        <div className='flex flex-col my-8 gap-9'>
          <div
            className={
              showText
                ? 'flex flex-wrap gap-3 overflow-hidden'
                : 'flex max-h-[30dvh] flex-wrap gap-3 overflow-hidden'
            }
          >
            <h2 className="m-0 text-lg font-bold">Objectif</h2>
            <p>{parse(data.objectif_formation)}</p>
          </div>
          <Button
            onClick={() => setShowText(!showText)}
            className="p-0 text-sm text-foreground no-underline"
            variant="link"
          >
            {showText ? (
              <h2 className="m-0 flex flex-row items-center">
                <span className="text-lg font-extrabold">
                  <TiMinus />
                </span>
                Afficher moins
              </h2>
            ) : (
              <h2 className="m-0 flex flex-row items-center font-bold">
                <span className="text-lg font-extrabold">
                  <TiPlus />
                </span>
                Afficher plus
              </h2>
            )}
          </Button>
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-bold">Contenu</h2>
            <p>{parse(data.contenu_formation)}</p>
          </div>

          <Card className="flex flex-col gap-3 bg-primary/20 px-5 py-4">
            <h2 className="m-0 text-lg font-bold">Points Forts 🔥</h2>
            <p className="">{parse(data.points_forts)}</p>
          </Card>
        </div>
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
