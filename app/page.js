"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()

  // useEffect(()=>{
  //   router.push("/sardor")
  // })


  return (
    <div className='text-2xl font-bold'>Home PaGe</div>
  )
}
