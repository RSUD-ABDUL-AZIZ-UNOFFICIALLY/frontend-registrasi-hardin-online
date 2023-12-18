'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import Section from './Section'

const Body = ({ slug }: { slug: string }) => {
    const router = useRouter()

    const handleNavigation = (e: string) => {
        router.push(e)
    }
    return (
        <React.Fragment>
            <button onClick={() => handleNavigation('/dashboard')} className="btn-warning">Kembali</button>
            <Section slug={slug} />
        </React.Fragment>
    )
}

export default Body