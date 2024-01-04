'use client'
import { DaftarOnlineContext } from '@/app/context/DaftarOnlineContext'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'


const CardMenu = () => {
    const router = useRouter()
    const daftarOnline: any = useContext(DaftarOnlineContext)
    const handleNavigasi = (e: string) => {
        router.push(e)
    }
    return (
        <React.Fragment>
            <div className='section shadow-lg animasi-popup'>
                <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-2 justify-center items-center">
                    <button onClick={() => handleNavigasi(`/pendaftaran-online
                    `)} className="button-white shadow-lg aspect-square animasi-popup">
                        <div className="flex justify-center h-[70%]">
                            <img className='' src={'/icon/calendar.png'} alt="" />
                        </div>
                        <div className="text-[10px] h-[30%] text-black p-1 sticky">Registrasi Online</div>
                    </button>
                    <button onClick={() => handleNavigasi(`/check-in`)} className="button-white shadow-lg aspect-square animasi-popup">
                        <div className="flex justify-center h-[70%]">
                            <img className='' src={'/icon/checkin.png'} alt="" />
                        </div>
                        <div className="text-[10px] h-[30%] text-black p-1 sticky">Check In</div>
                    </button>
                    <button onClick={() => handleNavigasi(`/jadwal-poli`)} className="button-white shadow-lg aspect-square animasi-popup">
                        <div className="flex justify-center h-[70%]">
                            <img className='' src={'/icon/poli.webp'} alt="" />
                        </div>
                        <div className="text-[10px] h-[30%] text-black p-1 sticky">Cek Jadwal Poli</div>
                    </button>
                </div>
            </div>
        </React.Fragment>


    )
}

export default CardMenu