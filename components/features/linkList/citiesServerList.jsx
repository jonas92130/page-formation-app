import React from 'react'
import client from '@/tina/__generated__/databaseClient'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function CitiesServerList() {
  const { data } = await client.queries.cityConnection()

  return (
    <div className="mt-20 bg-white pt-6 lg:flex-row">
      <div className="mb-8">
        <h3 className="mb-3 font-bold lg:text-3xl">Les formations par ville</h3>
      </div>
      <div className="items-center lg:flex">
        <div className="lg:w-3/5">
          <div className="gap-4 lg:grid lg:grid-cols-2">
            {data.cityConnection.edges?.map((city) => {
              return (
                <div
                  key={city.node.title}
                  className="relative my-5 h-[21vh] w-full rounded-lg bg-cover bg-center shadow-lg lg:h-[24vh]"
                  style={{
                    backgroundImage: `url(${city.node.image})`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center rounded-lg">
                    <h3 className="text-3xl font-bold text-white">
                      {city.node.title}
                    </h3>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="lg:w-3/5">
          <div className="mb-4 flex justify-center text-sm font-bold lg:mb-6 lg:mt-8 lg:text-lg">
            <CityLink />
          </div>

          <div className="relative flex justify-start lg:left-[110px] lg:mt-28">
            <Button className="rounded-full bg-primary px-8 py-3 font-bold text-white shadow-md">
              <Link href="/city">Voir toutes les villes</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function CityLink() {
  return (
    <div>
      <div className="mb-3 flex gap-2 text-xs lg:gap-4 lg:text-lg">
        <Link href="">Lille</Link>
        <Link href="">Nantes</Link>
        <Link href="">Nice</Link>
        <Link href="">Strasbourg</Link>
        <Link href="">Rennes</Link>
      </div>
      <div className="visible max-[465px]:hidden lg:text-lg">
        <div className="mb-3 flex lg:gap-4">
          <Link href="">Lille</Link>
          <Link href="">Nantes</Link>
          <Link href="">Nice</Link>
          <Link href="">Strasbourg</Link>
          <Link href="">Rennes</Link>
        </div>
        <div className="mb-3 flex lg:gap-4">
          <Link href="">Lille</Link>
          <Link href="">Nantes</Link>
          <Link href="">Nice</Link>
          <Link href="">Strasbourg</Link>
          <Link href="">Rennes</Link>
        </div>
        <div className="mb-3 flex lg:gap-4">
          <Link href="">Lille</Link>
          <Link href="">Nantes</Link>
          <Link href="">Nice</Link>
          <Link href="">Strasbourg</Link>
          <Link href="">Rennes</Link>
        </div>
        <div className="mb-3 flex lg:gap-4">
          <Link href="">Lille</Link>
          <Link href="">Nantes</Link>
          <Link href="">Nice</Link>
          <Link href="">Strasbourg</Link>
          <Link href="">Rennes</Link>
        </div>
        <div className="mb-3 flex lg:gap-4">
          <Link href="">Lille</Link>
          <Link href="">Nantes</Link>
          <Link href="">Nice</Link>
          <Link href="">Strasbourg</Link>
          <Link href="">Rennes</Link>
        </div>
      </div>
    </div>
  )
}
