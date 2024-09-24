import React from 'react'
import client from '@/tina/__generated__/databaseClient'

export default async function PostPage({ params }: { params: { id: string } }) {
  const data = await client.queries.blog({
    relativePath: `${params.id}.md`,
  })

  console.log(data)
  return (
    <div>
      <div>LE POST :</div>
      <div>{data.data.blog.title}</div>
      <div>{data.data.blog.image}</div>
      <div>{data.data.blog.date}</div>
      <div>{data.data.blog.description}</div>
    </div>
  )
}
