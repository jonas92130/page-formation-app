import { MongoDBHandler } from '@/back/MongoDBHandler'
import { createQueryMongoParams } from '@/lib/filter'

export default async function handler(req, res) {
  const searchParams = req.query

  console.log('searchParams', searchParams)

  const params = createQueryMongoParams(searchParams)
  const api = new MongoDBHandler()
  const api2 = new MongoDBHandler()
  const promises = [api.getFormations(params), api2.getFormationsCount(params)]
  const [results, count] = await Promise.all(promises)

  const dataFormated = {
    results: results,
    total_count: count[0]?.total_count,
  }

  res.status(200).json(dataFormated)
}
