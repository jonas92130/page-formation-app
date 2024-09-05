import React from 'react'
import { Form, FormField, FormItem, FormControl } from '@/components/ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'

interface Props {}

function SearchBar(props: Props) {
  const {} = props

  const {control} = useForm()

  return (
   <Form>
    <FormField
      control={control}
      name="city"
      render={({field}) => (
        <Input
        {...field}
        placeholder="City"
        />
      )}
    />
    
     


   </Form> 
  )
}

export default SearchBar
