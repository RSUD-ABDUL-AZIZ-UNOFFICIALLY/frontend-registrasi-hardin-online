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
    const [welcome, setWelcome] = useState<boolean>(false)
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
        setDropdown(false)
    }

    const getFamily = async () => {
        const token = sessionStorage.getItem('authToken')
        if (token) {
            try {
                const response: any = await axios.get(`${base_url}/hardin/myfamily`, {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });
                if (response.data.error == false) {
                    console.log('family', response.data.data);
                    daftarOnline.setDataFamily(response.data.data)
                }
            } catch (error) {
                const response: any = error

            }
        }
    }
    const data = [
        { id: 1, no_rm: '123167', nik: '6172xxxxxxxx12', name: 'Amirull Azmi' },
        { id: 2, no_rm: '433234', nik: '6172xxxxxxxx23', name: 'Muhammad Irfansyah' },
        { id: 3, no_rm: '432234', nik: '6172xxxxxxxx78', name: 'Fakhry' },
        { id: 4, no_rm: '892323', nik: '6172xxxxxxxx90', name: 'Hamida' },
        { id: 5, no_rm: '782754', nik: '6172xxxxxxxx57', name: 'Devian Balado' },
        { id: 6, no_rm: '632187', nik: '6172xxxxxxxx34', name: 'Amiruddin Istiqomah' },
    ]

    useEffect(() => {
        getFamily()
        console.log('auth dashboard', auth);
        setTimeout(() => {
            auth.setAlertWelcome(false)
        }, 5000)
    }, [auth])
    return (
        <React.Fragment>
            <div className={`section-warning shadow-sm flex items-center justify-between gap-1 ease-in-out duration-300 overflow-hidden ${auth && auth.alertWelcome == true ? `scale-1` : `scale-0  duration-300 hidden`}`}>
                <div className="flex items-center gap-1">
                    Selamat Datang
                    <div className="font-bold">
                        {auth && auth.dataProfile && auth.dataProfile.fullname}
                    </div>
                </div>
                <button onClick={() => auth.setAlertWelcome(false)} className="btn w-fit btn-transparant shadow-md flex items-center">
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </button>
            </div>
            <div className="dropdown">
                <button className="btn-white shadow-lg" onClick={hanldleDropdown}>
                    <div className="flex justify-between">
                        <div className="">{iniData ? iniData.nama : 'Daftar Keluarga'}</div>
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
                                <button key={index} onClick={() => handleSelectDropDown(item)} className={`${iniData && iniData.nik === item.nik ? `btn-secondary` : `btn-white`} shadow-md text-xs`}>
                                    <div className="">
                                        <p>{`${item.nama} - (${item.noRm})`}</p>
                                        <small className='font-thin'>{`${item.nik}`}</small>
                                    </div>
                                </button>
                            )
                        })}
                    </div>
                }
            </div>
            {dropdownSelect !== 'Daftar keluarga' &&
                <div className='section-transparant shadow-lg'>
                    <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-2 justify-center items-center">
                        <CardMenu
                            route={`/pendaftaran-online/${iniData.nik}`}
                            icon='/calendar2.png'
                            title='daftar Online'
                        />
                        <CardMenu
                            route='#'
                            icon='/checkin.png'
                            title='Check In'
                        />
                        <CardMenu
                            route='#'
                            icon='/doc2.png'
                            title='Rekam Medis'
                        />
                        <CardMenu
                            route='/history'
                            icon='/search.png'
                            title='Histori'
                        />
                    </div>
                </div>
            }
        </React.Fragment >
    )
}

export default Section