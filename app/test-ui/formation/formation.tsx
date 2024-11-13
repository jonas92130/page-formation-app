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
      className={`gap-3 rounded-xl ${backgroundColor} relative flex h-[18dvh] w-[95%] flex-col justify-center p-[30px] text-background md:max-w-[80%] lg:max-w-[37%]`}
    >
      {isArrow && (
        <div className="absolute left-[90%] top-[50%] translate-y-[-50%] flex text-[20px] text-background">
          <FaArrowRight />
        </div>
      )}
      <h2 className="m-0 font-bold max-[465px]:text-base">{title}</h2>
      <p className="max-[465px]:text-xs">{label}</p>
    </div>
  )
}
