export interface Organization {
  raison_sociale: string
  siret: number | string
  id: number | string
  numero: string
  lieux_de_formation: Location[]
  score?: Score
}

interface Score {
  nb_avis: number
  notes?: Notes
  aggregation: {
    global: {
      max: number
      min: number
    }
  }
}

interface Notes {
  accueil: number
  contenu_formation: number
  equipe_formateurs: number
  moyen_materiel: number
  accompagnement: number
  global: number
}

interface Location {
  nom?: string
  adresse: {
    code_postal: string
    ville: string
    region: string
  }
}
