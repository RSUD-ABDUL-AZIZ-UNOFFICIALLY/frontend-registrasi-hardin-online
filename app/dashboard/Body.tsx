'use client'
import React, { useEffect, useState, useContext } from 'react'
import Section from './Section'
import SectionNone from './SectionNone'
import axios from 'axios'
import { DaftarOnlineContext } from '../context/DaftarOnlineContext'
import { AuthContext } from '../context/AuthContext'

const Body = () => {
    const daftarOnline: any = useContext(DaftarOnlineContext)
    const auth: any = useContext(AuthContext)

    useEffect(() => {
        daftarOnline.getFamily()
    }, [])
    return (
        <React.Fragment>
            {daftarOnline.dataFamily ?
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