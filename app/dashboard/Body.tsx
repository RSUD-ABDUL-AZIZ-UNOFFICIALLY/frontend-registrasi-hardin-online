'use client'
import React, { useEffect, useState, useContext } from 'react'
import Section from './Section'
import SectionNone from './SectionNone'
import axios from 'axios'
import { DaftarOnlineContext } from '../context/DaftarOnlineContext'

const Body = () => {
    const daftarOnline: any = useContext(DaftarOnlineContext)

    useEffect(() => {
        daftarOnline.getFamily()
    }, [])
    return (
        <React.Fragment>
            {daftarOnline.dataFamily ?
                <>
                    <SectionNone />
                </>
                :
                <>
                    <Section />
                </>
            }
        </React.Fragment>
    )
}

export default Body