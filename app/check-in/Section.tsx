'use client'
import React, { useEffect, useState, useContext } from 'react'
import { CircularProgress } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { DaftarOnlineContext } from '@/app/context/DaftarOnlineContext';
import axios from 'axios';
import moment from 'moment';
import Tooltips from './Tooltips';

const Section = () => {
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

    useEffect(() => {
        getDaftarBooking()
    }, [context.familySelect])

    return (
        <React.Fragment>
            <Tooltips />
            <div className="animasi-popup section flex text-center justify-center">
                <div className="p-2 font-semibold">Daftar Registrasi</div>
            </div>
            <div className="items-center gap-2 mb-3 w-full">
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
            <div className={`section shadow-lg animasi-popup`}>
                {data ? data.map((item: any, index: number) => {
                    console.log('item', item.kd_pj);

                    return (
                        <React.Fragment key={index}>
                            <div className="rounded-lg shadow-xl animasi-popup p-0 flex overflow-hidden mb-3">
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
                                        {item.kd_pj == 'BPJ' ?
                                            <>
                                                <div className="section shadow text-xs">
                                                    <div className="flex justify-between items-center">
                                                        <div className="">
                                                            Silakan Datang Pada Hari Periksa ke Loket 4 Untuk <span className='font-bold'>
                                                                Scan Finger
                                                            </span>
                                                        </div>
                                                        <div className="rounded-full bg-warning p-1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            <>
                                                {today == item.tanggal_periksa ?
                                                    item.status == 'Terdaftar' ?
                                                        <React.Fragment>
                                                            <div className="section shadow text-xs text-center flex items-center justify-between">
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
                                                                <div className="section shadow text-xs text-center flex items-center justify-between">
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
                                                    < React.Fragment >
                                                        <div className="section shadow text-xs text-center">
                                                            Hanya Dapat Check In Pada Hari Periksa
                                                        </div>
                                                    </React.Fragment>
                                                }
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })
                    :
                    <React.Fragment>
                        <div className="section text-center animasi-popup">Tidak Ada Pendaftaran</div>
                    </React.Fragment>
                }
            </div >

        </React.Fragment >

    )
}

export default Section