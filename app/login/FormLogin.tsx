'use client'
import axios from 'axios'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import AlertDanger from '../Component/Assets/AlertDanger'
import AlertSuccess from '../Component/Assets/AlertSuccess'
import ModalSuccess from '../Component/Login/ModalSuccess'
import { AuthContext } from '../context/AuthContext'

const FormLogin = () => {
    const router = useRouter()
    const auth: any = useContext(AuthContext)
    const base_url = process.env.base_url
    const [loading, setLoading] = useState<boolean>(false)
    const waktu_loading_otp: any = 120
    const [seconds, setSeconds] = useState<any>(waktu_loading_otp);
    const [timeFormat, setTimeFormat] = useState<any>()
    const [phone, setPhone] = useState<string>('')
    const [otp, setOtp] = useState<number | string>('')

    const [error, setError] = useState<boolean>(false)
    const [descError, setDescError] = useState<string>('')
    const [errorOtp, setErrorOtp] = useState<boolean>(false)
    const [descErrorOtp, setDescErrorOtp] = useState<string>('')
    const [success, setSuccess] = useState<boolean>(false)
    const [descSuccess, setDescSuccess] = useState<string>('')
    const [successOtp, setSuccessOtp] = useState<boolean>(false)
    const [descSuccessOtp, setDescSuccessOtp] = useState<string>('')

    const handleNavigation = (e: string) => {
        router.push(e)
    }

    const getOtp = async () => {
        if (phone && loading == false) {
            setLoading(true)
            sessionStorage.setItem('loadingOtp', waktu_loading_otp)
            try {
                const response: any = await axios({
                    method: 'post',
                    url: `${base_url}/hardin/login/sendOtp`,
                    data: {
                        phone: phone
                    }
                })
                if (response.data.error == false) {
                    setSuccessOtp(true)
                    setDescSuccessOtp('Kode Otp Berhasil Di Kirim ke Whatapps Anda')
                    setErrorOtp(false)
                    setDescError('')
                    setTimeout(() => {
                        setSuccessOtp(false)
                        setDescSuccessOtp('')
                    }, 10000)
                }

            } catch (error) {
                const response: any = error

                if (response && response.response && response.response.data) {
                    setErrorOtp(true)
                    setError(false)
                    setDescErrorOtp(response.response.data.message)
                    setTimeout(() => {
                        setErrorOtp(false)
                        setDescErrorOtp('')
                    }, 10000)
                }
            }
        } else {
            return
        }
    }

    const handleLogin = async () => {
        if (phone && otp) {
            try {
                const response: any = await axios({
                    method: 'post',
                    url: `${base_url}/hardin/login`,
                    data: {
                        phone: phone,
                        otp: otp,
                    }
                })
                if (response.data.error == false) {
                    setSuccess(true)
                    setError(false)
                    setDescError('')
                    setErrorOtp(false)
                    setDescErrorOtp('')
                    setDescSuccess('Login Berhasil')
                    auth.setAlertWelcome(true)
                    sessionStorage.setItem('authToken', response.data.data.token)
                    sessionStorage.removeItem('loadingOtp')
                    sessionStorage.removeItem('loadingOtpRegis')
                }

            } catch (error) {
                const response: any = error
                if (response && response.response && response.response.data) {
                    setError(true)
                    setErrorOtp(false)
                    setDescError(response.response.data.message)
                    setTimeout(() => {
                        setError(false)
                        setDescError('')
                    }, 10000)
                }
            }
        } else {
            return
        }
    }

    useEffect(() => {
        const timess: string | any = sessionStorage.getItem('loadingOtp')
        if (timess) {
            const loadingTime = parseInt(timess)
            setSeconds(loadingTime)
            setTimeFormat(moment.duration(loadingTime, 'seconds'))
            const countdown = setInterval(() => {
                if (seconds > 0) {
                    sessionStorage.setItem('loadingOtp', `${seconds - 1}`)
                    setSeconds(seconds - 1)
                    setTimeFormat(moment.duration(seconds - 1, 'seconds'))
                } else {
                    setLoading(false)
                    setSeconds(waktu_loading_otp)
                }
            }, 1000);

            return () => clearInterval(countdown);
        }

    }, [loading, seconds])



    return (
        <React.Fragment>
            {success && <ModalSuccess />}
            <div className="grid gap-1 w-full text-sm">
                <div className="form-input">
                    <label htmlFor="">Nomor Whatapps</label>
                    <input onChange={(e) => setPhone(e.target.value)} value={phone} className='shadow-lg input' type="number" placeholder='Masukan nomor whatapps' />
                </div>

                <div className="flex items-end gap-2">
                    <div className="w-[50%]">
                        <div className="form-input">
                            <label htmlFor="">Kode OTP</label>
                            <input onChange={(e) => setOtp(e.target.value)} className='shadow-lg input' type="number" placeholder='Masukan Kode OTP' />
                        </div>
                    </div>
                    <div className="w-[50%]">
                        <button disabled={timeFormat > 0 ? true : false} onClick={getOtp} className="shadow-lg button-primary w-full flex justify-between">
                            Minta OTP
                            {timeFormat > 0 ?
                                <React.Fragment>
                                    <div className="flex items-center">
                                        <p>{`${timeFormat.minutes()}:${timeFormat.seconds() < 10 ? `0${timeFormat.seconds()}` : `${timeFormat.seconds()}`}`}</p>
                                    </div>
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <span className="material-symbols-outlined">
                                        code
                                    </span>
                                </React.Fragment>
                            }
                        </button>
                    </div>
                </div>

                {errorOtp &&
                    <React.Fragment>
                        <div className="mt-3">
                            <AlertDanger desc={descErrorOtp} />
                        </div>
                    </React.Fragment>
                }
                {error &&
                    <React.Fragment>
                        <div className="mt-3">
                            <AlertDanger desc={descError} />
                        </div>
                    </React.Fragment>
                }

                {successOtp &&
                    <React.Fragment>
                        <div className="mt-3">
                            <AlertSuccess desc={descSuccessOtp} />
                        </div>
                    </React.Fragment>
                }
                <button onClick={handleLogin} className="button-info w-full mt-4">
                    Login
                </button>

                <div className="p-3 flex flex-wrap justify-center items-center gap-2 mt-4">
                    <div className="text-sm ">
                        Belum Punya Akun ?
                    </div>
                    <div className="w-[40%]">
                        <button onClick={() => handleNavigation('/register')} className="button-secondary shadow-lg">
                            Buat Akun
                        </button>
                    </div>
                </div>

            </div>
        </React.Fragment >
    )
}

export default FormLogin