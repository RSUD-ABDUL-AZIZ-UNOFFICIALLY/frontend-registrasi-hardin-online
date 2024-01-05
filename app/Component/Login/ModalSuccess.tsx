'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import SuccessGif from '../../../public/success.gif'
import Image from 'next/image'

const ModalSuccess = () => {
    const router: any = useRouter()
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            router.push(`/dashboard`)
        }, 3000)
    }, [])
    return (
        <div className='fixed top-0 left-0 h-[100vh] w-[100vw] bg-[#22202016] flex items-center justify-center z-10'>
            <div className="w-[90%] bg-white rounded-lg shadow-2xl p-3">
                <div className="flex justify-center">
                    {/* <img className='h-40' src="/success.gif" alt="" /> */}
                    <Image
                        src={SuccessGif}
                        height={100}
                        alt="Success Gif"
                    />
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