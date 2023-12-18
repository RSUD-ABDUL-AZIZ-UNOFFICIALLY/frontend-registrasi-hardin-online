'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import Section from './Section'
import { DaftarOnlineProvider } from '@/app/context/DaftarOnlineContext'

const Body = ({ slug }: { slug: string }) => {
    const router = useRouter()

    const handleNavigation = (e: string) => {
        router.push(e)
    }
    return (
        <DaftarOnlineProvider>
            <React.Fragment>
                <button onClick={() => handleNavigation('/dashboard')} className="btn-warning">Kembali</button>
                <Section slug={slug} />
            </React.Fragment>
        </DaftarOnlineProvider>
    )
}

export default Body