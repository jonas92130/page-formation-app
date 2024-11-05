import React from 'react'

export default function Footer() {
  return (
    <div className="mt-16 flex flex-col gap-6 bg-secondary/90 p-5 text-sm text-background lg:p-16">
      <div className="flex flex-col gap-3 lg:flex-row">
        <a href="">Liste des Formations</a>
        <a href="">Liste des Formations à distance</a>
        <a href="">Liste des Localités</a>
      </div>
      <div className="flex flex-col gap-3 lg:absolute lg:right-10 lg:flex-row">
        <a href="">Contactez-nous</a>
        <a href="">Mentions légales</a>
      </div>
    </div>
  )
}
