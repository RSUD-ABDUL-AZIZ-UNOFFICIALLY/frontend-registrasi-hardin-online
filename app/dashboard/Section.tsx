'use client'
import React, { useEffect, useState, useContext, useMemo } from 'react'
import CardMenu from './component/CardMenu'
import axios from 'axios'
import { DaftarOnlineContext } from '../context/DaftarOnlineContext'
import { AuthContext } from '../context/AuthContext'

const Section = () => {
    const base_url = process.env.base_url
    const daftarOnline: any = useContext(DaftarOnlineContext)
    const auth: any = useContext(AuthContext)
    const [dropdown, setDropdown] = useState<boolean>(false)
    const [dropdownSelect, setDropdownSelect] = useState<any>('Daftar keluarga')
    const [iniData, setData] = useState<any>()
    const hanldleDropdown = () => {
        if (dropdown == true) {
            setDropdown(false)
        }
        if (dropdown == false) {
            setDropdown(true)
        }
    }

    const handleSelectDropDown = (e: any) => {
        setDropdownSelect(e.nik)
        setData(e)
        daftarOnline.setFamilySelect(e)
        setDropdown(false)
    }


    useEffect(() => {
        auth.checkAuth()
    }, [auth])
    return (
        <React.Fragment>
            <div className={`animasi-popup rounded-lg shadow-lg bg-white ease-in-out duration-300 overflow-hidden ${auth && auth.alertWelcome == true ? `scale-1` : `scale-0  duration-300 hidden`}`}>
                <div className="flex items-center justify-between gap-1 p-3">
                    <div className="flex items-center gap-1 p-2 rounded-md">
                        Hi
                        <div className="font-bold">
                            {auth && auth.dataProfile && auth.dataProfile.fullname}
                        </div>
                    </div>
                    <button onClick={() => auth.setAlertWelcome(false)} className="button w-fit button-transparant rounded-full flex items-center">
                        <span className="material-symbols-outlined">
                            close
                        </span>
                    </button>
                </div>
                <div className="pl-2 pr-4">
                    <img src="/welcome.png" alt="" />
                </div>
            </div>
            <div className="animasi-popup dropdown">
                <button className="button-white shadow-lg" onClick={hanldleDropdown}>
                    <div className="flex justify-between items-center">
                        <div className="text-left">
                            <label className='text-sm font-normal' htmlFor=""><small>Nama Pendaftar</small></label>
                            <div className="">{daftarOnline.familySelect ? daftarOnline.familySelect.nama : 'Pilih Dari Daftar Keluarga'}</div>
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
                        {daftarOnline && daftarOnline.dataFamily.map((item: any, index: number) => {
                            return (
                                <button key={index} onClick={() => handleSelectDropDown(item)} className={`${daftarOnline.familySelect && daftarOnline.familySelect.nik === item.nik ? `button-secondary` : `button-white`} shadow-md text-xs`}>
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
            {daftarOnline.familySelect && <CardMenu />}
        </React.Fragment >
    )
}

export default Section