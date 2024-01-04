'use client'
import React, { useState, useEffect, useRef } from 'react'

const Tooltips = () => {
    const [tooltips, setTooltips] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node | null)) {
                setTooltips(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])
    return (
        <React.Fragment>
            <div ref={ref} className={`bg-sky-600 p-4 mb-3 rounded-b-xl ease-in-out duration-300 fixed left-0 z-30 top-0 ${tooltips == false ? `translate-y-[-100%]` : ``} w-full`}>
                <div className="text-white">
                    <div className="text-3xl uppercase font-bold">
                        Check In
                    </div>
                    <div className="text-justify text-zinc-200">
                        <span className='font-bold text-yellow-400 uppercase'>Check In</span> merupakan fitur untuk memverifikasi proses registrasi yang sudah dilakukan, berikut tata cara check ini:
                    </div>
                    <div className=" text-zinc-200">
                        <ul className='pl-8'>
                            <li className='marker'>
                                Check In dapat dilakukan pada <span className='font-bold text-yellow-400 uppercase'>hari/tanggal periksa.</span>
                            </li>
                            <li className='marker'>
                                Bagi pasien pengguna asuransi BPJS harus melakukan scan finger terlebih dahulu pada <span className='font-bold text-yellow-400 uppercase'>Loket 4</span> untuk verifikasi registrasi pendaftaran
                            </li>
                            <li>
                                Untuk pasien umum dapat langsung menuju ke <span className='font-bold text-yellow-400 uppercase'>poli tujuan</span> dan melakukan chekin pada aplikasi
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button onClick={() => setTooltips(false)} className="btn-ghost w-fit shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
            <button onClick={() => setTooltips(true)} className={`shadow-md bg-white rounded-2xl w-fit  active:bg-slate-100 bottom-10 right-5 fixed  ${tooltips == true ? `scale-0 ` : `animate-bounce`}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
            </button>

        </React.Fragment>
    )
}

export default Tooltips