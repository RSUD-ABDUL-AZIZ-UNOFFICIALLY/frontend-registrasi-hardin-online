'use client'
import React, { useEffect, useState, useContext } from 'react'
import { CircularProgress } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { DaftarOnlineContext } from '@/app/context/DaftarOnlineContext';
import axios from 'axios';
import moment from 'moment';

const Section = ({ slug }: { slug: string }) => {
    const context: any = useContext(DaftarOnlineContext)
    const base_url = process.env.base_url
    const [data, setData] = useState<any>()
    const today = moment().format('YYYY-MM-DD')
    const getDaftarBooking = async () => {
        const token = sessionStorage.getItem('authToken')

        if (token) {
            try {
                const response: any = await axios.get(`${base_url}/hardin/reg/bookingperiksa?no_rkm_medis=${context.familySelect.noRm}`, {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });

                if (response.data.error == false) {
                    setData(response.data.data.slice().sort((a: number, b: number) => b - a))

                }
            } catch (error) {
                const response: any = error
            }
        }

    }
    const handleCheckin = async (noRm: string, date: string) => {
        const token = sessionStorage.getItem('authToken')
        const body = {
            no_rkm_medis: noRm,
            tanggal_periksa: date
        }
        if (token) {
            try {
                const response: any = await axios.post(`${base_url}/hardin/reg/bookingperiksa/cekin`, body, {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });

                if (response.data.error == false) {
                    getDaftarBooking()
                }
            } catch (error) {
                const response: any = error
            }
        }
    }
    const handleBatal = async (noRm: string, date: string) => {
        const token = sessionStorage.getItem('authToken')
        const body = {
            no_rkm_medis: noRm,
            tanggal_periksa: date
        }
        if (token) {
            try {
                const response: any = await axios.post(`${base_url}/hardin/reg/bookingperiksa/batal`, body, {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });

                if (response.data.error == false) {
                    getDaftarBooking()
                }
            } catch (error) {
                const response: any = error
            }
        }
    }

    useEffect(() => {
        context.handleNik(slug)
        getDaftarBooking()
    }, [context.familySelect])

    return (
        <React.Fragment>
            <div className="section flex text-center justify-center">
                <div className="p-2 font-semibold">Daftar Registrasi</div>
            </div>
            <div className={`section shadow-lg`}>
                {data ? data.map((item: any, index: number) => {
                    console.log('item', item.penjab.png_jawab);

                    return (
                        <React.Fragment key={index}>
                            <div className="rounded-lg shadow-xl  p-0 flex overflow-hidden mb-3">
                                <div className={`w-[30%] p-2  ${item.status == 'Terdaftar' && `bg-success`} ${item.status == 'Batal' && `bg-red-500`} ${item.status == 'Belum' && `bg-info`} text-center text-white grid items-center`}>
                                    <div className="">
                                        <p className='uppercase text-sm'>Antrian</p>
                                        <p className='text-5xl font-bold'>{item.no_reg}</p>
                                    </div>
                                </div>
                                <div className="w-[70%] p-2 grid gap-1">
                                    <div className="flex item-center gap-2">
                                        <div className="w-[30%] text-xs">No RM</div>
                                        <div className="w-[70%] text-xs font-bold">{item.no_rkm_medis}</div>
                                    </div>
                                    <div className="flex item-center gap-2">
                                        <div className="w-[30%] text-xs">Nama</div>
                                        <div className="w-[70%] text-xs">{item.pasien.nm_pasien}</div>
                                    </div>
                                    <div className="flex item-center gap-2">
                                        <div className="w-[30%] text-xs">Poli</div>
                                        <div className="w-[70%] text-xs">{item.poliklinik.nm_poli}</div>
                                    </div>
                                    <div className="flex item-center gap-2">
                                        <div className="w-[30%] text-xs">Dokter</div>
                                        <div className="w-[70%] text-xs">{item.dokter.nm_dokter}</div>
                                    </div>
                                    <div className="flex item-center gap-2">
                                        <div className="w-[30%] text-xs">Asuransi</div>
                                        <div className="w-[70%] text-xs">{item.penjab.png_jawab}</div>
                                    </div>
                                    <div className="flex item-center gap-2">
                                        <div className="w-[30%] text-xs">Status</div>
                                        <div className="w-[70%] text-xs">{item.status}</div>
                                    </div>
                                    <div className="flex item-center gap-2">
                                        <div className="w-[30%] text-xs">Tanggal</div>
                                        <div className="w-[70%] text-xs">{moment(item.tanggal_periksa).format('DD MMMM YYYY')}</div>
                                    </div>
                                    <div className="flex justify-end gap-1 mt-3">
                                        {today == item.tanggal_periksa ?
                                            item.status == 'Terdaftar' ?
                                                <React.Fragment>
                                                    <div className="section shadow-lg text-xs text-center flex items-center justify-between">
                                                        Anda Sudah Check In
                                                        <div className="text-green-500">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </React.Fragment>
                                                : item.status == 'Batal' ?
                                                    <React.Fragment>
                                                        <div className="section shadow-lg text-xs text-center flex items-center justify-between">
                                                            Dibatalkan
                                                            <div className="text-red-500">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                                </svg>

                                                            </div>
                                                        </div>
                                                    </React.Fragment>
                                                    :
                                                    < React.Fragment >
                                                        <button onClick={() => handleCheckin(item.no_rkm_medis, item.tanggal_periksa)} className="button-success text-[10px] w-fit">
                                                            Check In
                                                        </button>
                                                        <button onClick={() => handleBatal(item.no_rkm_medis, item.tanggal_periksa)} className="button-secondary text-[10px] w-fit">
                                                            Batal
                                                        </button>
                                                    </React.Fragment>
                                            :
                                            <React.Fragment>
                                                <div className="section shadow-lg text-xs text-center">
                                                    Hanya Dapat Check In Pada Hari Periksa
                                                </div>
                                            </React.Fragment>
                                        }
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })
                    :
                    <React.Fragment>
                        <div className="section text-center">Tidak Ada Pendaftaran</div>
                    </React.Fragment>
                }
            </div >

        </React.Fragment >

    )
}

export default Section