import React from 'react'
import ServerListLink from './serverListLink'

interface Props {
  name: string
  label?: string
  backgroundColor: string
  className?: string
}

function LinkList(props: Props) {
  const { name, label, backgroundColor, className } = props

  return (
    <div className={className}>
      <h2 className="text-2xl lg:text-3xl">{label ?? name}</h2>
      <ul className="flex flex-wrap gap-3">
        <ServerListLink name={name} backgroundColor={`${backgroundColor}`} />
      </ul>
    </div>
  )
}

export default LinkList
