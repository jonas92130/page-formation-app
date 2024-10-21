import React from 'react'
import { Card, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface Props {
  title: string
  image: string
  filename: string
  alt: string
}

export default async function ActualityCard(props: Props) {
  const { image, title, filename, alt } = props

  return (
    <>
      <Card
        className={cn(
          'flex h-28 w-[100%] transform items-center overflow-hidden rounded-[12px] shadow-md transition-transform duration-300 ease-in-out hover:scale-95 hover:shadow-lg md:max-w-[80%] lg:h-[25vh] lg:w-[80%]'
        )}
      >
        <div className="flex h-full w-full items-center">
          <div className="h-full w-2/4">
            <img
              src={image}
              className="h-full w-full object-cover"
              alt={`${alt}`}
            />
          </div>

          <div className="w-2/3 p-4">
            <CardHeader className="p-0">
              <Link href={`/actualites/${filename}`}>
                <h3 className="m-0 line-clamp-2 max-[465px]:text-xs">
                  {title}
                </h3>
              </Link>
            </CardHeader>
          </div>
        </div>
      </Card>
    </>
  )
}
