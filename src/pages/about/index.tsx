import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <p>Adnan Arju Maulana Pasha</p><br />
      <p>2341720107</p> <br />
      <p>D4 Teknik Informatika</p><br />
      <a href="/" >Home</a>
    </div>
  )
}
