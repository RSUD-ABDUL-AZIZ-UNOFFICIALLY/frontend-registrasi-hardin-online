'use client'
import axios from 'axios'
import moment from 'moment'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
export const DaftarOnlineContext: any | null = createContext(null)

export const DaftarOnlineProvider = ({ children }: { children: any }) => {
    const base_url = process.env.base_url
    const [nik, setNik] = useState<string | null>()
    const [name, setName] = useState<string | null>()
    const [noRm, setNoRm] = useState<string | null>()
    const [poli, setPoli] = useState<any>()
    const [asuransi, setAsuransi] = useState<any>()
    const [dokter, setDokter] = useState<any>()
    const [dateBooking, setDateBooking] = useState<string>(moment().format('YYYY-MM-DD'))
    const [dataFamily, setDataFamily] = useState<any | null>()
    const [familySelect, setFamilySelect] = useState<any | null>(null)
    const [dataPoli, setDataPoli] = useState<any | null>(null)
    const [dataDokter, setDataDokter] = useState<any | null>(null)
    const [dataAsuransi, setDataAsuransi] = useState<any | null>(null)
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
                    setDataFamily(response.data.data)

                    response.data.data.map((item: any) => {
                        if (item.nik == nik) {
                            setNoRm(item.noRm)
                            setFamilySelect(item)
                        }
                    })

                }
            } catch (error) {
                const response: any = error

            }
        }
    }

    const getPoli = async () => {
        const token = sessionStorage.getItem('authToken')
        if (token) {
            try {
                const response: any = await axios.get(`${base_url}/hardin/reg/poli`, {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });
                if (response.data.error == false) {
                    setDataPoli(response.data.data)
                }
            } catch (error) {
                const response: any = error

            }
        }
    }
    const getDokter = async (e: string, i: string) => {
        const token = sessionStorage.getItem('authToken')
        if (token) {
            try {
                const response: any = await axios.get(`${base_url}/hardin/reg/jadwal?kd_poli=${e}&tanggal_periksa=${i}`, {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });

                if (response.data.error == false) {
                    setDataDokter(response.data.data)
                }
            } catch (error) {
                const response: any = error

            }
        }
    }
    const getAsuransi = async () => {
        const token = sessionStorage.getItem('authToken')
        if (token) {
            try {
                const response: any = await axios.get(`${base_url}/hardin/reg/asuransi`, {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });

                if (response.data.error == false) {
                    setDataAsuransi(response.data.data)
                }
            } catch (error) {
                const response: any = error

            }
        }
    }

    const handleNik = (e: string) => {
        setNik(e)
    }

    const handleName = (e: string) => {
        setName(e)
    }

    const handleNoRm = (e: string) => {
        setNoRm(e)
    }

    const handlePoli = (e: string) => {
        setPoli(e)
        setDokter(null)
        setAsuransi(null)
    }

    const handleDokter = (e: string) => {
        setDokter(e)
    }

    const handleDateBooking = (e: string) => {
        setDateBooking(e)
        setDokter(null)
    }

    const handleReset = () => {
        setPoli(null)
        setDokter(null)
        setAsuransi(null)
    }

    useEffect(() => {
        getFamily()
        getAsuransi()
    }, [])

    return (
        <DaftarOnlineContext.Provider
            value={{
                nik, name, noRm, poli, dokter, dataPoli, dataDokter, dataFamily, setDataFamily, dateBooking, setDateBooking, dataAsuransi, asuransi, setAsuransi,
                handleNik, handleName, handleNoRm, handlePoli, handleDokter, familySelect, setFamilySelect, getPoli, getDokter, handleDateBooking, getFamily, getAsuransi, handleReset
            }}>
            {children}
        </DaftarOnlineContext.Provider>
    )
}

export const useStateContext = () => {
    const context = useContext(DaftarOnlineContext);
    if (!context) {
        throw new Error('useStateContext must be used within a DaftarOnlineProvider');
    }
    return context;
};
