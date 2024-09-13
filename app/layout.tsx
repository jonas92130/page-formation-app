import { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { headers } from 'next/headers'
import { client } from '@/tina/__generated__/databaseClient'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  const headerList = headers()
  const pathName = headerList.get('referer')
  const hostName = headerList.get('x-forwarded-host')
  const decodedPath = decodeURIComponent(pathName!)
  const formatedPathName = decodedPath
    .split(hostName ?? '//')[1]
    ?.toLowerCase()
    ?.trim()

  const indexationRes = await client.queries.indexation({
    relativePath: 'toutes_les_pages.md',
  })
  const pagesMetadata = indexationRes.data.indexation.pages
  const currentMetadata = pagesMetadata?.find(
    (page) => page?.name === formatedPathName
  )
  console.log('currentMetadata,', currentMetadata, formatedPathName)

  return {
    robots: currentMetadata?.isNotIndexed
      ? 'noindex, nofollow'
      : 'index, follow',
    title: 'Self Hosted Tina App',
    description: 'A Next.js app with TinaCMS',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
