'use client'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { DaftarOnlineContext } from '../context/DaftarOnlineContext'

const Section = () => {
    const [data, setData] = useState<any | null>()
    const [family, setFamily] = useState<any | null>()
    const auth: any = useContext(AuthContext)
    const daftarOnline: any = useContext(DaftarOnlineContext)
    useEffect(() => {
        setData(auth.dataProfile)
        setFamily(daftarOnline.dataFamily)
    }, [auth.dataProfile, daftarOnline.dataFamily])
    return (
        <React.Fragment>
            <div className="section shadow-md animasi-popup">
                <div className="grid grid-cols-5">
                    <div className="col-span-1 text-left">Nama</div>
                    <div className="col-span-1 text-center">:</div>
                    <div className="col-span-3 ">{data && data.fullname}</div>
                </div>
                <div className="grid grid-cols-5">
                    <div className="col-span-1 text-left">NIK</div>
                    <div className="col-span-1 text-center">:</div>
                    <div className="col-span-3 ">{data && data.nik}</div>
                </div>
                <div className="grid grid-cols-5">
                    <div className="col-span-1 text-left">WA</div>
                    <div className="col-span-1 text-center">:</div>
                    <div className="col-span-3 ">{data && data.wa}</div>
                </div>
            </div>
            <div className="section shadow-md animasi-popup">
                <h1 className='uppercase font-semibold text-secondary'>Anggota Keluarga : </h1>

                {family && family.map((item: any, index: number) => {
                    return (
                        <li key={index} className=''>{`${item.nama}`}</li>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default Section