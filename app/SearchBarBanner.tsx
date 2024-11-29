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
import Image from 'next/image'

const CATEGORIES = [
  'Agriculture & Peche',
  'Anglais',
  'Secrétariat',
  'Esthétique',
  'Informatique',
  'Management',
  'Marketing',
  'Ressources Humaines',
]

const CategoriesButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="list"
          className="h-8 bg-secondary px-3 text-background lg:h-10 lg:px-5 lg:text-base"
        >
          Toutes les catégories
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Dialog Titre</DialogTitle>
        <DialogDescription>Dialog Description</DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export default function SearchBarBanner() {
  return (
    <div className="relative bg-primary p-0 pt-10 text-primary-foreground md:p-4 md:pt-0">
      <div className="mx-auto flex w-[90%] max-w-[1100px] items-center lg:flex-row xl:justify-end 2xl:relative">
        <div className="2xl hidden w-[40%] max-w-[550px] lg:block lg:self-end xl:absolute xl:-bottom-5 xl:left-[2%] 2xl:-left-[13%] 2xl:w-[550px]">
          <img src="/searchbar.png" alt="Search Bar" />
        </div>
        <div className="flex w-full flex-col pb-12 pt-8 lg:w-[60%]">
          <div className="flex w-full flex-col">
            <h1 className="text-2xl font-bold text-background md:text-3xl lg:text-4xl">
              Comparez, choisissez, progressez.
            </h1>
            <p className="-mt-2 max-w-[500px] text-base font-semibold text-background md:-mt-1 md:text-lg lg:mt-2 lg:text-xl">
              <span className="text-secondary">388 867 formations</span> à
              comparer pour trouver celle qui vous correspond vraiment.
            </p>
          </div>
          <div className="mt-4 w-full md:mt-8">
            <SearchBar />
          </div>
          <div className="mt-8 hidden flex-wrap items-center gap-x-6 gap-y-4 md:flex lg:mt-12">
            {CATEGORIES.map((category) => (
              <Button
                key={category}
                asChild
                variant="list"
                className="h-8 bg-card px-3 text-primary lg:h-10 lg:px-5 lg:text-base"
              >
                <Link href={`/formations/recherche?query=${category}`}>
                  {category}
                </Link>
              </Button>
            ))}
            <div className="w-full">
              <CategoriesButton />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-0.5 left-0 right-0">
        <Image
          src={'/bottom-header.svg '}
          alt="bottom-header"
          width={1920}
          height={94}
        />
      </div>
    </div>
  )
}
