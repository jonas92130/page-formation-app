import LinkList from '@/components/features/linkList'
import React from 'react'
import Formation from './formationCard'
import ActualityHome from './actualites/actualityHome'
import CitiesServerList from '@/components/features/linkList/citiesServerList'
import SearchBarBanner from '@/app/SearchBarBanner'
import ClientNavbar from './clientNavbar'
import HomeFormations from './homeFormations'
import Container from '@/components/ui/container'

interface Props {}

const DOMAIN_PRO = [
  'Développement Web',
  'Développement Mobile',
  'Jeux Vidéo',
  'Analyse de Données',
  'Cybersécurité',
  'E-commerce',
  'Finance',
  'FinTech',
  'Santé',
  'Médical',
  'Éducation',
  'E-learning',
  'Logistique',
  'Transport',
  'Tourisme',
  'Voyages',
  'Agriculture',
  'AgroTech',
  'Immobilier',
  'Mode',
  'Retail',
  'Médias',
  'Divertissement',
  'Marketing',
  'Publicité',
  'Ressources Humaines',
  'Sport',
  'Fitness',
  'Art',
  'Création Numérique',
  'Environnement',
  'Énergies Renouvelables',
  'Automobile',
  'Mobilité',
  'Aérospatial',
  'Industrie',
  'Fabrication',
  'Intelligence Artificielle',
  'Machine Learning',
  'Blockchain',
  'Cryptomonnaies',
  'Assurance',
  'Actuariat',
  'Architecture',
  'Urbanisme',
  'Alimentation',
  'Gastronomie',
  'Justice',
  'Droit',
  'Sciences',
  'Recherche',
  'Événementiel',
  'Relations Publiques',
  'Gestion de Projet',
  'Consulting',
  'Technologies de l’Information',
  'Télécommunications',
  'Biotechnologies',
  'Pharmaceutique',
  'Énergies Fossiles',
]

const DOMAIN = [
  'Secrétariat',
  'Social',
  'Petite Enfance',
  "Décoration d'Intérieur",
  'Secrétariat Médical',
  'Community Management',
  'Comptabilité',
  'Informatique',
  'Formation de Formateur',
  'Gestion de la Paie',
  'Graphisme',
  'Ressources Humaines',
  'Anglais',
  'Esthétique',
  'Bilan de Compétences',
  'Développement Web',
  'Banque',
  'Assurance',
  'Immobilier',
  'Commerce',
  'Vente',
  'Bureautique',
  'Management',
  'Marketing Digital',
  'Cybersécurité',
  'Data Science',
  'Langues Étrangères',
  'Gestion de Projet',
  'Santé',
  'Logistique',
]

const POPULAR_JOB = [
  'Serveur de café',
  'Serveur de restaurants',
  'Aide de cuisine',
  'Employé polyvalent de la restauration',
  'Viticulteur',
  'Arboriculteur',
  'Agent d’entretien de locaux',
  'Aide à domicile',
  'Auxiliaire de vie',
  'Cuisinier',
  'Professionnel de l’animation socioculturelle',
  'Employé de libre-service',
  'Aide-soignant',
  'Responsable du développement commercial',
  'Chargé de recrutement',
  'Technico-commercial',
  'Ingénieur en fiabilité de site',
  'Responsable HSE',
  'Graphiste',
  'Motion designer',
  'Responsable RSE',
  'Customer success manager',
  'Responsable data',
  "Directeur d'hôtel",
  'Consultant en développement durable',
  'Ingénieur en intelligence artificielle',
  'Lighting artist',
  'Coordinateur pédagogique',
  'Architecte cybersécurité',
  'Energy manager',
  'Chargé de clientèle bancaire',
  'Chargé de clientèle assurance',
  'Responsable des relations entreprises',
  'Responsable des relations écoles',
  "Directeur d'établissement de santé",
  'Chief Revenue Officer',
  'Courtier en énergie',
  'Chauffeur livreur',
  'Technicien de maintenance',
  'Infirmier',
  'Pharmacien',
  'Médecin généraliste',
  'Enseignant',
  'Conducteur de travaux',
  'Ingénieur en génie civil',
  'Développeur web',
  'Développeur mobile',
  'Chef de projet digital',
  'Consultant en cybersécurité',
  'Chef cuisinier',
  'Chef de chantier',
  'Assistant commercial',
  'Responsable marketing',
  'Consultant RH',
  'Data analyst',
  'Analyste financier',
  'Avocat',
  'Notaire',
  'Journaliste',
  'Traducteur',
]

function ClientPage(props: Props) {
  const {} = props

  return (
    <>
      <ClientNavbar />
      <SearchBarBanner />
      <main className="">
        <Container>
          <div className="flex flex-col items-stretch justify-center gap-6 pt-8 md:flex-row md:gap-14 lg:gap-32">
            <Formation
              title="Formations CPF"
              label="Se former avec son compte personnel de formation"
              backgroundColor="bg-secondary"
              link="formations/type/CPF"
            />
            <Formation
              title="Formations en ligne"
              label="Se former de chez soi et à son rythme"
              backgroundColor="bg-primary"
              isArrow={true}
              link="formations/learningType/distanciel"
            />
          </div>
        </Container>
        <Container>
          <HomeFormations />
        </Container>
        <Container className="bg-secondary/5">
          <LinkList
            name="domaine"
            label="Quels domaines vous intéresses ?"
            backgroundColor="bg-secondary/30 text-primary-background"
            className=""
            options={DOMAIN}
          />
        </Container>
        <Container>
          <ActualityHome className="" />
        </Container>
        <Container className="bg-primary/10">
          <LinkList
            name="professionnel"
            label="Les domaines professionnels"
            backgroundColor="bg-primary/85 text-primary-foreground"
            className=""
            options={DOMAIN_PRO}
          />
        </Container>
        <Container>
          <CitiesServerList className="" />
        </Container>
        <Container>
          <LinkList
            name="metier"
            label="Les métiers populaires"
            backgroundColor="bg-card"
            className=""
            options={POPULAR_JOB}
          />
        </Container>
      </main>
    </>
  )
}

export default ClientPage
