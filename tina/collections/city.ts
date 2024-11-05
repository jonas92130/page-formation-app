import type { Collection } from 'tinacms'

export const CityCollection: Collection = {
  name: 'city',
  label: 'Villes',
  path: 'content/city',
  format: 'md',
  ui: {
    router: () => '/',
  },
  fields: [
    {
      type: 'string',
      label: 'Nom de la ville',
      name: 'title',
    },
    {
      type: 'image',
      label: 'Image de la ville',
      name: 'image',
    },
    {
      type: 'string',
      label: 'Image alternative',
      name: 'imageAlt',    },
  ],
}
