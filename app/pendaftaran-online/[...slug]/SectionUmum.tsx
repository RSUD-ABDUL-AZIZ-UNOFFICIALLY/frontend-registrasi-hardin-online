'use client'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { DaftarOnlineContext, DaftarOnlineProvider } from '@/app/context/DaftarOnlineContext';
import ModalPoli from './Component/ModalPoli';
import ModalDokter from './Component/ModalDokter';
import ModalSuccess from './Component/ModalSuccess';
import moment from 'moment';
import ModalAsuransi from './Component/ModalAsuransi';

const SectionUmum = () => {
    const context: any = useContext(DaftarOnlineContext)

    const [valueDate, setValueDate] = useState<string>(moment().format('YYYY-MM-DD'))
    const minToday = moment().format('YYYY-MM-DD')
    const maxToday = moment().add(4, 'days').format('YYYY-MM-DD')

    const handleValueDate = (e: string) => {
        setValueDate(e)
        context.handleDateBooking(e)
    }
    return (
        <React.Fragment>
            <div className="section section-info text-white text-center mb-4">
                Form Registrasi Online Poliklinik
            </div>
            <div className="flex items-center gap-2 mb-3">
                <div className="w-[30%] p-2">Tanggal</div>
                <div className="w-[70%]">
                    <div className="form-input">
                        <input min={minToday} max={maxToday} onChange={(e) => handleValueDate(e.target.value)} value={valueDate} type="date" className='input shadow-md' />
                    </div>
                </div>
            </div>
            <ModalPoli />
            {context.poli && <ModalDokter />}
            {context.poli && context.dokter &&
                <div className=" flex  items-center gap-2 mb-3">
                    <div className="w-[30%] p-2">Waktu</div>
                    <div className="w-[70%]">
                        <div className="section-warning shadow-md text-center">{`${context.dokter.jam_mulai} - ${context.dokter.jam_selesai}`}</div>
                    </div>
                </div>
            }
            {context.poli && context.dokter && <ModalAsuransi />}
            <div className="mt-5 mb-5">
                {!context.poli && !context.dokter && <small className='p-3 w-fit rounded-lg text-red-600'>*Poli Wajib Di Pilih</small>}
                {context.poli && !context.dokter && <small className='p-3 w-fit rounded-lg text-red-600'>*Dokter Wajib Di Pilih</small>}
                {context.poli && context.dokter && !context.asuransi && <small className='p-3 w-fit rounded-lg text-red-600'>*Asuransi Wajib Di Pilih</small>}
                {context.poli && context.dokter && context.asuransi && <small className='p-3 w-fit rounded-lg text-green-500'>*Data Sudah Lengkap </small>}
            </div>
            {context.poli && context.dokter && context.asuransi && <ModalSuccess />}
        </React.Fragment>
    )
}

export default SectionUmum