'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useContext, useEffect } from 'react'
import { AuthContext } from './context/AuthContext'

export default function Home() {
  const router = useRouter()
  const auth: any = useContext(AuthContext)
  useEffect(() => {
    console.log('auth', auth.login);

  })
  return (
    <main className="">
    </main>
  )
}
