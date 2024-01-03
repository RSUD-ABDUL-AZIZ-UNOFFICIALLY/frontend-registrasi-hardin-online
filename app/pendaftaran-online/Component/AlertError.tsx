import React, { useState, useEffect, useContext } from 'react'
import { CircularProgress } from "@nextui-org/react";
import { DaftarOnlineContext } from '@/app/context/DaftarOnlineContext';
import { useRouter } from 'next/navigation';

const AlertError = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const context: any = useContext(DaftarOnlineContext)
    const router = useRouter()
    const handleNavigation = (e: string) => {
        router.push(e)
    }
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    return (
        <div className={`modal-popup flex justify-center fixed bg-[#22202016] h-[100vh] w-[100vw] top-0 left-0`}>
            <div className="p-4 flex lg:w-[50%] md:w-[70%] w-[100%] h-full items-center">
                <div className="w-full">
                    {loading == true ?
                        <React.Fragment>
                            <div className="flex justify-center">
                                <CircularProgress color="success" size="lg" aria-label="Loading..." />
                            </div>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <div className={`section shadow-lg `}>
                                <div className="flex justify-center">
                                    <img className='h-20' src="/error.gif" alt="" />
                                </div>
                                <div className="text-center uppercase font-bold mt-2">Gagal !</div>
                                <div className="text-center p-3 text-black text-sm rounded-lg shadow-lg mb-3">Anda Sudah Pernah Melakukan Pendaftaran Pada Hari Ini,  Cek Check In</div>
                                <div className="flex gap-2">
                                    <button onClick={() => handleNavigation('/dashboard')} className="button-warning mt-3 shadow-xl">
                                        <div className="text-sm">
                                            Kembali Ke Dashboard
                                        </div>
                                    </button>
                                    <button onClick={() => handleNavigation(`/check-in`)} className="button-info mt-3 shadow-xl">
                                        <div className="text-sm">
                                            Lihat Check In
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </React.Fragment>
                    }
                </div>
            </div>
        </div>
    )
}

export default AlertError