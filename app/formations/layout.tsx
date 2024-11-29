import NavBar from '@/components/navBar'
import React from 'react'
import ActualityHome from '../actualites/actualityHome'
import Container from '@/components/ui/container'
import ScrollToTop from '@/components/ui/scrollToTop'

interface Props {
  children: React.ReactNode
}

function Layout(props: Props) {
  const { children } = props

  return (
    <>
      <NavBar />
      <main className="mt-14 lg:mt-20">
        {children}
        <Container>
          <ActualityHome />
        </Container>
      </main>
    </>
  )
}

export default Layout
