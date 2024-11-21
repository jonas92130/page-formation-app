import { MongoClient } from 'mongodb'
import { QueryMongoParamsModel } from '@/lib/filter'

export class MongoDBHandler {
  private client: MongoClient = new MongoClient(process.env.MONGODB_URI ?? '')
  private db = this.client.db('page_formation')
  private formationsDB = this.db.collection('formations')
  private organizationsDB = this.db.collection('organizations')

  constructor() {}

  private async wrapFunction<T>(func: () => Promise<T>) {
    await this.client.connect()
    try {
      return await func()
    } finally {
      await this.client.close()
    }
  }

  private getPipelines(params: QueryMongoParamsModel) {
    const { query, match, limit, skip } = params

    const resultPipeline = [
      { $skip: skip ?? 0 },
      { $limit: limit ?? 20 },
      {
        $project: {
          _id: 0,
        },
      },
    ] as any[]
    const countPipeline = [{ $count: 'total_count' }] as any[]

    if (match) {
      resultPipeline.unshift(match)
      countPipeline.unshift(match)
    }
    if (query) {
      resultPipeline.unshift(query)
      countPipeline.unshift(query)
    }

    return { resultPipeline, countPipeline }
  }

  public async getFormations(params: QueryMongoParamsModel) {
    const { resultPipeline } = this.getPipelines(params)

    console.log('resultPipeline:', resultPipeline)

    return await this.wrapFunction(async () => {
      const cursorResult = this.formationsDB.aggregate(resultPipeline)

      return await cursorResult.toArray()
    })
  }

  public async getFormationsCount(params: QueryMongoParamsModel) {
    const { countPipeline } = this.getPipelines(params)
    return await this.wrapFunction(async () => {
      const cursorResult = this.formationsDB.aggregate(countPipeline)

      return await cursorResult.toArray()
    })
  }

  public async getKeyValues(key: string) {
    return await this.wrapFunction(async () => {
      const cursorResult = this.formationsDB.aggregate([
        {
          $group: {
            _id: `$${key}`,
            count: {
              $sum: 1,
            },
            value: { $first: `$${key}` },
          },
        },
        { $sort: { name: 1 } },
      ])

      return await cursorResult.toArray()
    })
  }

  public async getOrganization(id: string) {
    return await this.wrapFunction(async () => {
      const cursorResult = this.organizationsDB.findOne(
        { id: id },
        {
          projection: {
            _id: 0,
          },
        }
      )

      return await cursorResult
    })
  }
}
