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
import './[id]/style.css'

type CardProps = React.ComponentProps<typeof Card>

export default async function Page({ className, ...props }: CardProps) {
  const { data } = await client.queries.blogConnection()

  return (
    <>
      <h1 className="min-[320px]:mb-10 min-[320px]:text-[27px]">
        Toutes mes actualités
      </h1>
      <div>
        {data.blogConnection.edges?.map((blog) => {
          return (
            <>
              <div key={blog?.node?.id}>
                <Card className={cn('w-full', className)} {...props}>
                  <CardHeader>
                    <Link href={`/actualites/${blog?.node?._sys.filename}`}>
                      <h2>{blog?.node?.title}</h2>
                    </Link>
                    <CardDescription>{blog?.node?.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <p>{blog?.node?.description}</p>
                    <img src={blog?.node?.image}></img>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/actualites/${blog?.node?._sys.filename}`}>
                      <Button className="w-full"> En savoir plus</Button>
                    </Link>
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
