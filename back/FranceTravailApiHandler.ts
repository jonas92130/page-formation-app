import axios, { AxiosInstance } from 'axios'

export class FranceTravailApiHandler {
  bearerToken: string = ''
  private annoteaAxios = axios.create({
    baseURL: 'https://api.francetravail.io/partenaire/anotea/v1',
  })
  private openFormationAxios = axios.create({
    baseURL: 'https://api.francetravail.io/partenaire/openformation/v1',
  })

  constructor() {
    // this.getBearerToken().then((token) => {
    //   this.bearerToken = token
    // })
    this.bearerToken = ''
  }

  private async query(options: any) {
    try {
      const response = await axios(options)
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

  private async queryWithBearerToken(options: any, count = 3) {
    try {
      console.log('bearerToken:', this.bearerToken)
      const optionsWithBearerToken = {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${this.bearerToken}`,
        },
      }

      const currentAxios = this.annoteaAxios

      const response = await currentAxios.request(optionsWithBearerToken)
      if (response.status !== 200) {
        if (response.status === 500) {
          if (count > 0) {
            await this.refreshToken()
            return await this.queryWithBearerToken(options, count - 1)
          }
        }
        throw response.data
      }

      return await response.data
    } catch (error) {
      if (error.response.status === 500) {
        if (count > 0) {
          await this.refreshToken()
          return await this.queryWithBearerToken(options, count - 1)
        }
      }

      console.error('error:', error.response.data)
      throw error.response.data
    }
  }

  async getBearerToken() {
    const clientID = process.env.FT_USER_ID
    const clientSecret = process.env.FT_USER_SECRET
    const response = await this.query({
      url: 'https://entreprise.francetravail.fr/connexion/oauth2/access_token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: {
        realm: '/partenaire',
      },
      data: {
        grant_type: 'client_credentials',
        client_id: clientID,
        client_secret: clientSecret,
        scope: 'api_anoteav1 api_openformationv1 openFormation',
      },
    })
    console.log('response:', response.access_token)
    return response.access_token
  }

  private async refreshToken() {
    this.bearerToken = await this.getBearerToken()
  }

  async getAvis(params = {}) {
    const response = await this.queryWithBearerToken({
      url: '/avis',
      method: 'GET',
      params,
    })
    return response
  }

  async getFormationDetails(id: string, params = {}) {
    const response = await this.queryWithBearerToken({
      url: '/formations/' + id,
      method: 'GET',
      params,
    })
    return response
  }

  async getOrganismeDetails(siret: string | number, params = {}) {
    const response = await this.queryWithBearerToken({
      url: '/organismes-formateurs/' + siret,
      method: 'GET',
      params,
    })
    return response
  }
}
