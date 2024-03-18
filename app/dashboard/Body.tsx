'use client'
import React, { useEffect, useState, useContext } from 'react'
import Section from './Section'
import SectionNone from './SectionNone'
import axios from 'axios'
import { DaftarOnlineContext } from '../context/DaftarOnlineContext'
import { AuthContext } from '../context/AuthContext'

const Body = () => {
    const daftarOnline: any = useContext(DaftarOnlineContext)
    const base_url = process.env.base_url
    const auth: any = useContext(AuthContext)
    const [dataFamily, setDataFamily] = useState<any | null>()
    const getDataFamily = async () => {
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
                }
            } catch (error) {
                setDataFamily(null)

            }
        }
    }

    useEffect(() => {
        getDataFamily()
    }, [])
    return (
        <React.Fragment>
            {/* <Section  */}
            {dataFamily ?
                <>
                    <Section />
                </>
                :
                <>
                    <SectionNone />
                </>
            }
        </React.Fragment>
    )
}

export default Body