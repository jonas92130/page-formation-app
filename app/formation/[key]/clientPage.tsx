'use client'

import React, { useState } from 'react'
import { Formation } from '@/model/formation'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Organization } from '@/model/organization'
import { FaStar } from 'react-icons/fa'
import { cn } from '@/lib/utils'
import { Divide } from 'lucide-react'

type Props = {
  data: Formation
  organization: Organization | null
}

function ClientPage(props: Props) {
  const { data, organization } = props
  const [showObjective, setShowObjective] = useState(true)
  const [showContent, setShowContent] = useState(false)

  return (
    <div className="relative mt-14">
      <div className="mb-4 bg-primary py-10 text-primary-foreground md:py-16 xl:py-24">
        <div className="mx-auto flex w-[90%] max-w-[1100px] flex-col gap-4 md:gap-8">
          <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">
            {data.intitule_formation}
          </h1>
          {data.nom_of && (
            <p className="font-light md:text-lg xl:text-lg">{data.nom_of}</p>
          )}
        </div>
      </div>
      <div className="fixed left-1/2 top-[30dvh] hidden w-[90%] max-w-[1100px] -translate-x-1/2 lg:flex lg:justify-end">
        <CTA data={data} />
      </div>
      <div className="mx-auto w-[90%] max-w-[1100px]">
        <div className="flex w-full flex-col gap-7 lg:w-[60%]">
          <Badges isDistance={data.nb_session_a_distance > 0} />
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
                <span className="flex items-center gap-2 font-bold">
                  💲 Prix
                </span>
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
            {data.intitule_certification && (
              <p className="flex flex-col gap-2">
                <span className="flex items-center gap-2 font-bold">
                  🎓 Certification
                </span>
                {data.intitule_certification}
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
            <div
              dangerouslySetInnerHTML={{
                __html: data.points_forts,
              }}
            ></div>
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
                  className={'gap-4 overflow-hidden'}
                  dangerouslySetInnerHTML={{ __html: data.objectif_formation }}
                ></div>
              </div>
            )}

            {showContent && (
              <div className="flex flex-col gap-4">
                <div
                  className={'gap-4 overflow-hidden'}
                  dangerouslySetInnerHTML={{ __html: data.contenu_formation }}
                ></div>
              </div>
            )}
          </div>
          {organization && <OrganizationCard organization={organization} />}
        </div>
      </div>
    </div>
  )
}

function OrganizationCard(props: { organization: Organization }) {
  const { organization } = props

  return (
    <div className="flex flex-col">
      <h2 className="text-lg font-bold md:text-xl">
        A propos de l'organisme de formation
      </h2>
      <p className="mt-4 font-bold">{organization.raison_sociale}</p>
      {organization.lieux_de_formation && (
        <div className="mt-6">
          <p className="">Lieux de formation:</p>
          {organization.lieux_de_formation.map((location, index) => (
            <p key={index} className="">
              {location.nom && <span>{location.nom} - </span>}
              {location.adresse.ville} ({location.adresse.code_postal})
            </p>
          ))}
        </div>
      )}
      {organization.score && (
        <Card className="mt-6 flex w-fit flex-col gap-4 px-6 py-2">
          {organization.score.notes && (
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <p className="mr-auto">Notes: {}</p>
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={cn(
                      index <= (organization.score?.notes?.global ?? 0) &&
                        'text-yellow-500'
                    )}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-1">
                <p className="">Accueil: {organization.score.notes.accueil}</p>
                <p className="">
                  Contenu de la formation:{' '}
                  {organization.score.notes.contenu_formation}
                </p>
                <p className="">
                  Equipe de formateurs:{' '}
                  {organization.score.notes.equipe_formateurs}
                </p>
                <p className="">
                  Moyen matériel: {organization.score.notes.moyen_materiel}
                </p>
                <p className="">
                  Accompagnement: {organization.score.notes.accompagnement}
                </p>
              </div>
            </div>
          )}
          <Badge className="self-end text-base">
            {organization.score.nb_avis} avis
          </Badge>
        </Card>
      )}
    </div>
  )
}

function Badges(props: { isDistance?: boolean; isCPF?: boolean }) {
  const { isDistance } = props

  return (
    <div className="flex gap-5 lg:mt-4">
      <Badge className="rounded-md md:text-base xl:text-lg">Eligible CPF</Badge>
      {isDistance && (
        <Badge className="rounded-md border border-primary bg-background text-primary md:text-base xl:text-lg">
          A distance
        </Badge>
      )}
    </div>
  )
}

function CTA(props: { data: Formation }) {
  const { data } = props

  return (
    <Card className="flex w-[30%] flex-col shadow-xl">
      <CardContent className="flex flex-col gap-10 py-8">
        <div className="flex w-full flex-col items-center gap-4">
          <p className="text-lg">Se former avec</p>
          <h2 className="text-lg font-bold">{data.nom_of}</h2>
        </div>

        <div className="flex flex-col gap-4">
          <Button className="w-full" size={'lg'}>
            En savoir plus
          </Button>
          <Button className="w-full" variant={'secondary'} size={'lg'}>
            Contacter un conseiller
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ClientPage
