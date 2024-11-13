'use client'

import React from 'react'
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormDescription,
  FormMessage,
} from '@/components/ui/form'
import { AutoComplete } from '../ui/autocomplete'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'
import { Checkbox } from '../ui/checkbox'
import { useRouter } from 'next/navigation'
import useFilterSearchParams from '@/hook/useFilterSearchParams'
import { FaSearch } from 'react-icons/fa'
import useSWR from 'swr'
import axios from 'axios'
import { FormationFacetsResponseModel } from '@/model/formation'
import { FilterConnector } from '@/lib/filter'

interface Props {}

interface FormDataModel {
  query?: string
  lieu?: {
    value: string
    label: string
  }
}

function SearchBar(props: Props) {
  const {} = props

  const form = useForm<FormDataModel>()
  const { filterParams } = useFilterSearchParams()
  const router = useRouter()

  const handleSubmit = (data: FormDataModel) => {
    console.log(data)
    const query = data.query ? `query=${data.query}` : ''
    const city = data.lieu ? `lieu=${data.lieu.value}` : ''

    router.push(`/formations/recherche?${query}&${city}`)
  }

  const { data, isLoading } = useSWR<FormationFacetsResponseModel>(
    '/api/formation',
    async () => {
      const response = await axios.get('/api/formations/facets')
      return response.data
    }
  )

  const facets = data?.facets ?? []
  const regionFacets = facets.find(
    (facet) => facet.name === FilterConnector.lieu
  )
  const regionOptions =
    regionFacets?.facets.map((facet) => ({
      value: facet.value,
      label: facet.value,
    })) ?? []

  const regionOptionsWithNoValue = [
    { value: '', label: 'Toutes les régions' },
    ...regionOptions,
  ]

  const queryParams = filterParams.query ?? ''
  const cityParams = filterParams.lieu ?? ''

  return (
    <Form {...form}>
      <form
        className="flex w-full flex-col gap-5"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <div className="flex flex-col items-center gap-3 lg:flex-row">
          <FormField
            control={form.control}
            name="query"
            defaultValue={queryParams}
            render={(fields) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <Input
                    {...fields.field}
                    placeholder="Métier, Certification, formation"
                    className=""
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lieu"
            defaultValue={cityParams}
            render={(fields) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <AutoComplete
                    options={regionOptionsWithNoValue}
                    onValueChange={fields.field.onChange}
                    value={fields.field.value}
                    isLoading={isLoading}
                    placeholder="ville, lieu,..."
                    className="text-xs"
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <Checkbox id="formation-cpf" />
              <label
                htmlFor="formation-cpf"
                className="text-xs font-thin text-background lg:text-base"
              >
                Formations financées par le CPF
              </label>
            </div>
            <div className="flex justify-center">
              <Button
                className="flex w-fit items-center gap-2 rounded-full bg-secondary px-4 py-3 transition-transform duration-300 ease-in-out hover:scale-95 hover:bg-secondary hover:shadow-xl"
                type="submit"
              >
                <FaSearch className="text-background" />
                <p className="visible px-8 text-sm font-semibold text-white lg:hidden">
                  Trouver ma formation
                </p>
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  )
}

export default SearchBar
