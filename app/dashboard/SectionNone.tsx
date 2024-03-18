'use client'
import React, { useContext, useEffect, useState } from 'react'
import CardLoginSuccess from '../Component/Dashboard/CardLoginSuccess'
import { DaftarOnlineContext } from '../context/DaftarOnlineContext'
import { AuthContext } from '../context/AuthContext'
import Image from 'next/image'
import welcome from '../../public/hardin/welcome_hardin.jpg'
import wajib from '../../public/hardin/wajib_hardin.jpg'
const SectionNone = () => {
    const [alert, setAlert] = useState<boolean>(true)
    const auth: any = useContext(AuthContext)
    useEffect(() => {
        // auth.checkAuth()
    }, [auth])
    return (
        <React.Fragment>
            <div className="grid lg:md:grid-cols-2 gap-3 animasi-popup">
                {/* <div className={`rounded-lg shadow-lg bg-white ease-in-out duration-300 overflow-hidden ${alert == true ? `scale-1` : `scale-0  duration-300 hidden`}`}>
                    <div className="flex items-center justify-between gap-1 p-3">
                        <div className="flex items-center gap-1">
                            Hi
                            <div className="font-bold">
                                {auth && auth.dataProfile && auth.dataProfile.fullname}
                            </div>
                        </div>
                    </div>
                    <div className="pl-2 pr-4">
                        <Image
                            src={welcome}
                            alt="welcome image"
                        />
                    </div>
                </div> */}
                <div className='rounded-lg shadow-lg p-3 animasi-popup bg-white'>
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
                <div className="rounded-lg shadow-lg p-3 animate-popup bg-secondary text-white">
                    <div className="text-lg uppercase text-warning font-bold">Berkas WajiB Bawa</div>
                    <div className="">
                        <li>Kartu Keluarga (KK)</li>
                        <li>Kartu Tanda Penduduk (KTP)</li>
                        <li>BPJS    <span className='text-warning'>Opsional</span></li>
                    </div>
                </div>
                {/* <div className="card shadow-lg bg-[#ffffff] animasi-popup">
                    <Image
                        src={wajib}
                        alt="berkas wajib bawa image"
                    />
                </div> */}
            </div>
        </React.Fragment >
    )
}

export default SectionNone