'use client'
import React, { useContext, useEffect } from 'react'
import FormLogin from './FormLogin'
import HeaderLogin from '../Component/HeaderLogin'
import { AuthContext } from '../context/AuthContext'
import { useRouter } from 'next/navigation'
import FooterLogin from '../Component/FooterLogin'

const Section = () => {
    const auth: any = useContext(AuthContext)
    const router: any = useRouter()
    useEffect(() => {
        if (auth.login == true) {
            router.push('/dashboard')
        }
        auth.checkAuth()
    }, [auth.login])
    return (
        <React.Fragment>
            <div className="login min-h-[100vh]">
                <HeaderLogin />
                <div className="flex justify-center">
                    <div className="login-section lg:w-[30%] md:w-[60%] w-[95%] shadow-lg animasi-popup">
                        <div className="p-3 flex justify-center items-center ">
                            <FormLogin />
                        </div>
                    </div >
                </div>
                {/* <FooterLogin /> */}
            </div>
        </React.Fragment>

    )
}

export default Section  