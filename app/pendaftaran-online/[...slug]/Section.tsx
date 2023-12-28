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

    useEffect(() => {
        if (context && context.dataFamily) {
            context.dataFamily.map((item: any, index: any) => {
                if (item.nik == slug) {
                    context.handleName(item.nama)
                    context.handleNik(item.nik)
                    context.handleNoRm(item.noRm)
                }
            })
        }

    }, [context])


    return (

        <React.Fragment>
            <div className="flex flex-wrap gap-3">
                {context
                    &&
                    (
                        <div className="section shadow-lg lg:md:w-[30%] text-black">
                            <div className="flex gap-2">
                                <div className="w-[30%]">Nama</div>
                                <div className="w-[70%]">{context.name}</div>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-[30%]">NIK</div>
                                <div className="w-[70%]">{context.nik}</div>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-[30%]">No RM</div>
                                <div className="w-[70%]">{context.noRm}</div>
                            </div>
                        </div>
                    )
                }
                {/* <div className="lg:md:w-[40%] section shadow-lg">
                    <div className="p-2">Asuransi :</div>
                    <div className="flex gap-3 text-sm">
                        <button onClick={() => handleAsuransi('bpjs')} className={`${asuransi == 'bpjs' ? `button-info` : `button-white`} shadow-md text-black`}>BPJS</button>
                        <button onClick={() => handleAsuransi('umum/lainnya')} className={`${asuransi != 'bpjs' ? `button-info` : `button-white`} shadow-md text-black`}>Umum / Asuransi Lain</button>
                    </div>
                </div> */}
            </div>

            {/* {asuransi == 'bpjs' ?
                <div className="section shadow-lg p-3">
                    <SectionBPJS />
                </div>
                : */}
            <div className="section shadow-lg p-3">
                <SectionUmum />
            </div>
            {/* } */}

        </React.Fragment >
    )
}

export default Section