import Link from 'next/link'
import SearchBar from './features/searchBar'
import React from 'react'

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from './ui/button'
import { FaSearch } from 'react-icons/fa'
import { cn } from '@/lib/utils'

interface Props {
  className?: string
}

const SearchDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button className="h-full text-primary" variant={'outline'}>
        <FaSearch />
      </Button>
    </DialogTrigger>
    <DialogContent className="bg-card">
      <DialogHeader>
        <DialogTitle>Trouver une formation</DialogTitle>
        <DialogDescription>
          Recherchez une formation par son nom, son code ou son organisme de
          formation
        </DialogDescription>
      </DialogHeader>
      <SearchBar isCpfShow={false} />
    </DialogContent>
  </Dialog>
)

function NavBar(props: Props) {
  const { className } = props

  return (
    <nav
      className={cn(
        'fixed left-0 right-0 top-0 z-20 flex h-14 w-full items-center justify-between border-b bg-card text-card-foreground shadow-md md:h-16',
        className
      )}
    >
      <div className="mx-auto flex h-full w-full max-w-[1100px] items-center justify-between md:w-[90%]">
        <div className="ml-2 font-bold text-primary md:ml-0 md:text-lg lg:text-xl">
          <Link href="/">PageFormation</Link>
        </div>
        <div className="hidden md:block">
          <SearchBar isCpfShow={false} />
        </div>
        <div className="h-full md:hidden">
          <SearchDialog />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
