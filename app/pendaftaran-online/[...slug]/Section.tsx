'use client'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { DaftarOnlineContext, DaftarOnlineProvider } from '@/app/context/DaftarOnlineContext';
import ModalSuccess from './Component/ModalSuccess';
import SectionUmum from './SectionUmum';
import SectionBPJS from './SectionBPJS';

const Section = ({ slug }: { slug: string }) => {
    const [asuransi, setAsuransi] = useState<string>('bpjs')
    const router = useRouter()
    const context: any = useContext(DaftarOnlineContext)

    const handleAsuransi = (e: string) => {
        setAsuransi(e)
        context.handlePoli(null)
        context.handleDokter(null)
    }
    const data = [
        { id: 1, no_rm: '123167', nik: '6172xxxxxxxx12', name: 'Amirull Azmi' },
        { id: 2, no_rm: '433234', nik: '6172xxxxxxxx23', name: 'Muhammad Irfansyah' },
        { id: 3, no_rm: '432234', nik: '6172xxxxxxxx78', name: 'Fakhry' },
        { id: 4, no_rm: '892323', nik: '6172xxxxxxxx90', name: 'Hamida' },
        { id: 5, no_rm: '782754', nik: '6172xxxxxxxx57', name: 'Devian Balado' },
        { id: 6, no_rm: '632187', nik: '6172xxxxxxxx34', name: 'Amiruddin Istiqomah' },
    ]
    useEffect(() => {
        context.data.map((item: any, index: any) => {
            if (item.nik == slug) {
                context.handleName(item.name)
                context.handleNik(item.nik)
                context.handleNoRm(item.no_rm)
            }
        })

        console.log('xxx', context);

    }, [context])


    return (

        <React.Fragment>
            <div className="flex flex-wrap gap-3">
                {data && data.map((item: any, index: number) => {
                    if (item.nik === slug) {
                        return (
                            < React.Fragment key={index} >
                                <div className="section shadow-lg lg:md:w-[30%] text-black">
                                    <div className="flex gap-2">
                                        <div className="w-[30%]">Nama</div>
                                        <div className="w-[70%]">{item.name}</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-[30%]">NIK</div>
                                        <div className="w-[70%]">{item.nik}</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-[30%]">No RM</div>
                                        <div className="w-[70%]">{item.no_rm}</div>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    }
                })}
                <div className="lg:md:w-[40%] section shadow-lg">
                    <div className="p-2">Asuransi :</div>
                    <div className="flex gap-3 text-sm">
                        <button onClick={() => handleAsuransi('bpjs')} className={`${asuransi == 'bpjs' ? `btn-info` : `btn-white`} shadow-md text-black`}>BPJS</button>
                        <button onClick={() => handleAsuransi('umum/lainnya')} className={`${asuransi != 'bpjs' ? `btn-info` : `btn-white`} shadow-md text-black`}>Umum / Asuransi Lain</button>
                    </div>
                </div>
            </div>

            {asuransi == 'bpjs' ?
                <div className="section shadow-lg p-3">
                    <SectionBPJS />
                </div>
                :
                <div className="section shadow-lg p-3">
                    <SectionUmum />
                </div>
            }

        </React.Fragment >
    )
}

export default Section