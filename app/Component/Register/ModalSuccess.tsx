'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const ModalSuccess = () => {
    const router = useRouter()
    const handleNavigation = (e: string) => {
        router.push(e)
    }
    return (
        <div className='modal backdrop-blur-sm flex items-center justify-center'>
            <div className="w-[90%] bg-white rounded-lg shadow-2xl p-3">
                <div className="flex justify-center">
                    <img className='h-40' src="/success.gif" alt="" />
                </div>
                <div className="text-xl font-semibold uppercase text-center p-4">
                    Akun Anda Sudah Terdaftar
                </div>
                <button onClick={() => handleNavigation(`/login`)} className="btn-warning">
                    Masuk
                </button>
            </div>
        </div>
    )
}

export default ModalSuccess