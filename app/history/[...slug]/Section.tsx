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
    const getDaftarBooking = async () => {
        const token = sessionStorage.getItem('authToken')

        if (token) {
            try {
                const response: any = await axios.get(`${base_url}/hardin/reg/bookingperiksa?no_rkm_medis=${context.familySelect.noRm}`, {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });

                console.log(response.data);

                if (response.data.error == false) {
                    setData(response.data.data)
                }
            } catch (error) {
                const response: any = error
            }
        }

    }

    useEffect(() => {
        context.handleNik(slug)
        getDaftarBooking()
    }, [])

    return (
        <React.Fragment>
            <div className={`section shadow-lg`}>
                <div className="section text-center">Tidak Ada Histori Registrasi</div>
            </div>

        </React.Fragment>

    )
}

export default Section