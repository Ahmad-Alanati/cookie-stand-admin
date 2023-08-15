import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <head>
        <title>Cookie Stand Admin</title>
      </head>
      <header className="items-center py-6 bg-green-500">
        <h1 className="ml-8 text-5xl">Cookie Stand Admin</h1>
      </header>
      <main className=''>

      </main>
      <footer className="bg-green-500  ipy-6">
        <p>&copy; Wayne Enterprises 2023</p>
      </footer>
    </>
  )
}
