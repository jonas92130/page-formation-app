'use client'

import React, { useLayoutEffect, useState } from 'react'
import NavBar from '@/components/navBar'
import { cn } from '@/lib/utils'

interface Props {}

function ClientNavbar(props: Props) {
  const {} = props

  const [showNav, setShowNav] = useState(false)

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowNav(true)
      } else {
        setShowNav(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setShowNav])

  return (
    <NavBar
      className={cn(
        'transition-transform md:-translate-y-full',
        showNav && 'md:translate-y-0'
      )}
    />
  )
}

export default ClientNavbar
