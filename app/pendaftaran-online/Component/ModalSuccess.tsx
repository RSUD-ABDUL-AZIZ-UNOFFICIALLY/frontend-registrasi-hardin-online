'use client'
import { DaftarOnlineContext } from '@/app/context/DaftarOnlineContext'
import React, { useContext, useEffect, useState } from 'react'

import { useRouter } from 'next/navigation';
import axios from 'axios';
import AlertSuccess from './AlertSuccess';
import AlertError from './AlertError';

const ModalSuccess = () => {
    const context: any = useContext(DaftarOnlineContext)
    const base_url = process.env.base_url

    const [success, setSuccess] = useState<boolean>(false)
    const [dataSuccess, setDataSuccess] = useState<any>()
    const [descSuccess, setDescSuccess] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [descError, setDescError] = useState<boolean>(false)


    const handleDaftarOnline = async () => {
        const body = {
            no_rkm_medis: context.familySelect.noRm,
            tanggal_periksa: context.dateBooking,
            kd_dokter: context.dokter.kd_dokter,
            kd_poli: context.poli.kd_poli,
            kd_pj: context.asuransi.kd_pj
        }

        const token = sessionStorage.getItem('authToken')
        if (token) {
            try {
                const response: any = await axios.post(`${base_url}/hardin/reg/bookingperiksa`, body, {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });
                console.log('daftar', response.data.data);
                if (response.data.error == false) {
                    setSuccess(true)
                    setDataSuccess(response.data.data)
                }

            } catch (error) {
                const response: any = error
                console.log('error', response.response.data.error);
                if (response.response.data.error == true) {
                    setError(true)
                }
            }
        }

    }

    return (
        <React.Fragment>
            <button onClick={() => handleDaftarOnline()} className="button-secondary">Daftar</button>
            <div className="">
                {success == true && <AlertSuccess data={dataSuccess} />}
                {error == true && <AlertError />}
            </div>

        </React.Fragment>
    )
}

export default ModalSuccess