import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'

interface Props {
  title: string
  label: string
  backgroundColor?: string
  isArrow?: boolean
  link: string
  className?: string
}

export default function Formation(props: Props) {
  const { title, label, backgroundColor, isArrow, link, className } = props

  return (
    <div
      className={`w-full rounded-xl ${backgroundColor} relative text-background ${className} max-w-[600px]`}
    >
      <Link
        href={link}
        className={`flex w-full flex-col justify-center gap-2 px-5 py-4 lg:px-10 lg:py-8`}
      >
        {isArrow && (
          <div className="absolute left-[85%] top-[50%] flex translate-y-[-50%] text-[20px] text-background sm:left-[90%]">
            <FaArrowRight />
          </div>
        )}
        <h2 className="m-0 text-base font-bold sm:text-lg lg:text-xl">
          {title}
        </h2>
        <p className="text-xs sm:text-base lg:text-lg">{label}</p>
      </Link>
    </div>
  )
}
