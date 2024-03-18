'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext: any | null = createContext(null)

export const AuthProvider = ({ children }: { children: any }) => {
    const base_url = process.env.base_url
    const [dataSelect, setDataSelect] = useState<string | null>(null)
    const [token, setToken] = useState<string | null>()
    const [alertWelcome, setAlertWelcome] = useState<boolean>(true)
    const [login, setLogin] = useState<boolean>(false)
    const router = useRouter()
    const [dataProfile, setDataProfile] = useState<any>()

    const checkAuth = async () => {
        const getToken = sessionStorage.getItem('authToken')
        if (getToken) {
            try {
                const response: any = await axios.get(`${base_url}/hardin/profile`, {
                    headers: {
                        'Authorization': 'Bearer ' + getToken
                    }
                });
                if (response.data.error == false) {
                    setLogin(true)
                    setToken(getToken)
                    setDataProfile(response.data.data)
                }



            } catch (error) {
                const response: any = error
                if (response && response.response && response.response.data && response.response.data.status == false) {
                    setLogin(false)
                    setToken(null)
                }

            }
        } else {
            setLogin(false)
            setToken(null)
            router.push('/login')
        }
    }

    const getDataProfile = async () => {
        const getToken = sessionStorage.getItem('authToken')
        if (getToken) {
            try {
                const response: any = await axios.get(`${base_url}/hardin/profile`, {
                    headers: {
                        'Authorization': 'Bearer ' + getToken
                    }
                });
                if (response.data.error == false) {
                    setLogin(true)
                    setToken(getToken)
                    setDataProfile(response.data.data)
                }

            } catch (error) {
                const response: any = error
                if (response && response.response && response.response.data && response.response.data.status == false) {
                    setLogin(false)
                    setToken(null)
                }

            }
        } else {
            setLogin(false)
            setToken(null)
            router.push('/login')
        }
    }

    const logout = () => {
        sessionStorage.removeItem('authToken')
        sessionStorage.removeItem('loadingOtp')
        sessionStorage.removeItem('loadingOtpRegis')
        setLogin(false)
        setToken(null)
        checkAuth()
        // router.push('/login')
    }
    useEffect(() => {
        // checkAuth()
        getDataProfile()
    }, [])
    return (
        <AuthContext.Provider value={{ dataSelect, setDataSelect, token, login, logout, dataProfile, alertWelcome, setAlertWelcome, checkAuth, getDataProfile }}>
            {children}
        </AuthContext.Provider>
    )
}

