import React from 'react'
import client from '@/tina/__generated__/databaseClient'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const CITIES = [
  'Toulouse',
  'Nice',
  'Nantes',
  'Montpellier',
  'Strasbourg',
  'Lille',
  'Rennes',
  'Reims',
  'Toulon',
  'Saint-Étienne',
  'Le Havre',
  'Grenoble',
  'Dijon',
  'Angers',
  'Villeurbanne',
  'Saint-Denis',
  'Nîmes',
  'Clermont-Ferrand',
  'Aix-en-Provence',
  'Brest',
  'Limoges',
  'Tours',
  'Amiens',
  'Perpignan',
  'Metz',
  'Besançon',
]

export default async function CitiesServerList(props: { className?: string }) {
  const { data } = await client.queries.cityConnection()
  const { className } = props

  return (
    <div className={cn('lg:flex-row', className)}>
      <div className="mb-8">
        <h2 className="mb-3 text-2xl lg:text-3xl">Les formations par ville</h2>
      </div>
      <div className="items-center lg:flex">
        <div className="lg:w-3/5">
          <div className="gap-4 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2">
            {data.cityConnection.edges?.map((city) => {
              if (!city || !city.node) return null
              return (
                <Link
                  key={city.node.title}
                  href={
                    city.node.title === 'Paris'
                      ? '/formations/lieu/Paris'
                      : `/formations/ville/${city.node.title}`
                  }
                >
                  <div
                    key={city.node.title}
                    className="relative my-5 h-[21vh] w-full rounded-lg bg-cover bg-center shadow-lg md:max-w-[90%] lg:h-[24vh]"
                    style={{
                      backgroundImage: `url(${city.node.image})`,
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center rounded-lg">
                      <p className="text-3xl font-bold text-white">
                        {city.node.title}
                      </p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        <div className="lg:w-3/5">
          <div className="flex justify-center text-sm font-bold lg:mt-8">
            <CityLink />
          </div>
        </div>
      </div>
    </div>
  )
}

function CityLink() {
  return (
    <div className="">
      {CITIES.map((city) => (
        <Button
          key={city}
          asChild
          variant="link"
          size={'lg'}
          className="bg-card px-3 text-base font-bold text-foreground md:text-lg"
        >
          <Link href={`/formations/ville/${city}`}>{city}</Link>
        </Button>
      ))}
    </div>
  )
}
