import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1
        className='text-red-500 mx-4 my-2'
      >Click through the nav...</h1>
    </main>
  )
}
