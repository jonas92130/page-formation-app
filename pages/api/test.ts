import { FranceTravailApiHandler } from '@/back/FranceTravailApiHandler'

export default async function handler(req, res) {
  const franceTravailApiHandler = new FranceTravailApiHandler()

  try {
    const data = await franceTravailApiHandler.getAvis({
      organisme_formateur: 19940607500036,
    })
    res.status(200).json({ name: 'John Doe', data })
  } catch (error) {
    console.log('error:', error)
    res.status(500).json({ error: error.message })
  }
}
