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
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import './style.css'
import { Button } from '@/components/ui/button'

export default async function PostPage({ params }: { params: { id: string } }) {
  const data = await client.queries.blog({
    relativePath: `${params.id}.md`,
  })
  const date = parseISO(data.data.blog.date)

  const Cta = (props) => {
    return <h2>{props.heading1}</h2>
  }

  return (
    <div>
      <h1 className="min-[320px]:mx-2 min-[320px]:my-5">Mon actualité</h1>
      <Breadcrumb className="font-italic min-[320px]:mx-4 min-[320px]:my-7">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/" className="min-[320px]:text-xs">
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/actualites" className="min-[320px]:text-xs">
                Actualités
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="min-[320px]:text-xs">
              Mon actualité
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="bg-primary-400">
        <h2 className="text-white max-[320px]:text-2xl min-[320px]:my-2 min-[320px]:bg-blue-400 min-[320px]:px-3 min-[320px]:py-10">
          {data.data.blog.title}
        </h2>
      </div>
      <div className="min-[320px]:my-2">
        <time className="italic min-[320px]:mx-6 min-[320px]:text-xs">
          {format(date, 'dd/MM/yyyy')}
        </time>
      </div>
      <div className="min-[320px]:p-6">
        <img src={data.data.blog.image}></img>
      </div>
      <div className="min-[320px]:mx-5">
        <h3 className="text-xl font-bold min-[320px]:mt-3">Les objectifs</h3>
        <hr className="bg-blue-400 min-[320px]:mb-3 min-[320px]:h-2 min-[320px]:w-9/12 min-[320px]:rounded-lg" />
      </div>
      <div className="p-5 text-left">
        <p>{data.data.blog.description}</p>
        <div>
          <TinaMarkdown components={{ Cta }} content={data.data.blog.content} />
        </div>
      </div>
      <div className="flex justify-center min-[320px]:my-5">
        <Link href="/actualites">
          <Button className="bg-blue-400">Voir toutes les actualités</Button>
        </Link>
      </div>
    </div>
  )
}
