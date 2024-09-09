import { CPFApiHandler } from '../../../back/CPFApiHandler'

export default async function handler(req, res) {
  // const franceTravailApiHandler = new FranceTravailApiHandler()
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Méthode non autorisée' })
    return
  }

  const cpFApiHandler = new CPFApiHandler()

  try {
    const data = await cpFApiHandler.getFacets()
    res.status(200).json(data)
  } catch (error) {
    console.log('error:', error)
    res.status(500).json({ error: error.message })
  }
}
