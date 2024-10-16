import React from 'react'
import ServerListLink from './serverListLink'

interface Props {
  name: string
  label?: string
  backgroundColor: string
}

function LinkList(props: Props) {
  const { name, label, backgroundColor } = props

  return (
    <div className="mt-10">
      <h3 className="flex font-bold lg:text-3xl">{label ?? name}</h3>
      <ul className="flex flex-wrap gap-3">
        <ServerListLink name={name} backgroundColor={`${backgroundColor}`} />
      </ul>
    </div>
  )
}

export default LinkList
