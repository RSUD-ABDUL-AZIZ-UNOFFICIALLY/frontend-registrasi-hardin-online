'use client'
import { DaftarOnlineContext } from '@/app/context/DaftarOnlineContext'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

import calendarLogo from '../../../public/icon/calendar.png'
import checkInLogo from '../../../public/icon/checkin.png'
import jadwalPoliLogo from '../../../public/icon/poli.webp'
import searchLogo from '../../../public/icon/search.png'
import Image from 'next/image'

const CardMenu = () => {
    const router = useRouter()
    const daftarOnline: any = useContext(DaftarOnlineContext)
    const handleNavigasi = (e: string) => {
        router.push(e)
    }
    return (
        <React.Fragment>
            <div className='section shadow-lg animasi-popup'>
                <div className="grid lg:grid-cols-5 md:grid-cols-5 grid-cols-3 gap-2 justify-center items-center">
                    <button onClick={() => handleNavigasi(`/pendaftaran-online
                    `)} className="button-white shadow-lg aspect-square animasi-popup">
                        <div className="flex justify-center">
                            <Image
                                src={calendarLogo}
                                height={70}
                                alt="Registrasi Icon"
                            />
                        </div>
                        <div className="text-[10px] h-[30%] text-black p-1 sticky">Registrasi Online</div>
                    </button>
                    <button onClick={() => handleNavigasi(`/check-in`)} className="button-white shadow-lg aspect-square animasi-popup">
                        <div className="flex justify-center">
                            <Image
                                src={checkInLogo}
                                height={70}
                                alt="Check-In Icon"
                            />
                        </div>
                        <div className="text-[10px] h-[30%] text-black p-1 sticky">Check In</div>
                    </button>
                    <button onClick={() => handleNavigasi(`/jadwal-poli`)} className="button-white shadow-lg aspect-square animasi-popup">
                        <div className="flex justify-center">
                            <Image
                                src={jadwalPoliLogo}
                                height={70}
                                alt="Jadwal Poli Icon"
                            />
                        </div>
                        <div className="text-[10px] h-[30%] text-black p-1 sticky">Cek Jadwal Poli</div>
                    </button>
                </div>
            </div>
        </React.Fragment>


    )
}

export default CardMenu