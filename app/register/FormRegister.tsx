'use client'
import axios from 'axios'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import AlertDanger from '../Component/Assets/AlertDanger'
import AlertSuccess from '../Component/Assets/AlertSuccess'
import ModalSuccess from '../Component/Register/ModalSuccess'

const FormRegister = () => {
    const router = useRouter()
    const [name, setName] = useState<any>()
    const [phone, setPhone] = useState<any>()
    const [otp, setOtp] = useState<any>()
    const [nik, setNik] = useState<any>()

    const base_url = process.env.base_url
    const [loading, setLoading] = useState<boolean>(false)
    const waktu_loading_otp: any = 120
    const [seconds, setSeconds] = useState<any>(waktu_loading_otp);
    const [timeFormat, setTimeFormat] = useState<any>()

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
            sessionStorage.setItem('loadingOtpRegis', waktu_loading_otp)
            try {
                const response: any = await axios({
                    method: 'post',
                    url: `${base_url}/hardin/daftar/sendOtp`,
                    data: {
                        phone: phone
                    }
                })
                console.log('response otp regis', response.data);

                if (response.data.error == false) {
                    setSuccessOtp(true)
                    setDescSuccessOtp('Kode Otp Berhasil Di Kirim ke Whatapps Anda')
                    setTimeout(() => {
                        setSuccessOtp(false)
                        setDescSuccessOtp('')
                    }, 10000)
                }

            } catch (error) {
                const response: any = error
                console.log('error otp regis', response.response);
                if (response && response.response && response.response.data) {
                    setErrorOtp(true)
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


    const handleRegister = async () => {
        if (name && phone && otp && nik) {
            try {
                const response: any = await axios({
                    method: 'post',
                    url: `${base_url}/hardin/daftar`,
                    data: {
                        name: name,
                        phone: phone,
                        otp: otp,
                        nik: nik
                    }
                })

                if (response.data.error == false) {
                    setSuccess(true)
                    setError(false)
                    setDescError('')
                    setErrorOtp(false)
                    setDescErrorOtp('')
                    setDescSuccess('Berhasil Melakukan Registrasi')
                    sessionStorage.removeItem('loadingOtp')
                    sessionStorage.removeItem('loadingOtpRegis')
                }

            } catch (error) {
                const response: any = error
                if (response && response.response && response.response.data) {
                    setError(true)
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
        const timess: string | any = sessionStorage.getItem('loadingOtpRegis')
        if (loading || timess) {
            const loadingTime = parseInt(timess)
            setSeconds(loadingTime)
            setTimeFormat(moment.duration(loadingTime, 'second'))
            const countdown = setInterval(() => {
                if (seconds > 0) {
                    sessionStorage.setItem('loadingOtpRegis', `${seconds - 1}`)
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
            <div className="grid gap-3 w-full text-sm">
                {success && <ModalSuccess />}

                <div className="form-input">
                    <label htmlFor="">Nama Lengkap</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} className='shadow-lg input' type="text" placeholder='Masukan nama lengkap' />
                </div>
                <div className="form-input">
                    <label htmlFor="">Nomor Whatapps</label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} className='shadow-lg input' type="number" placeholder='Masukan nomor whatapps' />
                </div>
                <div className="flex items-end gap-2">
                    <div className="w-[50%]">
                        <div className="form-input">
                            <label htmlFor="">Kode OTP</label>
                            <input type='number' value={otp} onChange={(e) => setOtp(e.target.value)} maxLength={6} className='shadow-lg input' placeholder='Masukan kode OTP' />
                        </div>
                    </div>
                    <div className="w-[50%]">
                        <button disabled={timeFormat > 0 ? true : false} onClick={getOtp} className="shadow-lg button-primary w-full flex justify-between items-center">
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
                {errorOtp && <AlertDanger desc={descErrorOtp} />}
                {successOtp && <AlertSuccess desc={descSuccessOtp} />}
                <div className="form-input">
                    <label htmlFor="">NIK</label>
                    <input value={nik} onChange={(e) => setNik(e.target.value)} className='shadow-lg input' type="text" placeholder='Masukan NIK' />
                </div>
                {name && phone && otp && nik ?
                    <div className="text-green-500 flex items-center gap-1">
                        *Data Sudah Lengkap
                        <span className="material-symbols-outlined">
                            task_alt
                        </span>
                    </div>
                    :
                    <div className="text-red-500 flex items-center gap-1">
                        *Semua Data Wajib Di Isi
                        <span className="material-symbols-outlined">
                            error
                        </span>
                    </div>
                }
                {error && <AlertDanger desc={descError} />}
                <button onClick={handleRegister} className="shadow-lg button-secondary w-full mt-4">
                    Daftar
                </button>

                <div className="p-3 flex flex-wrap justify-center items-center gap-2 mt-4">
                    <div className="text-sm ">
                        Sudah Punya Akun ?
                    </div>
                    <div className="w-[40%]">
                        <button onClick={() => handleNavigation('/login')} className="shadow-lg button-info">
                            Masuk
                        </button>
                    </div>
                </div>

            </div>
        </React.Fragment >
    )
}

export default FormRegister  