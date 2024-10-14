import React from 'react'
import { client } from '../../tina/__generated__/databaseClient'
import './[id]/style.css'
import ActualityCard from '@/components/features/linkList/actualityCard'

export default async function Actuality() {
  const { data } = await client.queries.blogConnection()

  const edges = data.blogConnection.edges ?? []

  const caterories = edges.map((blog) => {
    return blog?.node?.category
  })
  const categoryWithoutDoublon = [...new Set(caterories)]

  const blogFilteredByCategory = categoryWithoutDoublon.map((c) => {
    return {
      name: c,
      list: edges.filter((actuality) => actuality?.node?.category === c),
    }
  })

  return (
    <>
      <div className="max-w-full">
        <h2 className="mx-4 my-6 flex justify-start">Actualités</h2>
        <div>
          {blogFilteredByCategory.map((content, index) => {
            return (
              <div key={index}>
                <h3 className="mx-4 my-2">{content.name}</h3>
                {content.list.map((actuality) => {
                  return (
                    <div className="mx-4 flex lg:flex-row">
                      <ActualityCard
                        key={`${index}`}
                        filename={`${actuality?.node?._sys.filename}`}
                        image={`${actuality?.node?.image}`}
                        title={`${actuality?.node?.title}`}
                        alt={`${actuality?.node?.imageAlt}`}
                      />
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
