import {
  UsernamePasswordAuthJSProvider,
  TinaUserCollection,
} from 'tinacms-authjs/dist/tinacms'
import { defineConfig, LocalAuthProvider } from 'tinacms'

import { PageCollection } from './collections/page'
import { FormationsPagesCollections } from './collections/formationsPage'
import { IndexationPageCollection } from './collections/indexation'
import { BlogCollection } from './collections/blog'

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === 'true'

export default defineConfig({
  authProvider: isLocal
    ? new LocalAuthProvider()
    : new UsernamePasswordAuthJSProvider(),
  contentApiUrlOverride: '/api/tina/gql',
  build: {
    publicFolder: 'public',
    outputFolder: 'admin',
  },
  media: {
    loadCustomStore: async () => {
      const pack = await import('next-tinacms-s3')
      return pack.TinaCloudS3MediaStore
    },
  },
  schema: {
    collections: [
      TinaUserCollection,
      PageCollection,
      IndexationPageCollection,
      ...FormationsPagesCollections,
      BlogCollection,
    ],
  },
})
