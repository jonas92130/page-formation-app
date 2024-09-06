import { FormationsResponseModel } from '@/model/formation'
import axios from 'axios'

export class CPFApiHandler {
  private CPFaxios = axios.create({
    baseURL:
      'https://opendata.caissedesdepots.fr/api/explore/v2.1/catalog/datasets/moncompteformation_catalogueformation',
  })

  constructor() {}

  private async query<T>(options: any): Promise<T> {
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

  public async getAll(
    params = new URLSearchParams()
  ): Promise<FormationsResponseModel> {
    params.append('limit', '20')

    console.log('params:', params)
    const options = {
      method: 'GET',
      url: '/records',
      params: params,
    }

    return await this.query(options)
  }

  public async getFacets(): Promise<any> {
    const options = {
      method: 'GET',
      url: '/facets',
    }

    return await this.query(options)
  }
}
