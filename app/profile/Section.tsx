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
            <div className="section shadow-md">
                <div className="grid grid-cols-5">
                    <div className="col-span-1 text-left">Nama</div>
                    <div className="col-span-1 text-center">:</div>
                    <div className="col-span-3 text-right uppercase font-semibold">{data && data.fullname}</div>
                </div>
                <div className="grid grid-cols-5">
                    <div className="col-span-1 text-left">NIK</div>
                    <div className="col-span-1 text-center">:</div>
                    <div className="col-span-3 text-right uppercase font-semibold">{data && data.nik}</div>
                </div>
                <div className="grid grid-cols-5">
                    <div className="col-span-1 text-left">WA</div>
                    <div className="col-span-1 text-center">:</div>
                    <div className="col-span-3 text-right uppercase font-semibold">{data && data.wa}</div>
                </div>
            </div>
            <div className="section shadow-md">
                <h1 className='uppercase font-semibold'>Anggota Keluarga : </h1>
                <ul className='p-3'>
                    {family && family.map((item: any, index: number) => {
                        return (
                            <li key={index} className=''>{`${index + 1}. ${item.nama}`}</li>
                        )
                    })}
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Section