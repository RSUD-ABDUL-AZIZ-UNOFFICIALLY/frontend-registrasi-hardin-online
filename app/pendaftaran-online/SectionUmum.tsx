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
    const [dropdown, setDropdown] = useState<boolean>(false)
    const hanldleDropdown = () => {
        if (dropdown == true) {
            setDropdown(false)
        }
        if (dropdown == false) {
            setDropdown(true)
        }
    }

    const handleSelectDropDown = (e: any) => {
        context.setFamilySelect(e)
        context.handleName(e.nama)
        context.handleNik(e.nik)
        context.handleNoRm(e.noRm)
        setDropdown(false)
    }
    const handleValueDate = (e: string) => {
        setValueDate(e)
        context.handleDateBooking(e)
    }
    return (
        <React.Fragment>
            <div className="section section-info text-white text-center mb-4">
                Form Registrasi Online
            </div>
            <div className="items-center gap-2 mb-3 w-full">
                <div className=" p-2">Pilih Pendaftar</div>
                <div className="animasi-popup dropdown w-full">
                    <button className="button-white shadow-md" onClick={hanldleDropdown}>
                        <div className="flex justify-between items-center">
                            <div className="text-left font-normal">
                                <div className="">{context.familySelect ? context.familySelect.nama : 'Pilih Dari Daftar Keluarga'}</div>
                            </div>
                            <div className={`${dropdown == true && `rotate-90`} duration-300`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>
                    </button>
                    {dropdown == true &&
                        <div className="grid gap-2 shadow-md p-4 mt-3 section">
                            {context && context.dataFamily.map((item: any, index: number) => {
                                return (
                                    <button key={index} onClick={() => handleSelectDropDown(item)} className={`${context.familySelect && context.familySelect.nik === item.nik ? `button-secondary` : `button-white`} shadow-md text-xs font-normal`}>
                                        <div className="animasi-popup">
                                            <p>{`${item.nama} - (${item.noRm})`}</p>
                                            <small className='font-xs'>{`${item.nik}`}</small>
                                        </div>
                                    </button>
                                )
                            })}
                        </div>
                    }
                </div>
            </div>
            <div className="items-center gap-2 mb-3">
                <div className=" p-2">Pilih Tanggal</div>
                <div className="">
                    <div className="form-input">
                        <input min={minToday} max={maxToday} onChange={(e) => handleValueDate(e.target.value)} value={valueDate} type="date" className='input shadow-md' />
                    </div>
                </div>
            </div>
            <ModalPoli />
            {context.poli && <ModalDokter />}
            {context.poli && context.dokter &&
                <div className="items-center gap-2 mb-3">
                    <div className=" p-2">Waktu</div>
                    <div className="">
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