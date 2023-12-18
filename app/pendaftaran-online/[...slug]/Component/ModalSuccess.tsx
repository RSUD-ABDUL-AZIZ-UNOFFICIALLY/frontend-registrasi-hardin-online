'use client'
import { DaftarOnlineContext } from '@/app/context/DaftarOnlineContext'
import React, { useContext, useEffect, useState } from 'react'
import { CircularProgress } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
const ModalSuccess = () => {
    const context: any = useContext(DaftarOnlineContext)
    const [modal, setModal] = useState<boolean>(false)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const handleModal = () => {
        setLoading(true)
        setModal(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }

    const handleNavigation = (e: string) => {
        router.push(e)
    }
    return (
        <React.Fragment>
            <button onClick={() => handleModal()} className="btn-secondary">Daftar</button>
            <div className="modal">
                <div className={`modal-popup flex justify-center fixed backdrop-blur-sm bg-[#00000016] ${modal == true ? 'h-[100vh] w-[100vw] top-0 left-0' : `hidden `}`}>
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
                                    <div className={`section shadow-lg  ${modal == true ? 'scale-100' : `scale-0 `}`}>
                                        <div className="flex justify-center">
                                            <img className='h-20' src="/success.gif" alt="" />
                                        </div>
                                        <div className="text-center p-3 text-lime-700 text-sm rounded-lg shadow-lg mb-3">Berhasil Melakukan Pendaftaran</div>
                                        <div className="rounded-lg shadow-xl  p-0 flex overflow-hidden">
                                            <div className="w-[30%] p-2 bg-info text-center text-white flex items-center justify-center">
                                                <div className="">
                                                    <p className='uppercase text-sm'>Antrian</p>
                                                    <p className='text-6xl font-bold'>01</p>
                                                </div>
                                            </div>
                                            <div className="w-[70%] p-2">
                                                <div className="flex item-center gap-2">
                                                    <div className="w-[30%] text-xs">No RM</div>
                                                    <div className="w-[70%] text-xs">{context.noRm}</div>
                                                </div>
                                                <div className="flex item-center gap-2">
                                                    <div className="w-[30%] text-xs">NIK</div>
                                                    <div className="w-[70%] text-xs">{context.nik}</div>
                                                </div>
                                                <div className="flex item-center gap-2">
                                                    <div className="w-[30%] text-xs">Nama</div>
                                                    <div className="w-[70%] text-xs">{context.name}</div>
                                                </div>
                                                <div className="flex item-center gap-2">
                                                    <div className="w-[30%] text-xs">Poli</div>
                                                    <div className="w-[70%] text-xs">{context.poli.name}</div>
                                                </div>
                                                <div className="flex item-center gap-2">
                                                    <div className="w-[30%] text-xs">Dokter</div>
                                                    <div className="w-[70%] text-xs">{context.name}</div>
                                                </div>
                                                <div className="flex item-center gap-2">
                                                    <div className="w-[30%] text-xs">Status</div>
                                                    <div className="w-[70%] text-xs">Kontrol/Rujukan</div>
                                                </div>
                                                <div className="flex item-center gap-2">
                                                    <div className="w-[30%] text-xs">Tanggal</div>
                                                    <div className="w-[70%] text-xs">01 Junuari 2002</div>
                                                </div>
                                                <div className="flex justify-center">
                                                    <div className="w-40 p-3">
                                                        <img src="/qrcode.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="text-center text-sm p-2 shadow-md rounded-md">Scan Qrcode di Loket untuk Check In</div>
                                            </div>
                                        </div>
                                        <button onClick={() => handleNavigation('/dashboard')} className="btn-secondary mt-3 shadow-xl">
                                            <div className="text-sm">
                                                Kembali Ke Dashboard
                                            </div>
                                        </button>
                                    </div>
                                </React.Fragment>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default ModalSuccess