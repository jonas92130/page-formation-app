import axios from 'axios'

export class CPFApiHandler {
  private CPFaxios = axios.create({
    baseURL: 'https://opendata.caissedesdepots.fr/api/explore/v2.1/catalog/datasets/moncompteformation_catalogueformation',
  })


  constructor() {
  }

  private async query(options: any) {
    try {
      const response = await this.CPFaxios.request(options)
      if (response.status !== 200) {
        console.log('response:', response)
        throw new Error('Erreur de requête')
      }

      return await response.data
    } catch (error) {
       console.error('error:', error.response.data)
       throw error.response.data
   }
  }

  public async getAll(params = {}) {
    const options = {
      method: 'GET',
      url: '/records',
      params: {
        limit: 20,
        ...params
      },
    }

    return await this.query(options)
  }
}