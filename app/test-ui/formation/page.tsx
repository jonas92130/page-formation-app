import React from 'react'

interface Props {
  title: string
  label: string
  backgroundColor?: string
}

export default function Formation(props: Props) {
  const { title, label, backgroundColor } = props

  return (
    <>
      <div
        className={`mx-5 mt-6 rounded-xl ${backgroundColor} flex h-[15dvh] flex-col justify-center p-[15px] text-background lg:w-[26vw]`}
      >
        <h2 className="mb-2 mt-0 font-bold max-[465px]:text-base">{title}</h2>
        <p className="max-[465px]:text-xs">{label}</p>
      </div>
    </>
  )
}
