import type { Collection } from 'tinacms'

export const RSSCollection: Collection = {
  name: 'rss',
  label: 'Flux RSS',
  path: 'content/rss',
  format: 'md',
  fields: [
    {
      type: 'string',
      name: 'name',
      label: 'Nom de la page',
    },
    {
      type: 'string',
      name: 'url',
      label: 'URL du flux RSS',
    },
  ],
}
