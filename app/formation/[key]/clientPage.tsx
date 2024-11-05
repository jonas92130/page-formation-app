import React from 'react'
import { Formation } from '@/model/formation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription } from '@/components/ui/card'
type Props = {
  data: Formation
}

function ClientPage(props: Props) {
  const { data } = props
  console.log(data)
  return (
    <>
      <h1 className='font-bold lg:text-3xl'>{data.intitule_formation}</h1>
      <p>{data.nom_of}</p>
      <div className='flex gap-5 py-2'>
        <Button>Eligibles CPF</Button>
        <Button>A distance</Button>
      </div>
      <Card>
        <CardDescription>Durée : {data.nombre_heures_total_max}h de formation</CardDescription>
        <CardDescription>Prix : {data.frais_ttc_tot_max}€</CardDescription>
        <CardDescription>Localisation : {data.nom_departement} {data.code_departement}</CardDescription>
      </Card>
      <Card>
       {data.avis ? <CardContent>4,3 ⭐️⭐️⭐️⭐️⭐️ 100 avis{data.avis}</CardContent> : null}
      </Card>
      <h4>Objectif</h4>
      <p>{data.objectif_formation}</p>
      <h4>Contenu</h4>
      <p>{data.contenu_formation}</p>
      <h4>Points Forts</h4>
      <p>{data.points_forts}</p>
    </>
  )
}

export default ClientPage
