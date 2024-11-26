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
          'h-[24dvh] w-[100%] transform items-center overflow-hidden rounded-[12px] shadow-md transition-transform duration-300 ease-in-out hover:scale-95 hover:shadow-lg'
        )}
      >
        <div className="flex h-full w-full flex-col items-center">
          <div className="h-3/4 w-full">
            <img
              src={image}
              className="h-full w-full object-cover"
              alt={`${alt}`}
            />
          </div>

          <div className="h-1/4 p-4">
            <CardHeader className="p-0">
              <Link href={`/actualites/${filename}`}>
                <h3 className="m-0 line-clamp-2 text-base">{title}</h3>
              </Link>
            </CardHeader>
          </div>
        </div>
      </Card>
    </>
  )
}
