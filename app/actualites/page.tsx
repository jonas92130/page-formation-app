import { client } from '../../tina/__generated__/databaseClient'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { BreadcrumbSeparator } from '@/components/ui/breadcrumb'

type CardProps = React.ComponentProps<typeof Card>

export default async function Page({ className, ...props }: CardProps) {
  const { data } = await client.queries.blogConnection()
  return (
    <>
      <CardTitle>Les Actualités liées au CPF</CardTitle>
      <div>
        {data.blogConnection.edges?.map((blog) => {
          return (
            <>
              <div key={blog?.node?.id}>
                <Card className={cn('w-[380px]', className)} {...props}>
                  <CardHeader>
                    <Link href={`/actualites/${blog?.node?._sys.filename}`}>
                      <CardTitle>{blog?.node?.title}</CardTitle>
                    </Link>
                    <CardDescription>{blog?.node?.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <h1>{blog?.node?.description}</h1>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      <Link href={`/actualites/${blog?.node?._sys.filename}`}>
                        {' '}
                        En savoir plus
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}
