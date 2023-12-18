'use client'
import React, { useEffect, useState } from 'react'
import Section from './Section'
import SectionNone from './SectionNone'
import axios from 'axios'

const Body = () => {
    const [family, setFamily] = useState<boolean>(false)
    const base_url = process.env.base_url
    const getAnggotaKeluarga = async () => {
        const token = sessionStorage.getItem(`authToken`)
        try {
            const response: any = await axios.get(`${base_url}/hardin/myfamily`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            if (response.data.error == false) {
                setFamily(true)
            } else {
                setFamily(false)
            }
        } catch (error) {
            const response: any = error
            if (response && response.response.data.error == true) {
                setFamily(false)
            }
        }
    }

    useEffect(() => {
        getAnggotaKeluarga()
    }, [])
    return (
        <React.Fragment>
            {family == true ?
                <>
                    <Section />
                </>
                :
                <>
                    <SectionNone />
                    <button onClick={() => setFamily(true)} className="btn-secondary capitalize">Jika Ada Data Keluarga</button>
                </>
            }
        </React.Fragment>
    )
}

export default Body