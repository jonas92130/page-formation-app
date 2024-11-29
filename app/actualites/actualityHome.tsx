import React from 'react'
import { client } from '../../tina/__generated__/databaseClient'
import './[id]/style.css'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import ActualityCard from '@/components/features/linkList/actualityCard'
import { cn } from '@/lib/utils'

export default async function ActualityHome({
  className,
}: {
  className?: string
}) {
  const { data } = await client.queries.blogConnection()

  return (
    <div className={cn('w-full', className)}>
      <h2 className="flex text-2xl lg:text-3xl">Actualités</h2>
      <div className="mt-6 flex flex-col items-center justify-center gap-6 md:mt-10 md:flex-row md:items-stretch lg:mt-14 lg:flex-row lg:gap-16">
        {data.blogConnection.edges?.slice(0, 3).map((blog) => {
          return (
            <ActualityCard
              filename={`${blog?.node?._sys.filename}`}
              image={`${blog?.node?.image}`}
              title={`${blog?.node?.title}`}
              alt={`${blog?.node?.imageAlt}`}
              key={blog?.node?.id}
            />
          )
        })}
      </div>
      <Button className="mt-8 items-center rounded-full md:mt-12" asChild>
        <Link href="actualites/">Voir toutes les actualités</Link>
      </Button>
    </div>
  )
}
