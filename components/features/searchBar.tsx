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
import { useRouter } from 'next/navigation'
import useFilterSearchParams from '@/hook/useFilterSearchParams'
import useSWR from 'swr'
import axios from 'axios'
import { FormationFacetsResponseModel } from '@/model/formation'
import { FiltreConnector } from '@/lib/filter'

interface Props {}

interface FormDataModel {
  query?: string
  region?: {
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
    const city = data.region ? `region=${data.region.value}` : ''

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
    (facet) => facet.name === FiltreConnector.region
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
  const cityParams = filterParams.region ?? ''

  return (
    <Form {...form}>
      <form
        className="mx-auto mt-8 flex w-fit items-center gap-x-4"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name="query"
          defaultValue={queryParams}
          render={(fields) => (
            <FormItem>
              <FormLabel />
              <FormControl>
                <Input {...fields.field} placeholder="métier..." />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="region"
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
                  placeholder="ville, region,..."
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Search</Button>
      </form>
    </Form>
  )
}

export default SearchBar
