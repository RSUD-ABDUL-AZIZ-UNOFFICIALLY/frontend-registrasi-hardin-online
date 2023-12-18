'use client'
import { useRouter } from 'next/navigation';
import { AuthContext } from '../context/AuthContext';
import Section from './Section'
import React, { useContext, useEffect } from "react";

export default function Home() {
    const auth: any = useContext(AuthContext)
    const router = useRouter()
    useEffect(() => {
        if (auth.login == true) {
            router.push('/dashboard')
        }
    }, [auth.login])
    return (
        <main className="">
            {/* <div className="flex items-center justify-center h-full"> */}
            <Section />
            {/* </div> */}
        </main>
    )
}
