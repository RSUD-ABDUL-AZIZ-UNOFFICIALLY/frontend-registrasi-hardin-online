'use client'
import React, { useContext, useEffect } from 'react'
import FormRegister from './FormRegister'
import HeaderLogin from '../Component/HeaderLogin'
import { useRouter } from 'next/navigation'
import { AuthContext } from '../context/AuthContext'

const Section = () => {
    const auth: any = useContext(AuthContext)
    const router = useRouter()
    useEffect(() => {
        if (auth.login == true) {
            router.push('/dashboard')
        }
    }, [auth.login])
    return (
        <React.Fragment>
            <div className="login bg-login flex">
                <div className="p-3 w-full">
                    <HeaderLogin />
                    <div className="flex justify-center">
                        <div className="login-section shadow-lg  lg:w-[30%] md:w-[60%] w-[95%] animasi-popup">
                            <div className="p-3 flex justify-center items-center">
                                <FormRegister />
                            </div>
                        </div >
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default Section  