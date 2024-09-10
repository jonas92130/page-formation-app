import type { Collection } from 'tinacms'

const collectionKeyNames = [
  { name: 'domain', label: 'Page de formation par domaine' },
  { name: 'lieu', label: 'Page de formation par lieu' },
]

export const FormationsPagesCollections: Collection[] = collectionKeyNames.map(
  (filter) => ({
    name: filter.name,
    label: filter.label,
    path: 'content/formationsPage/' + filter.name,
    format: 'md',
    fields: [
      {
        type: 'object',
        name: 'metadata',
        label: 'Page Metadata',
        fields: [
          { type: 'string', name: 'titre', label: 'Title' },
          { type: 'string', name: 'description', label: 'Description' },
          {
            type: 'boolean',
            name: 'isIndexed',
            label: 'indexation disponible',
            default: true,
          },
          { type: 'string', name: 'keywords', label: 'Mots clés', list: true },
        ],
      },
    ],
  })
)
