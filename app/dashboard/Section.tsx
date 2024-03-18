'use client'
import React, { useEffect, useState, useContext, useMemo } from 'react'
import CardMenu from './component/CardMenu'
import axios from 'axios'
import { DaftarOnlineContext } from '../context/DaftarOnlineContext'
import { AuthContext } from '../context/AuthContext'
import Image from 'next/image'
import welcome from '../../public/hardin/welcome_hardin.jpg'
const Section = () => {
    const auth: any = useContext(AuthContext)

    useEffect(() => {
        // auth.checkAuth()
    }, [])
    return (
        <React.Fragment>
            <div className={`animasi-popup rounded-lg shadow-lg bg-white ease-in-out duration-300 overflow-hidden ${auth && auth.alertWelcome == true ? `scale-1` : `scale-0  duration-300 hidden`}`}>
                {/* <div className="flex items-center justify-between gap-1 p-3">
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
                    <Image
                        src={welcome}
                        alt="welcome image"
                    />
                </div> */}
            </div>
            <CardMenu />
        </React.Fragment >
    )
}

export default Section