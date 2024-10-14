import React from 'react'
import client from '@/tina/__generated__/databaseClient'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function CitiesServerList() {
  const { data } = await client.queries.cityConnection()

  return (
    <div>
      <h3 className="mx-5 my-7 flex text-base">Les formations par ville</h3>
      <div className="lg:flex lg:flex-wrap">
        {data.cityConnection.edges?.map((city) => {
          return (
            <div
              className="my-4 flex h-[20dvh] basis-[34%] items-center justify-center bg-center bg-no-repeat text-white"
              style={{
                backgroundImage: `url(${city.node.image})`,
              }}
            >
              <h3 className="text-center">{city.node.title}</h3>
            </div>
          )
        })}
      </div>

      <CityLink />

      <Button className="mx-4 my-4 rounded-full px-8">
        <Link href="/city">Voir toutes les villes</Link>
      </Button>
    </div>
  )
}

function CityLink() {
  return (
    <div className="m-2 flex justify-evenly max-[768px]:text-sm">
      <Link href="" className="font-bold">
        Lille
      </Link>
      <Link href="" className="font-bold">
        Nantes
      </Link>
      <Link href="" className="font-bold">
        Nice
      </Link>
      <Link href="" className="font-bold">
        Strasbourg
      </Link>
      <Link href="" className="font-bold">
        Rennes
      </Link>
    </div>
  )
}
