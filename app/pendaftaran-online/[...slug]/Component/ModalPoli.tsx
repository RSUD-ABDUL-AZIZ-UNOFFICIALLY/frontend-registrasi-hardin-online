'use client'
import { DaftarOnlineContext } from '@/app/context/DaftarOnlineContext'
import React, { useContext, useEffect, useState } from 'react'

const ModalPoli = () => {
    const context: any = useContext(DaftarOnlineContext)
    const [modal, setModal] = useState<boolean>(false)

    const handleOpenModal = () => {
        setModal(true)
        context.getPoli()
    }

    const handleModal = (e: any) => {
        setModal(false)
        context.handlePoli(e)
    }
    return (
        <div className="modal mb-3">
            <div className="flex items-center gap-2">
                <div className="w-[30%] p-2">Poli</div>
                <div className="w-[70%]">
                    <button onClick={() => handleOpenModal()} className="btn-white shadow-md">
                        <div className="text-black text-xs">{context.poli ? context.poli.nm_poli : `Pilih Poli `}</div>
                    </button>
                </div>
            </div>
            <div className={`modal-popup flex justify-center fixed backdrop-blur-sm  bg-[#00000016] ${modal == true ? 'h-[100vh] w-[100vw] top-0 left-0' : `hidden`} `}>
                <div className="p-4 flex lg:w-[50%] md:w-[70%] w-[100%] items-center ">
                    <div className={`section shadow-lg  ${modal == true ? 'scale-100' : `scale-0 `} `}>
                        <div className="flex items-center gap-3">
                            <button onClick={() => setModal(false)} className="btn-white max-w-fit shadow-md">
                                <div className="text-yellow-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </button>
                            <div className="text-lg font-bold uppercase">
                                Pilih Poli
                            </div>
                        </div>
                        <div className="p-2 text-center uppercase">{ }</div>
                        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-2 max-h-[80vh] overflow-y-scroll pb-4">
                            {context.dataPoli && context.dataPoli.map((item: any, index: number) => {
                                return (
                                    <React.Fragment key={index}>
                                        <button onClick={() => handleModal(item)} className={`${context.poli && context.poli.kd_poli == item.kd_poli ? `btn-primary` : `btn-white`} shadow-md border`}>
                                            {item.nm_poli}
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

export default ModalPoli