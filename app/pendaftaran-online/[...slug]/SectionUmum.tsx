'use client'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { DaftarOnlineContext, DaftarOnlineProvider } from '@/app/context/DaftarOnlineContext';
import ModalPoli from './Component/ModalPoli';
import ModalDokter from './Component/ModalDokter';
import ModalSuccess from './Component/ModalSuccess';
const SectionUmum = () => {
    const context: any = useContext(DaftarOnlineContext)

    return (
        <React.Fragment>
            <ModalPoli />
            {context.poli && <ModalDokter />}
            <div className="p-3">
                {!context.poli && !context.dokter && <small className='p-3 shadow-md w-fit rounded-lg text-red-600'>*Poli Wajib Di Pilih</small>}
                {context.poli && !context.dokter && <small className='p-3 shadow-md w-fit rounded-lg text-red-600'>*Dokter Wajib Di Pilih</small>}
                {context.poli && context.dokter && <small className='p-3 shadow-md w-fit rounded-lg text-green-500'>*Data Sudah Lengkap </small>}
            </div>
            {context.poli && context.dokter && <ModalSuccess />}
        </React.Fragment>
    )
}

export default SectionUmum