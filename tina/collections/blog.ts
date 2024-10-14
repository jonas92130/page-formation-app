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
      name: 'category',
      label: 'Catégorie',
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
      label: 'Contenu',
      name: 'content',
      isBody: true,
      type: 'rich-text',
    },
    {
      type: 'image',
      label: "Image de l'actualité",
      name: 'image',
    },
    {
      name: 'imageAlt',
      label: 'Image alternative',
      type: 'string',
    },
  ],
}
