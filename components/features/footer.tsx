import { cn } from '@/lib/utils'
import React from 'react'

export default function Footer(
  props: { className?: string } = { className: '' }
) {
  const { className } = props
  return (
    <footer
      className={cn(
        'flex flex-col gap-6 bg-secondary/90 p-5 text-sm text-background lg:p-16',
        className
      )}
    >
      <div className="flex flex-col gap-3 lg:flex-row">
        <a href="">Liste des Formations</a>
        <a href="">Liste des Formations à distance</a>
        <a href="">Liste des Localités</a>
      </div>
      <div className="flex flex-col gap-3 lg:absolute lg:right-10 lg:flex-row">
        <a href="">Contactez-nous</a>
        <a href="">Mentions légales</a>
      </div>
    </footer>
  )
}
