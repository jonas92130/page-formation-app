import { FranceTravailApiHandler } from "../../back/FranceTravailApiHandler";
import { CPFApiHandler } from "../../back/CPFApiHandler";

export default async function handler(req, res) {

  // const franceTravailApiHandler = new FranceTravailApiHandler()
  const cpFApiHandler = new CPFApiHandler()


  try {
    const data = await cpFApiHandler.getAll({limit: 20, refine: 'nom_departement:"Paris"'})
    res.status(200).json(data)
  } catch (error) {
    console.log('error:', error)
    res.status(500).json({ error: error.message })
  } 
}