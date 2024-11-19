export interface Formation {
  date_extract: string
  nom_of: string
  nom_departement: string
  nom_region: string
  type_referentiel: string
  code_inventaire: string
  code_rncp: number
  intitule_certification: string
  libelle_niveau_sortie_formation: string | null
  code_formacode_1: string
  code_formacode_2: string
  code_formacode_3: string | null
  code_formacode_4: string | null
  code_formacode_5: string | null
  libelle_code_formacode_principal: string
  code_rome_1: string | null
  code_rome_2: string | null
  code_rome_3: string | null
  code_rome_4: string | null
  code_rome_5: string | null
  libelle_nsf_1: string
  libelle_nsf_2: string | null
  libelle_nsf_3: string | null
  code_nsf_1: string
  code_nsf_2: string | null
  code_nsf_3: string | null
  code_certifinfo: string
  siret_of: string
  numero_formation: string
  intitule_formation: string
  points_forts: string | Element | Element[]
  objectif_formation: string
  contenu_formation: string
  resultats_attendus_formation: string
  nb_action: number
  nb_session_active: number
  nb_session_a_distance: number
  nombre_heures_total_min: number
  nombre_heures_total_max: number
  nombre_heures_total_mean: number
  frais_ttc_tot_min: number
  frais_ttc_tot_max: number
  frais_ttc_tot_mean: number
  code_departement: string
  code_region: string
  nbaction_nbheures: number
  coderegion_export: string
  avis: string
}

export interface FormationsResponseModel {
  results: Formation[]
  total_count: number
}

export interface FormationFacetsResponseModel {
  links: {}
  facets: {
    name: string
    facets: FacetsModel[]
  }[]
}

export interface FacetsModel {
  name: string
  count: number
  state: string
  value: string
}
