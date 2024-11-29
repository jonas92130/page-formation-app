import React from 'react'
import List from './List'

interface Props {
  name: string
  label?: string
  backgroundColor: string
  className?: string
  options: string[]
}

function LinkList(props: Props) {
  const { name, label, backgroundColor, className, options } = props

  return (
    <div className={className}>
      <h2 className="text-2xl lg:text-3xl">{label ?? name}</h2>
      <ul className="mt-6 flex flex-wrap gap-3 md:mt-8 lg:mt-10">
        <List
          name={name}
          backgroundColor={`${backgroundColor}`}
          facets={options}
        />
      </ul>
    </div>
  )
}

export default LinkList
