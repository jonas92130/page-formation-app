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
      <h1 className="max-[465px]:mx-2 max-[465px]:my-5">Mon actualité</h1>
      <Breadcrumb className="font-italic max-[465px]:mx-4 max-[465px]:my-7">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/" className="max-[465px]:text-xs">
                Accueil
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/actualites" className="max-[465px]:text-xs">
                Actualités
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="max-[465px]:text-xs">
              Mon actualité
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="bg-primary-400">
        <h2 className="my-2 bg-blue-400 px-3 py-10 text-2xl text-white">
          {data.data.blog.title}
        </h2>
      </div>
      <div className="my-2">
        <time className="mx-6 text-xs italic">
          {format(date, 'dd/MM/yyyy')}
        </time>
      </div>
      <div className="p-6">
        <img src={data.data.blog.image} alt='blog image'></img>
      </div>
      <div className="mx-5">
        <h3 className="mt-3 text-xl font-bold">Les objectifs</h3>
        <hr className="mb-3 h-2 w-9/12 rounded-lg bg-blue-400" />
      </div>
      <div className="p-5 text-left">
        <p>{data.data.blog.description}</p>
        <div>
          <TinaMarkdown components={{ Cta }} content={data.data.blog.content} />
        </div>
      </div>
      <div className="my-5 flex justify-center">
        <Link href="/actualites">
          <Button className="bg-blue-400">Voir toutes les actualités</Button>
        </Link>
      </div>
    </div>
  )
}
