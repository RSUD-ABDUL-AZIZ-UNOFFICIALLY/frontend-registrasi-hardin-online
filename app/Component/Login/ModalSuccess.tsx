'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const ModalSuccess = () => {
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false)
    const handleNavigation = (e: string) => {
        router.push(e)
    }
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            router.push(`/dashboard`)
        }, 3000)
    }, [])
    return (
        <div className='modal backdrop-blur-sm flex items-center justify-center'>
            <div className="w-[90%] bg-white rounded-lg shadow-2xl p-3">
                <div className="flex justify-center">
                    <img className='h-40' src="/success.gif" alt="" />
                </div>
                <div className="text-xl font-semibold uppercase text-center p-4">
                    Anda Berhasil Login
                </div>
                <div className="text-sm font-semibold uppercase text-center p-4">
                    Menuju Dashboard
                </div>
            </div>
        </div>
    )
}

export default ModalSuccess