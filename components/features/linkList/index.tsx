import React from 'react'
import ServerListLink from './serverListLink'

interface Props {
  name: string
  label?: string
}

function LinkList(props: Props) {
  const { name, label } = props

  return (
    <div className="mt-10">
      <h3 className="flex justify-center font-bold max-[465px]:text-lg">
        {label ?? name}
      </h3>
      <ul className="flex flex-wrap gap-3">
        <ServerListLink name={name} backgroundColor="bg-card" />
      </ul>
    </div>
  )
}

export default LinkList
