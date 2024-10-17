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
      <div className='mt-20'>
        <h3 className="my-5 flex justify-start lg:text-3xl">Actualités</h3>
        <div className="flex gap-6 min-[320px]:flex-col lg:flex-row pt-5">
          {data.blogConnection.edges?.slice(0, 3).map((blog) => {
            return (
              <div key={blog?.node?.id}>
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
        <Button className="mt-8 items-center rounded-full" asChild>
          <Link href="actualites/">Voir toutes les actualités</Link>
        </Button>
      </div>
    </>
  )
}
