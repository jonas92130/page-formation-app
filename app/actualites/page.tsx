import React from 'react'
import { client } from '../../tina/__generated__/databaseClient'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Card, CardHeader } from '@/components/ui/card'
import './[id]/style.css'
import { Button } from '@/components/ui/button'

type CardProps = React.ComponentProps<typeof Card>

export default async function Actu({ className, ...props }: CardProps) {
  const { data } = await client.queries.blogConnection()

  return (
    <>
      <div className="max-w-full">
        <h2 className="mx-4 my-5 flex justify-start text-lg">Actualités</h2>
        <div>
          {data.blogConnection.edges?.slice(0, 3).map((blog) => {
            return (
              <>
                <div key={blog?.node?.id} className="mx-4">
                  <Card
                    className={cn(
                      'w-full',
                      className,
                      'my-3 flex transform items-center overflow-hidden rounded-[12px] shadow-md transition-transform duration-300 ease-in-out hover:scale-95 hover:shadow-2xl'
                    )}
                    {...props}
                  >
                    <div className="flex w-full flex-row items-center">
                      <div className="w-1/3">
                        <img
                          src={blog?.node?.image}
                          alt="Blog Image"
                          className=""
                        />
                      </div>

                      <div className="w-2/3">
                        <CardHeader className="p-2">
                          <Link
                            href={`/actualites/${blog?.node?._sys.filename}`}
                          >
                            <h3 className="m-0 line-clamp-2 max-[465px]:text-xs">
                              {blog?.node?.title}
                            </h3>
                          </Link>
                        </CardHeader>
                      </div>
                    </div>
                  </Card>
                </div>
              </>
            )
          })}
        </div>

        <Button className="items-center rounded-full">
          Voir toutes les actualités
        </Button>
      </div>
    </>
  )
}
