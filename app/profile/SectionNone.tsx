'use client'
import React from 'react'
import CardLoginSuccess from '../Component/Dashboard/CardLoginSuccess'

const SectionNone = () => {
    return (
        <React.Fragment>
            <div className="grid lg:md:grid-cols-2 gap-3">
                {/* <div className="section shadow-lg">

                </div> */}
                <div className='section-transparant shadow-lg animasi-popup'>
                    <div className="gap-3 flex justify-center">
                        <img className='w-[30%]' src="/alert.png" alt="" />
                    </div>
                    <div className="text-center">
                        <div className="text-xl">Daftar Belum Tersedia</div>
                        <div className="text-lg font-bold">
                            Segera tambahkan daftar <br /> keluarga pada LOKET 4
                        </div>
                    </div>
                </div>
                <div className="card shadow-lg bg-[#ffffff] animasi-popup">
                    <div className="text-center text-lg uppercase font-bold p-3 bg-ghost">
                        Berkas Wajib DiBawa
                    </div>
                    {/* <div className="gap-3 p-3 flex justify-center">
                    <img className='w-[30%]' src="/doc2.png" alt="" />
                </div> */}
                    <div className="p-2">
                        <ul className='grid gap-1 justify-center items-center text-center text-lg font-bold'>
                            <li>KTP</li>
                            <li>Kartu Keluarga</li>
                            <li>BPJS (Optional)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SectionNone