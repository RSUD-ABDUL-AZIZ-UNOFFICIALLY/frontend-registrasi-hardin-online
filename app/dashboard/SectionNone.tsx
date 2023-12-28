'use client'
import React, { useContext, useEffect, useState } from 'react'
import CardLoginSuccess from '../Component/Dashboard/CardLoginSuccess'
import { DaftarOnlineContext } from '../context/DaftarOnlineContext'
import { AuthContext } from '../context/AuthContext'

const SectionNone = () => {
    const [alert, setAlert] = useState<boolean>(true)
    const auth: any = useContext(AuthContext)
    useEffect(() => {
        auth.checkAuth()
    }, [auth])
    return (
        <React.Fragment>
            <div className="grid lg:md:grid-cols-2 gap-3 animasi-popup">
                <div className={`rounded-lg shadow-lg bg-white ease-in-out duration-300 overflow-hidden ${alert == true ? `scale-1` : `scale-0  duration-300 hidden`}`}>
                    <div className="flex items-center justify-between gap-1 p-3">
                        <div className="flex items-center gap-1">
                            Hi
                            <div className="font-bold">
                                {auth && auth.dataProfile && auth.dataProfile.fullname}
                            </div>
                        </div>
                    </div>
                    <div className="pl-2 pr-4">
                        <img src="/welcome.png" alt="" />
                    </div>
                </div>
                <div className='rounded-lg shadow-lg p-3 animasi-popup'>
                    <div className="gap-3 flex justify-center">
                        <img className='w-[30%]' src="/alert.png" alt="" />
                    </div>
                    <div className="text-center">
                        <div className="text-xl">Daftar Keluarga Belum Tersedia</div>
                        <div className="text-lg font-bold">
                            Segera tambahkan daftar <br /> keluarga pada LOKET 4
                        </div>
                    </div>
                </div>
                <div className="card shadow-lg bg-[#ffffff] animasi-popup">
                    <img src="/wajib.png" alt="" />
                    {/* <div className="gap-3 p-3 flex justify-center">
                    <img className='w-[30%]' src="/doc2.png" alt="" />
                </div> */}
                    <div className="p-2">
                        <ul className='grid gap-1 justify-center items-center text-center text-lg font-bold'>
                            <li>KTP</li>
                            <li>Kartu Keluarga</li>
                            <li>BPJS (Optional)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default SectionNone