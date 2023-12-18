import React from 'react'
import FormRegister from './FormRegister'
import HeaderLogin from '../Component/HeaderLogin'

const section = () => {
    return (
        <React.Fragment>
            <div className="login bg-login flex">
                <div className="p-3 w-full">
                    <HeaderLogin />
                    <div className="flex justify-center">
                        <div className="login-section shadow-lg  lg:w-[30%] md:w-[60%] w-[95%]">
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

export default section  