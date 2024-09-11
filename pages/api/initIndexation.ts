import { client } from '@/tina/__generated__/databaseClient'
import { CPFApiHandler } from '@/back/CPFApiHandler'
import { relative } from 'path'
import { FilterConnector } from '@/lib/filter'

export default async function handler(req, res) {
  // const franceTravailApiHandler = new FranceTravailApiHandler()
  const apiCPF = new CPFApiHandler()
  const facets = await apiCPF.getFacets()

  console.log('facets:', facets)

  try {
    await client.request({
      query: `
       mutation {
          updateIndexation(relativePath: "toutes_les_pages.md", params: {name: "pages", pages: [{name: "test", isIndexed: true}, {name: "test2", isIndexed: false}]}) {
            name
            pages {
              name
              isIndexed
            }
          }
        }
      `,
      variables: null,
      user: null,
    })

    res.status(200).json({ name: 'John Doe' })
  } catch (error) {
    console.log('error:', error)
    res.status(500).json({ error: error.message })
  }
}
