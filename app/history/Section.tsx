'use client'
import React, { useEffect, useState } from 'react'
import { CircularProgress } from "@nextui-org/react";
import { useRouter } from 'next/navigation';

const Section = ({ slug }: { slug: string }) => {
    useEffect(() => {

    }, [])
    return (
        <React.Fragment>

            <div className={`section shadow-lg`}>
                <div className="rounded-lg shadow-xl  p-0 flex overflow-hidden">
                    <div className="w-[30%] p-2 bg-info text-center text-white grid items-center">
                        <p className='uppercase text-sm'>Antrian</p>
                        <p className='text-6xl font-bold'>01</p>
                    </div>
                    <div className="w-[70%] p-2">
                        <div className="flex item-center gap-2">
                            <div className="w-[30%] text-xs">No RM</div>
                            <div className="w-[70%] text-xs">123123</div>
                        </div>
                        <div className="flex item-center gap-2">
                            <div className="w-[30%] text-xs">NIK</div>
                            <div className="w-[70%] text-xs">6172xxxxxxxx23</div>
                        </div>
                        <div className="flex item-center gap-2">
                            <div className="w-[30%] text-xs">Nama</div>
                            <div className="w-[70%] text-xs">-</div>
                        </div>
                        <div className="flex item-center gap-2">
                            <div className="w-[30%] text-xs">Poli</div>
                            <div className="w-[70%] text-xs">-</div>
                        </div>
                        <div className="flex item-center gap-2">
                            <div className="w-[30%] text-xs">Dokter</div>
                            <div className="w-[70%] text-xs">-</div>
                        </div>
                        <div className="flex item-center gap-2">
                            <div className="w-[30%] text-xs">Status</div>
                            <div className="w-[70%] text-xs">Kontrol/Rujukan</div>
                        </div>
                        <div className="flex item-center gap-2">
                            <div className="w-[30%] text-xs">Tanggal</div>
                            <div className="w-[70%] text-xs">01 Junuari 2002</div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>

    )
}

export default Section