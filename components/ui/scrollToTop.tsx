'use client'

import { useLayoutEffect, useState } from 'react'
import React from 'react'
import { Button } from './button'
import { FaChevronCircleUp } from 'react-icons/fa'
import { cn } from '@/lib/utils'

interface Props {}

function ScrollToTop(props: Props) {
  const {} = props

  const [isVisible, setIsVisible] = useState(false)

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div
      className={cn(
        'fixed bottom-20 right-5 z-50 shadow-md transition-opacity sm:bottom-24 sm:right-7 md:bottom-28 md:right-10 lg:bottom-32 xl:bottom-36',
        isVisible ? 'opacity-100' : 'opacity-0'
      )}
    >
      <Button variant={'outline'} onClick={scrollToTop}>
        <span className="hidden md:block">Aller en haut</span>
        <FaChevronCircleUp />
      </Button>
    </div>
  )
}

export default ScrollToTop
