import { FranceTravailApiHandler } from '../../back/FranceTravailApiHandler'
import { CPFApiHandler } from '../../back/CPFApiHandler'

export default async function handler(req, res) {
  // const franceTravailApiHandler = new FranceTravailApiHandler()
  const cpFApiHandler = new CPFApiHandler()

  try {
    res.status(200).json({ name: 'John Doe' })
  } catch (error) {
    console.log('error:', error)
    res.status(500).json({ error: error.message })
  }
}
