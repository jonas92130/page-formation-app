'use client'

import React, { useState } from 'react'
import { Formation } from '@/model/formation'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { TiPlus } from 'react-icons/ti'
import { TiMinus } from 'react-icons/ti'
import { Button } from '@/components/ui/button'
import parse from 'html-react-parser'
import { Organization } from '@/model/organization'
import { FaStar } from 'react-icons/fa'
import { cn } from '@/lib/utils'

type Props = {
  data: Formation
  organization: Organization | null
}

function ClientPage(props: Props) {
  const { data, organization } = props
  const [showObjective, setShowObjective] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const GoalParse = parse(data.objectif_formation)
  const ContentParse = parse(data.contenu_formation)

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
        {/* <p className="flex flex-row items-center gap-1 text-base">
          <TiPlus className="text-2xl font-extrabold" />
          Voir des formations similaires
        </p> */}
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
        {organization?.score &&
        organization.score.notes &&
        organization.score.notes.global ? (
          <Card className="bg-primary/20 px-5 py-6">
            <p className="flex items-center gap-2 text-xl">
              {organization.score.notes?.global} / 5
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={cn(
                    index <= (organization.score?.notes?.global ?? 0) &&
                      'text-yellow-500'
                  )}
                />
              ))}
              {organization.score.nb_avis} avis
              {data.avis}
            </p>
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
              <div className={'gap-4 overflow-hidden'}>{GoalParse}</div>
            </div>
          )}

          {showContent && (
            <div className="flex flex-col gap-4">
              <div className={'gap-4 overflow-hidden'}>{ContentParse}</div>
            </div>
          )}
        </div>
        {organization && <OrganizationCard organization={organization} />}
      </div>
    </div>
  )
}

function OrganizationCard(props: { organization: Organization }) {
  const { organization } = props

  return (
    <Card className="flex flex-col gap-3 px-5 py-4">
      <h2 className="m-0 text-lg font-bold">Organisation</h2>
      <p className="m-0">{organization.raison_sociale}</p>
      {organization.lieux_de_formation && (
        <div>
          <p className="m-0">Lieux de formation:</p>
          {organization.lieux_de_formation.map((location, index) => (
            <p key={index} className="m-0">
              {location.nom && <span>{location.nom} - </span>}
              {location.adresse.ville} ({location.adresse.code_postal})
            </p>
          ))}
        </div>
      )}
      {organization.score && (
        <div className="flex flex-col gap-2">
          <p className="m-0"></p>
          <p className="m-0">Nombre d'avis: {organization.score.nb_avis}</p>
          {organization.score.notes && (
            <div className="flex flex-col gap-2">
              <p className="m-0">Notes:</p>
              <p className="m-0">Accueil: {organization.score.notes.accueil}</p>
              <p className="m-0">
                Contenu de la formation:{' '}
                {organization.score.notes.contenu_formation}
              </p>
              <p className="m-0">
                Equipe de formateurs:{' '}
                {organization.score.notes.equipe_formateurs}
              </p>
              <p className="m-0">
                Moyen matériel: {organization.score.notes.moyen_materiel}
              </p>
              <p className="m-0">
                Accompagnement: {organization.score.notes.accompagnement}
              </p>
              <p className="m-0">
                Note globale: {organization.score.notes.global}
              </p>
            </div>
          )}
        </div>
      )}
    </Card>
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
