'use client'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from './context/AuthContext'
import { Spinner } from "@nextui-org/react";

const Section = () => {
    const router = useRouter()
    const auth: any = useContext(AuthContext)
    useEffect(() => {
        auth.checkAuth()
        const authLogin = auth.login
        if (authLogin == true) {
            router.push('/dashboard')
        } else {
            router.push('/login')
        }
        // setTimeout(() => {
        // }, 3000)
    }, [auth])
    return (
        <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
            <Spinner size="lg" />
        </div>
    )
}

export default Section