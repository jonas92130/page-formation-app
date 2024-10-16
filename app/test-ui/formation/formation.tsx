import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

interface Props {
  title: string
  label: string
  backgroundColor?: string
  isArrow?: boolean
}

export default function Formation(props: Props) {
  const { title, label, backgroundColor, isArrow } = props

  return (
    <div
      className={`gap-3 rounded-xl ${backgroundColor} flex h-[15dvh] flex-col justify-center p-[15px] text-background lg:w-[50%]`}
    >
      {isArrow && (
        <div className="absolute right-7 top-[70%] -translate-y-1/2 pr-2 text-[20px] text-background">
          <FaArrowRight />
        </div>
      )}
      <h2 className="m-0 font-bold max-[465px]:text-base">{title}</h2>
      <p className="max-[465px]:text-xs">{label}</p>
    </div>
  )
}
