import React, { useState, useEffect, useContext } from 'react'
import { CircularProgress } from "@nextui-org/react";
import { DaftarOnlineContext } from '@/app/context/DaftarOnlineContext';
import { useRouter } from 'next/navigation';
import successGif from '../../../public/success.gif'
import Image from 'next/image';
import moment from 'moment';

const AlertSuccess = ({ data }: { data: any }) => {
    const [loading, setLoading] = useState<boolean>(false)
    const context: any = useContext(DaftarOnlineContext)
    const router = useRouter()
    const handleNavigation = (e: string) => {
        router.push(e)
    }
    useEffect(() => {
        setLoading(true)
        context.getFamily()
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    return (
        <div className={`modal-popup flex justify-center fixed bg-[#22202057] h-[100vh] w-[100vw] top-0 left-0`}>
            <div className="p-4 flex lg:w-[50%] md:w-[70%] w-[100%] h-full items-center">
                <div className="w-full">
                    {loading == true ?
                        <React.Fragment>
                            <div className="flex justify-center">
                                <CircularProgress color="success" size="lg" aria-label="Loading..." />
                            </div>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <div className={`section shadow-lg `}>
                                <div className="flex justify-center">
                                    {/* <img className='h-20' src="/success.gif" alt="" /> */}
                                    <Image
                                        src={successGif}
                                        height={100}
                                        alt="Success Gif"
                                    />
                                </div>
                                <div className="text-center p-3 text-lime-700 text-sm rounded-lg shadow-lg mb-3">Berhasil Melakukan Registrasi</div>
                                <div className="rounded-lg shadow-xl  p-0 flex overflow-hidden">
                                    <div className="w-[30%] p-2 bg-secondary text-center text-white flex items-center justify-center">
                                        <div className="">
                                            <p className='uppercase text-sm'>Antrian</p>
                                            <p className='text-5xl font-bold'>{data && data.no_reg}</p>
                                        </div>
                                    </div>
                                    <div className="w-[70%] p-2 grid gap-2">
                                        <div className="flex item-center gap-1">
                                            <div className="w-[30%] text-xs">No RM</div>
                                            <div className="w-[70%] text-xs">{data && data.no_rkm_medis}</div>
                                        </div>
                                        <div className="flex item-center gap-2">
                                            <div className="w-[30%] text-xs">NIK</div>
                                            <div className="w-[70%] text-xs">{context.familySelect.nik}</div>
                                        </div>
                                        <div className="flex item-center gap-2">
                                            <div className="w-[30%] text-xs">Nama</div>
                                            <div className="w-[70%] text-xs">{context.familySelect.nama}</div>
                                        </div>
                                        <div className="flex item-center gap-2">
                                            <div className="w-[30%] text-xs">Poli</div>
                                            <div className="w-[70%] text-xs">{context.poli.nm_poli}</div>
                                        </div>
                                        <div className="flex item-center gap-2">
                                            <div className="w-[30%] text-xs">Dokter</div>
                                            <div className="w-[70%] text-xs">{context.dokter.dokter.nm_dokter}</div>
                                        </div>
                                        <div className="flex item-center gap-2">
                                            <div className="w-[30%] text-xs">Status</div>
                                            <div className="w-[70%] text-xs">{data && data.status}</div>
                                        </div>
                                        <div className="flex item-center gap-2">
                                            <div className="w-[30%] text-xs">Tanggal</div>
                                            <div className="w-[70%] text-xs">{data && moment(data.tanggal_periksa).format('DD MMMM YYYY')}</div>
                                        </div>
                                        {/* <div className="flex justify-center">
                                            <div className="w-40 p-3">
                                                <img src="/qrcode.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="text-center text-sm p-2 shadow-md rounded-md">Scan Qrcode di Loket untuk Check In</div> */}
                                        <div className="text-center text-sm p-2 shadow-md rounded-md">Silakan lakukan check in untuk konfirmasi registrasi</div>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button onClick={() => handleNavigation('/dashboard')} className="button-warning mt-3 shadow-xl">
                                        <div className="text-sm">
                                            Kembali Ke Dashboard
                                        </div>
                                    </button>
                                    <button onClick={() => handleNavigation(`/check-in`)} className="button-secondary mt-3 shadow-xl">
                                        <div className="text-sm">
                                            Check In
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </React.Fragment>
                    }
                </div>
            </div>
        </div>
    )
}

export default AlertSuccess