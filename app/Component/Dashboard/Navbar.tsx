'use client'
import { AuthContext } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import React, { useState, useContext, useRef, useEffect } from 'react'

const Navbar = () => {
    const router = useRouter()
    const [dropdown, setDropdown] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const auth: any = useContext(AuthContext)
    const handleDropdown = () => {
        if (dropdown == false) {
            setDropdown(true)
        } else {
            setDropdown(false)
        }
    }
    const handleNavigation = (e: string) => {
        router.push(e)
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node | null)) {
                setDropdown(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])
    return (
        <div className='navbar shadow-md'>
            <div className="aspect-square shadow-md h-full p-2 rounded-[7px]">
                <img className='' src="/skw.png" alt="" />
                {/* Hai, Amirull Azmi */}
            </div>
            <div className="flex">
                <button onClick={() => handleDropdown()} className="btn-white shadow-md aspect-square ">
                    <div className="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    </div>
                </button>
                <div ref={dropdownRef} className={`fixed p-3 bg-white shadow-lg m-4 ease-in-out right-0 duration-400 ${dropdown == true ? `translate-y-14 opacity-100` : `translate-y-0 opacity-0 scale-0`} opacity-0 rounded-lg grid gap-2`}>
                    <button className="btn">
                        <div className="flex gap-3 justify-between">
                            Profile
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </div>
                    </button>
                    <button onClick={() => auth.logout()} className="btn">
                        <div className="flex gap-3 justify-between">
                            Logout
                            <span className="material-symbols-outlined">
                                logout
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar