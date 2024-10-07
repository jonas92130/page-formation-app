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
        className={`mx-5 mt-6 rounded-xl ${backgroundColor} p-4 text-background`}
      >
        <h2 className="font-bold max-[465px]:text-base">{title}</h2>
        <p className="max-[465px]:text-xs">{label}</p>
      </div>
    </>
  )
}
