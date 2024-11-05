import React from 'react'
import { Input } from '../components/ui/input'
import { Checkbox } from '../components/ui/checkbox'
import { FaSearch } from 'react-icons/fa'
import { Button } from '../components/ui/button'
import SearchBar from '@/components/features/searchBar'
import Link from 'next/link'

export default function SearchBarBanner() {
  return (
    <div className="relative flex justify-center pb-12 lg:pt-[50px]">
      <div
        className="absolute bottom-0 left-0 right-0 top-0 bg-primary max-[465px]:mb-[-45px] lg:w-[100%]"
        style={{ clipPath: 'circle(85% at 50% 0)' }}
      ></div>
      <div className="visible max-[768px]:hidden sm:relative lg:w-1/3">
        <img src="/searchbar.png" alt="Search Bar" />
      </div>
      <div className="relative flex w-[80%] flex-col gap-6 lg:w-2/3">
        <h1 className="lg:block m-0 pt-5 text-background hidden">
          Comparez, choisissez, progressez.
        </h1>
        <h3 className="block m-0 mt-5 text-base font-extralight uppercase text-background lg:hidden lg:font-semibold">
          388 867 formations,
          <br /> et forcément la vôtre
        </h3>
        <h3 className="lg:block m-0 text-background hidden">
          <span className="text-secondary">388 867 formations</span> à comparer
          pour trouver celle <br /> qui vous correspond vraiment.
        </h3>
        <SearchBar />
        <div className="visible flex flex-wrap items-center gap-x-6 gap-y-6 pt-4 max-[768px]:hidden lg:w-[62%]">
          <Button variant="list" className="bg-card px-5 py-6">
            <Link href="">Agriculture & Peche</Link>
          </Button>
          <Button variant="list" className="bg-card px-5 py-6">
            <Link href="">Anglais</Link>
          </Button>
          <Button variant="list" className="bg-card px-5 py-6">
            <Link href="">Secrétariat</Link>
          </Button>
          <Button variant="list" className="bg-card px-5 py-6">
            <Link href="">Esthétique</Link>
          </Button>
          <Button variant="list" className="bg-card px-5 py-6">
            <Link href="">Anglais</Link>
          </Button>
          <Button variant="list" className="bg-card px-5 py-6">
            <Link href="">VAE</Link>
          </Button>
        </div>

        <div className="visible flex gap-2 max-[768px]:hidden">
          <Button
            variant="list"
            className="bg-secondary px-5 py-6 text-background"
          >
            <Link href="">Toutes les catégories</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
