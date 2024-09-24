import type { Collection } from 'tinacms'

export const BlogCollection: Collection = {
  name: 'blog',
  label: 'Actualites',
  path: 'content/blog',
  format: 'md',
  ui: {
    router: () => '/',
  },
  fields: [
    {
      name: 'title',
      label: 'Titre',
      type: 'string',
    },
    {
      name: 'date',
      label: 'Date',
      type: 'datetime',
    },
    {
      label: 'Description',
      name: 'description',
      type: 'string',
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'image',
      label: "Image de l'actualité",
      name: 'image',
    },
  ],
}
