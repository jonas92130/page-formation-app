import type { Collection } from 'tinacms'

export const IndexationPageCollection: Collection = {
  name: 'indexation',
  label: 'Indexation des pages',
  path: 'content/indexation',
  format: 'md',
  fields: [
    {
      type: 'string',
      name: 'name',
      label: 'Nom de la page',
    },
    {
      type: 'object',
      name: 'pages',
      label: 'Pages',
      list: true,
      ui: {
        itemProps: (item) => ({
          label: `${item.name} - ${item.isNotIndexed ? 'non indexée' : 'indexée'}`,
        }),
      },
      fields: [
        {
          type: 'string',
          name: 'name',
          label: 'Routes de la page',
          description: 'ex: /formations/lieu/paris',
        },
        {
          type: 'boolean',
          name: 'isNotIndexed',
          label: 'Ne pas indéxée la page ?',
        },
      ],
    },
  ],
}
