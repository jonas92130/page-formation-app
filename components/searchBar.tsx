import React from 'react'
import { Input } from './ui/input'
import { Checkbox } from './ui/checkbox'
import { FaSearch } from 'react-icons/fa'
import { Button } from './ui/button'

export default function SearchBar() {
  return (
    <div className="relative flex justify-center pb-10 pt-3">
      <div
        className="absolute bottom-0 left-0 right-0 top-0 bg-primary"
        style={{ clipPath: 'circle(90% at 50% 0)' }}
      ></div>
      <div className="relative flex flex-col gap-5">
        <h3 className="m-0 text-base font-light uppercase text-background">
          388 867 formations,
          <br /> et forcément la vôtre
        </h3>
        <Search />
        <div className="flex justify-center">
          <Button className="flex w-fit items-center gap-2 rounded-full bg-secondary py-3">
            <FaSearch className="text-background" />
            <p className="text-sm font-semibold text-white">
              Trouver ma formation
            </p>
          </Button>
        </div>
      </div>
    </div>
  )
}

function Search() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-6">
        <Input placeholder="" className="w-[85vw]" />
        <Input placeholder="" className="w-[85vw]" />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="formation-cpf" />
        <label
          htmlFor="formation-cpf"
          className="text-xs font-extralight text-background"
        >
          Formations financées par le CPF
        </label>
      </div>
    </div>
  )
}
