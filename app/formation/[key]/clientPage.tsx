'use client'

import React, { useState } from 'react'
import { Formation } from '@/model/formation'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { TiPlus } from 'react-icons/ti'
import { TiMinus } from 'react-icons/ti'
import { Button } from '@/components/ui/button'
import parse from 'html-react-parser'

type Props = {
  data: Formation
}

function ClientPage(props: Props) {
  const { data } = props
  const [showMoreObjective, setMoreShowObjective] = useState(false)
  const [showMoreContent, setMoreShowContent] = useState(false)
  const [showObjective, setShowObjective] = useState(true)
  const [showContent, setShowContent] = useState(false)

  return (
    <div className="background-image">
      <div className="mb-4 flex flex-col gap-2 bg-primary/60">
        <h1 className="mx-3 pt-5 text-xl font-extrabold lg:text-3xl">
          {data.intitule_formation}
        </h1>
        {data.nom_of && (
          <p className="mx-3 pb-3 text-sm font-extralight">{data.nom_of}</p>
        )}
      </div>
      <div className="mx-auto flex w-[90%] max-w-[1200px] flex-col gap-7">
        <Badges />
        <p className="flex flex-row items-center gap-1 text-base">
          <TiPlus className="text-2xl font-extrabold" />
          Voir des formations similaires
        </p>
        <Card className="flex flex-col gap-5 border px-4 py-3 shadow-sm">
          {data.nombre_heures_total_max > 0 && (
            <p className="flex flex-col gap-2">
              <span className="flex items-center gap-2 font-bold">
                🕓 Durée
              </span>
              {data.nombre_heures_total_max}h de formation
            </p>
          )}
          {data.frais_ttc_tot_max && (
            <p className="flex flex-col gap-1">
              <span className="flex items-center gap-2 font-bold">💲 Prix</span>
              {data.frais_ttc_tot_max.toFixed(2)} €
            </p>
          )}
          {data.nom_departement && data.code_departement && (
            <p className="flex flex-col gap-2">
              <span className="flex items-center gap-2 font-bold">
                📍 Localisation
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

        <Card className="flex flex-col gap-3 bg-primary/20 px-5 py-4">
          <h2 className="m-0 text-lg font-bold">Points Forts 🔥</h2>
          <div>{parse(data.points_forts)}</div>
        </Card>

        <div className="mt-8 flex flex-col justify-center gap-4">
          <div className="relative flex justify-between border-b border-gray-300">
            <Button
              variant="link"
              onClick={() => {
                setShowObjective(!showObjective)
                setShowContent(false)
              }}
              className="p-0 text-inherit no-underline hover:no-underline focus:no-underline active:no-underline"
            >
              <h3
                className={`m-0 text-lg font-bold text-foreground transition-colors duration-300 ${
                  showObjective && 'text-primary'
                }`}
              >
                Les objectif
              </h3>
            </Button>
            <Button
              variant="link"
              onClick={() => {
                setShowContent(!showContent)
                setShowObjective(false)
              }}
              className="p-0 text-inherit no-underline hover:no-underline focus:no-underline active:no-underline"
            >
              <h3
                className={`text-lg font-bold text-foreground transition-colors duration-300 ${
                  showContent && 'text-primary'
                }`}
              >
                Le contenu
              </h3>
            </Button>

            <div
              className={`absolute bottom-0 h-0.5 bg-primary transition-all duration-300 ${
                showObjective
                  ? 'left-0 w-1/2'
                  : showContent
                    ? 'left-1/2 w-1/2'
                    : ''
              }`}
            ></div>
          </div>

          {showObjective && (
            <div className="flex flex-col gap-4">
              <div
                className={
                  showMoreObjective
                    ? 'flex flex-wrap gap-4 overflow-hidden'
                    : 'flex max-h-[30dvh] flex-wrap gap-4 overflow-hidden'
                }
              >
                <div>{parse(data.objectif_formation)}</div>
              </div>

              <Button
                onClick={() => setMoreShowObjective(!showMoreObjective)}
                className="p-0 text-sm text-foreground no-underline"
                variant="link"
              >
                {showMoreObjective ? <ButtonMinus /> : <ButtonPlus />}
              </Button>
            </div>
          )}
          {showContent && (
            <div className="flex flex-col gap-4">
              <div
                className={
                  showMoreContent
                    ? 'flex flex-wrap gap-4 overflow-hidden'
                    : 'flex max-h-[30dvh] flex-wrap gap-4 overflow-hidden'
                }
              >
                {parse(data.contenu_formation)}
              </div>
              <Button
                onClick={() => setMoreShowContent(!showMoreContent)}
                className="p-0 text-sm text-foreground no-underline"
                variant="link"
              >
                {showMoreContent ? <ButtonMinus /> : <ButtonPlus />}
              </Button>
            </div>
          )}
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

function ButtonPlus() {
  return (
    <>
      <p className="m-0 flex flex-row items-center font-bold transition-transform duration-300 ease-in-out hover:scale-95 hover:shadow-xl">
        <span className="text-lg font-extrabold">
          <TiPlus />
        </span>
        Afficher plus
      </p>
    </>
  )
}

function ButtonMinus() {
  return (
    <>
      <p className="m-0 flex flex-row items-center font-bold transition-transform duration-300 ease-in-out hover:scale-95 hover:shadow-xl">
        <span className="text-lg font-extrabold">
          <TiMinus />
        </span>
        Afficher moins
      </p>
    </>
  )
}

export default ClientPage
