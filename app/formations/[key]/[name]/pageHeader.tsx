import Container from '@/components/ui/container'
import React from 'react'

interface Props {
  name: string
  keyName: string
  totalCount: number
}

function PageHeader(props: Props) {
  const { name, keyName, totalCount } = props

  const connector = ['ville', 'lieu'].includes(keyName) ? 'à' : 'en'

  return (
    <div className="mx-auto w-[90%] max-w-[1100px] pt-10">
      <div className="rounded-lg bg-primary px-4 pb-8 pt-6 text-primary-foreground">
        {keyName === 'professionnel' ? (
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Formations{' '}
            <span className="text-2xl md:text-3xl lg:text-4xl">
              {connector} {name}
            </span>
          </h1>
        ) : (
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Formations{' '}
            <span className="text-2xl md:text-3xl lg:text-4xl">
              lié au métier de {name.toLowerCase()}
            </span>
          </h1>
        )}
        <p className="text-lg font-semibold md:text-xl">
          <span className="text-secondary">{totalCount}</span> formations
          trouvées.
        </p>
      </div>
    </div>
  )
}

export default PageHeader
