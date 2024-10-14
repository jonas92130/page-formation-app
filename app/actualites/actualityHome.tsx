import React from 'react'
import { client } from '../../tina/__generated__/databaseClient'
import './[id]/style.css'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import ActualityCard from '@/components/features/linkList/actualityCard'

export default async function ActualityHome() {
  const { data } = await client.queries.blogConnection()

  return (
    <>
      <div className="">
        <h2 className="mx-4 my-5 flex justify-start max-[768px]:text-lg">
          Actualités
        </h2>
        <div className="flex min-[320px]:flex-col lg:flex-row">
          {data.blogConnection.edges?.slice(0, 3).map((blog) => {
            return (
              <div key={blog?.node?.id} className="mx-4">
                <ActualityCard
                  filename={`${blog?.node?._sys.filename}`}
                  image={`${blog?.node?.image}`}
                  title={`${blog?.node?.title}`}
                  alt={`${blog?.node?.imageAlt}`}
                />
              </div>
            )
          })}
        </div>
        <Button className="ml-[13px] items-center rounded-full" asChild>
          <Link href="actualites/">Voir toutes les actualités</Link>
        </Button>
      </div>
    </>
  )
}
