'use client'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { DaftarOnlineContext } from '../context/DaftarOnlineContext'
import axios from 'axios'

interface typePoli {
    kd_poli: string;
    nm_poli: string;
}
interface typeAntrianPoli {
    data: [
        {
            kd_poli: string
            nm_dokter: string
            nm_pasien: string
            no_rawat: string
            no_reg: string
            status: string
        }
    ]
    message: string
    status: boolean
    status_antrian: {
        sudah: number
        belum: number
        batal: number
        total: number
    }
}

interface typeDataAntrian {
    kd_poli: string
    nm_dokter: string
    nm_pasien: string
    no_rawat: string
    no_reg: string
    status: string
}



const Section = () => {
    const auth: any = useContext(AuthContext)
    const daftarOnline: any = useContext(DaftarOnlineContext)
    const api_url = process.env.api_url
    const [idPoli, setIdPoli] = useState<string>('')
    const [dataAntrian, setDataAntrian] = useState<typeAntrianPoli | null>()
    const [antrianSekarang, setAntrianSekarang] = useState<string>('-')
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

    const getAntrian = async () => {
        setDataAntrian(null)
        try {
            const response = await axios.get(`${api_url}/antrian/poli?kd_poli=${idPoli}`);
            if (response.data.status == true) {
                setDataAntrian(response.data)
            }
        } catch (error) {
        }
    }


    useEffect(() => {
        getData()
        getAntrian()
    }, [idPoli])
    return (
        <React.Fragment>
            {/* <div className="section">
                <div className="text-center">
                    Jadwal Poli
                </div>
            </div> */}

            <select onChange={(e) => setIdPoli(e.target.value)} disabled={dataPoli ? false : true} value={idPoli} className="select select-bordered select-lg w-full animasi-popup bg-white">
                <option value={'ANA'} className='bg-white' hidden>Pilih Poli</option>
                {dataPoli && dataPoli.map((item: typePoli, index: number) => {
                    return (
                        <option className='bg-white p-3' value={item.kd_poli} key={index}>
                            {item.nm_poli}
                        </option>
                    )
                })}
            </select>
            <div className="section">
                <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-4 lg:md:gap-4 gap-2 justify-center">
                    {/* <div className="col-span-2 card shadow-md bg-blue-500 text-white">
                        <div className="card-body p-2 text-center flex justify-center items-center">
                            <div className="text-3xl font-bold">
                                12
                            </div>
                            <span className='text-center'>
                                Antrian Sekarang
                            </span>
                        </div>
                    </div> */}
                    <div className="animasi-popup card shadow-md">
                        <div className="card-body p-2 text-center flex justify-center items-center">
                            <div className="text-3xl font-bold">
                                {dataAntrian && dataAntrian.status_antrian ?
                                    dataAntrian.status_antrian.sudah
                                    :
                                    <span className="loading loading-spinner loading-md text-secondary"></span>
                                }
                            </div>
                            <span className='text-center'>
                                Sudah
                            </span>
                        </div>
                    </div>
                    <div className="animasi-popup card shadow-md">
                        <div className="card-body p-2 text-center flex justify-center items-center">
                            <div className="text-3xl font-bold">
                                {dataAntrian && dataAntrian.status_antrian ?
                                    dataAntrian.status_antrian.belum
                                    :
                                    <span className="loading loading-spinner loading-md text-secondary"></span>
                                }
                            </div>
                            <span className='text-center'>
                                Belum
                            </span>
                        </div>
                    </div>
                    <div className="animasi-popup card shadow-md">
                        <div className="card-body p-2 text-center flex justify-center items-center">
                            <div className="text-3xl font-bold">
                                {dataAntrian && dataAntrian.status_antrian ?
                                    dataAntrian.status_antrian.batal
                                    :
                                    <span className="loading loading-spinner loading-md text-secondary"></span>
                                }
                            </div>
                            <span className='text-center'>
                                Batal
                            </span>
                        </div>
                    </div>
                    <div className="animasi-popup card shadow-md">
                        <div className="card-body p-2 text-center flex justify-center items-center">
                            <div className="text-3xl font-bold">
                                {dataAntrian && dataAntrian.status_antrian ?
                                    dataAntrian.status_antrian.total
                                    :
                                    <span className="loading loading-spinner loading-md text-secondary"></span>
                                }
                            </div>
                            <span className='text-center'>
                                Total
                            </span>
                        </div>
                    </div>
                </div>
                {dataAntrian && dataAntrian.data && dataAntrian.data.length > 0 ?
                    <div className="mt-3">
                        <div className="text-center p-2 bg-white  mb-4 rounded-sm uppercase font-semibold">
                            List Nomor Antrian
                        </div>
                        <div className="grid grid-cols-2 gap-3 p-2">
                            {dataAntrian.data.map((item: typeDataAntrian, index: number) => {
                                return (
                                    <React.Fragment key={index}>
                                        <div className={`animasi-popup duration-[400ms] p-2 text-center border rounded-md ${item.status == 'Sudah' ? 'bg-secondary text-white border-none' : item.status == 'Belum' ? 'bg-warning border-none' : item.status == 'Batal' ? 'bg-red-500 border-red-500 text-white' : 'bg-white'}`}>
                                            <div className="text-2xl font-bold">
                                                {item.no_reg}
                                            </div>
                                            <div className="text-xs">
                                                {item.status}
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </div>
                    :
                    <div className="mt-4">
                        <div className="text-center text-white p-2 bg-primary rounded-md uppercase font-semibold">
                            Tidak Ada Antrian
                        </div>
                    </div>
                }
            </div>
        </React.Fragment>
    )
}

export default Section