import NavBar from '@/components/navBar'
import React from 'react'

interface Props {
  children: React.ReactNode
}

function Layout(props: Props) {
  const { children } = props

  return (
    <>
      <NavBar />
      <div className="background-image mt-10">{children}</div>
    </>
  )
}

export default Layout
