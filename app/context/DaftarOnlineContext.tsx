'use client'
import React, { createContext, useContext, useState } from 'react'

export const DaftarOnlineContext: any | null = createContext(null)

export const DaftarOnlineProvider = ({ children }: { children: any }) => {
    const [nik, setNik] = useState<string | null>()
    const [name, setName] = useState<string | null>()
    const [noRm, setNoRm] = useState<string | null>()
    const [asuransi, setAsuransi] = useState<string | null>()
    const [poli, setPoli] = useState<string | null>()
    const [dokter, setDokter] = useState<string | null>()
    const [dataFamily, setDataFamily] = useState<any | null>()
    const data = [
        { id: 1, no_rm: '123167', nik: '6172xxxxxxxx12', name: 'Amirull Azmi' },
        { id: 2, no_rm: '433234', nik: '6172xxxxxxxx23', name: 'Muhammad Irfansyah' },
        { id: 3, no_rm: '432234', nik: '6172xxxxxxxx78', name: 'Fakhry' },
        { id: 4, no_rm: '892323', nik: '6172xxxxxxxx90', name: 'Hamida' },
        { id: 5, no_rm: '782754', nik: '6172xxxxxxxx57', name: 'Devian Balado' },
        { id: 6, no_rm: '632187', nik: '6172xxxxxxxx34', name: 'Amiruddin Istiqomah' },
    ]
    const dataPoli = [
        { id: 1, name: 'Poli 1' },
        { id: 2, name: 'Poli 2' },
        { id: 3, name: 'Poli 3' },
        { id: 4, name: 'Poli 4' },
        { id: 5, name: 'Poli 5' },
        { id: 6, name: 'Poli 6' },
        { id: 7, name: 'Poli 7' },

    ]
    const dataDokter = [
        { id: 1, name: 'Dr Dummy 1' },
        { id: 2, name: 'Dr Dummy 2' },
        { id: 3, name: 'Dr Dummy 3' },
        { id: 4, name: 'Dr Dummy 4' },
        { id: 5, name: 'Dr Dummy 5' },
        { id: 6, name: 'Dr Dummy 6' },
        { id: 7, name: 'Dr Dummy 7' },

    ]

    const handleNik = (e: string) => {
        setNik(e)
    }

    const handleName = (e: string) => {
        setName(e)
    }

    const handleNoRm = (e: string) => {
        setNoRm(e)
    }

    const handleAsuransi = (e: string) => {
        setAsuransi(e)
    }

    const handlePoli = (e: string) => {
        setPoli(e)
        setDokter(null)
    }

    const handleDokter = (e: string) => {
        setDokter(e)
    }

    return (
        <DaftarOnlineContext.Provider
            value={{
                nik, name, noRm, asuransi, poli, dokter, data, dataPoli, dataDokter, dataFamily, setDataFamily,
                handleNik, handleName, handleNoRm, handleAsuransi, handlePoli, handleDokter
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
