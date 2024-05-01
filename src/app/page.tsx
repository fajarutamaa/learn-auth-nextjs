import { auth } from '@/lib/auth'
import Link from 'next/link'

export default async function Home() {
  
  const session = await auth()

  if (!session) {
    return <div>
      Anda belum  <Link style={{ color: 'blue' }} href='/api/auth/signin'>Login</Link>
    </div>
  }

  return <div>
    <Link href={'/api/auth/signout'}>Sign Out</Link>
    {JSON.stringify(session)}
    </div>
}