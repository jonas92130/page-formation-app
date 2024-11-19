import React from 'react'

interface Props {}

function NavBar(props: Props) {
  const {} = props

  return (
    <nav className="fixed left-0 right-0 top-0 z-20 flex h-14 w-full items-center justify-between border-b bg-card text-card-foreground"></nav>
  )
}

export default NavBar
