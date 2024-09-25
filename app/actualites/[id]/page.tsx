import React from 'react'
import client from '@/tina/__generated__/databaseClient'
import { parseISO, format } from 'date-fns'
import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export default async function PostPage({ params }: { params: { id: string } }) {
  const data = await client.queries.blog({
    relativePath: `${params.id}.md`,
  })
  const date = parseISO(data.data.blog.date)

  return (
    <div>
      <h1 className="text-3xl font-bold min-[320px]:mx-2 min-[320px]:my-5">
        Mon actualité
      </h1>
      <Breadcrumb className="font-italic min-[320px]:mx-4 min-[320px]:my-7">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/" className="text-xs">
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/actualites" className="text-xs">
                Actualités
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-xs">Mon actualité</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="bg-primary-400">
        <p className="font-bold text-white min-[320px]:my-2 min-[320px]:bg-blue-400 min-[320px]:px-3 min-[320px]:py-10">
          {data.data.blog.title}
        </p>
      </div>
      <div className="min-[320px]:my-2">
        <time
          dateTime={data.data.blog.date}
          className="min-[320px]: text-xs italic min-[320px]:mx-6"
        >
          {format(date, 'd/MM/yyyy')}
        </time>
      </div>
      <div className="min-[320px]:p-6">
        <img src={data.data.blog.image}></img>
      </div>
      <h3 className="text-xl font-bold min-[320px]:ml-6 min-[320px]:mt-4">
        Les objectifs
      </h3>
      <hr className="bg-blue-400 min-[320px]:my-3 min-[320px]:h-2 min-[320px]:w-1/2 min-[320px]:rounded-lg" />
      <p>{data.data.blog.description}</p>
    </div>
  )
}
