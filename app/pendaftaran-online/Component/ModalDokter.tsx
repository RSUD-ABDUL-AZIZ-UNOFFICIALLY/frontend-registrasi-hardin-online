'use client'
import { DaftarOnlineContext } from '@/app/context/DaftarOnlineContext'
import React, { useContext, useEffect, useState } from 'react'


const ModalDokter = () => {
    const context: any = useContext(DaftarOnlineContext)
    const [modal, setModal] = useState<boolean>(false)

    const handleOpenModal = () => {
        setModal(true)
        // context.getDokter()
    }

    const handleModal = (e: any) => {
        setModal(false)
        context.handleDokter(e)
    }

    return (
        <div className=" mb-3">
            <div className="items-center gap-2">
                <div className="p-2">Pilih Dokter</div>
                <div className="">
                    {context.dataDokter && context.dataDokter.length > 0 ?
                        <button onClick={() => handleOpenModal()} className="button-white shadow-md">
                            <div className="text-black font-normal text-left">{context.dokter ? context.dokter.dokter.nm_dokter : `Pilih Dokter `}</div>
                        </button>
                        :
                        <div className="section shadow-md text-red-500 text-center">
                            Dokter Tidak Tersedia
                        </div>
                    }
                </div>
            </div>
            <div className={`modal-popup flex justify-center fixed bg-[#22202016] ${modal == true ? 'h-[100vh] w-[100vw] top-0 left-0' : `hidden `}`}>
                <div className="p-4 flex lg:w-[50%] md:w-[70%] w-[100%] items-center">
                    <div className={`section shadow-lg  ${modal == true ? 'scale-100' : `scale-0 `}`}>
                        <div className="flex items-center gap-3">
                            <button onClick={() => setModal(false)} className="button-white max-w-fit shadow-md">
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </button>
                            <div className="text-lg font-bold uppercase">
                                Pilih Dokter
                            </div>
                        </div>
                        <div className="p-2 text-center uppercase">{ }</div>
                        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2 max-h-[60vh] overflow-y-scroll pb-4">
                            {context.dataDokter && context.dataDokter.map((item: any, index: number) => {
                                return (
                                    <React.Fragment key={index}>
                                        <button onClick={() => handleModal(item)} className={`${context.dokter && context.dokter.kd_dokter == item.kd_dokter ? `button-primary` : `button-white`} shadow border font-normal`}>
                                            {item.dokter.nm_dokter}
                                            <div className="flex text-center justify-center font-light">
                                                <small>{`${item.jam_mulai} - ${item.jam_selesai}`}</small>
                                            </div>
                                        </button>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDokter