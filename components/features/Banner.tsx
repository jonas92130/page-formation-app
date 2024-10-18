import React from 'react'
import { Input } from '../ui/input'
import { Checkbox } from '../ui/checkbox'
import { FaSearch } from 'react-icons/fa'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function SearchBar() {
  return (
    <div className="relative flex justify-center pb-5 lg:pt-[50px]">
      <div
        className="absolute bottom-0 left-0 right-0 top-0 bg-primary lg:w-[100%]"
        style={{ clipPath: 'circle(95% at 50% 0)' }}
      ></div>
      <div className="visible relative max-[768px]:hidden lg:w-1/2">
        <img src="/searchbar.png" alt="Search Bar" />
      </div>
      <div className="relative flex w-[80%] flex-col gap-5 lg:w-1/2">
        <h1 className="visible m-0 pt-5 text-background max-[768px]:hidden">
          Comparez, choisissez, progressez.
        </h1>
        <h3 className="visible m-0 mt-5 text-base font-extralight uppercase text-background lg:hidden lg:font-semibold">
          388 867 formations,
          <br /> et forcément la vôtre
        </h3>
        <h3 className="visible text-background max-[768px]:hidden">
          <span className="text-secondary">388 867 formations</span> à comparer
          pour trouver celle <br /> qui vous correspond vraiment.
        </h3>
        <Search />
        <div className="visible flex w-[62%] flex-wrap gap-x-2 gap-y-4 max-[768px]:hidden">
          <Button variant="list" className="bg-card">
            <Link href="">Agriculture & Peche</Link>
          </Button>
          <Button variant="list" className="bg-card">
            <Link href="">Anglais</Link>
          </Button>
          <Button variant="list" className="bg-card">
            <Link href="">Secrétariat</Link>
          </Button>
          <Button variant="list" className="bg-card">
            <Link href="">Esthétique</Link>
          </Button>
          <Button variant="list" className="bg-card">
            <Link href="">Anglais</Link>
          </Button>
          <Button variant="list" className="bg-card">
            <Link href="">VAE</Link>
          </Button>
        </div>

        <div className="visible flex gap-2 max-[768px]:hidden">
          <Button variant="list" className="bg-secondary">
            <Link href="">Toutes les catégories</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

function Search() {
  return (
    <div className="flex w-full flex-col gap-5 lg:flex-row">
      <div className="flex w-full flex-col gap-5">
        <div className="flex flex-col gap-6 lg:flex-row">
          <Input
            placeholder="Métier, Cértification, formation"
            className="placeholder:gray-100 text-xs placeholder:opacity-40"
            type="text"
          />
          <Input
            placeholder="Où ?"
            type="text"
            className="placeholder:gray-100 text-xs placeholder:opacity-40"
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="formation-cpf" />
          <label
            htmlFor="formation-cpf"
            className="text-xs font-thin text-background"
          >
            Formations financées par le CPF
          </label>
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="flex w-fit items-center gap-2 px-4 rounded-full bg-secondary py-3 hover:bg-secondary">
          <FaSearch className="text-background" />
          <p className="visible text-sm font-semibold text-white lg:hidden">
            Trouver ma formation
          </p>
        </Button>
      </div>
    </div>
  )
}
