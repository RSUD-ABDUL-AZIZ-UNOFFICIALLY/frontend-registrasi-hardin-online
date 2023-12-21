'use client'
import React from 'react'
import FormLogin from './FormLogin'
import HeaderLogin from '../Component/HeaderLogin'

const section = () => {
    return (
        <React.Fragment>
            <div className="login">
                <div className="p-3 w-full">
                    <HeaderLogin />
                    <div className="flex justify-center">
                        <div className="login-section lg:w-[30%] md:w-[60%] w-[95%] shadow-lg animasi-popup">
                            <div className="p-3 flex justify-center items-center ">
                                <FormLogin />
                            </div>
                        </div >
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default section  