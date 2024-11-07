import React from 'react'
import { Button } from '../components/ui/button'
import SearchBar from '@/components/features/searchBar'
import Link from 'next/link'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

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
        <h1 className="m-0 hidden pt-5 text-background lg:block">
          Comparez, choisissez, progressez.
        </h1>
        <h3 className="m-0 mt-5 block text-base font-extralight uppercase text-background lg:hidden lg:font-semibold">
          388 867 formations,
          <br /> et forcément la vôtre
        </h3>
        <h3 className="m-0 hidden text-background lg:block">
          <span className="text-secondary">388 867 formations</span> à comparer
          pour trouver celle <br /> qui vous correspond vraiment.
        </h3>
        <SearchBar />
        <div className="hidden flex-wrap items-center gap-x-5 gap-y-6 pt-4 lg:flex lg:w-[62%]">
          <Button variant="list" className="bg-card p-5">
            <Link href="">Agriculture & Peche</Link>
          </Button>
          <Button variant="list" className="bg-card p-5">
            <Link href="">Anglais</Link>
          </Button>
          <Button variant="list" className="bg-card p-5">
            <Link href="">Secrétariat</Link>
          </Button>
          <Button variant="list" className="bg-card p-5">
            <Link href="">Esthétique</Link>
          </Button>
          <Button variant="list" className="bg-card p-5">
            <Link href="">Anglais</Link>
          </Button>
          <Button variant="list" className="bg-card p-5">
            <Link href="">VAE</Link>
          </Button>
        </div>

        <div className="hidden gap-2 max-[768px]:hidden lg:flex">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="list"
                className="bg-secondary px-4 py-5 text-background"
              >
                Toutes les catégories
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Dialog Titre</DialogTitle>
              <DialogDescription>Dialog Description</DialogDescription>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
