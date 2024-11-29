import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

function Container(props: Props) {
  const { children, className } = props

  return (
    <div
      className={cn(
        'w-full border-t pb-10 pt-4 md:pb-12 md:pt-6 lg:pb-16 lg:pt-8',
        className
      )}
    >
      <div className="mx-auto flex w-[90%] max-w-[1100px] flex-col">
        {children}
      </div>
    </div>
  )
}

export default Container
