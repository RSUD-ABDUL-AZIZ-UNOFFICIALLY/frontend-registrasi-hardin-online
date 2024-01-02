'use client'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { DaftarOnlineContext } from '../context/DaftarOnlineContext'
import axios from 'axios'

interface typePoli {
    kd_poli: string;
    nm_poli: string;
}

const Section = () => {
    const [data, setData] = useState<any | null>()
    const [family, setFamily] = useState<any | null>()
    const auth: any = useContext(AuthContext)
    const daftarOnline: any = useContext(DaftarOnlineContext)
    const api_url = process.env.api_url

    const [dataPoli, setDataPoli] = useState<typePoli[]>([])
    const getData = async () => {
        try {
            const response = await axios.get(`${api_url}/poli/all`);
            if (response.data.status == true) {
                setDataPoli(response.data.data)
            }
        } catch (error) {

        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <React.Fragment>
            <div className="section">
                <div className="text-center">
                    Jadwal Poli
                </div>
            </div>
            <div className="section">
                <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-2">
                    {dataPoli && dataPoli.map((item: typePoli, index: number) => {
                        return (
                            <>
                                <button className="button shadow-md animasi-popup">
                                    <div className="p-3">
                                        {item.nm_poli}
                                    </div>
                                </button>
                            </>
                        )
                    })}

                </div>
            </div>
        </React.Fragment>
    )
}

export default Section