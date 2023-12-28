'use client'
import { AuthContext } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import React, { useState, useContext, useRef, useEffect } from 'react'

const Navbar = () => {
    const router = useRouter()
    const [dropdown, setDropdown] = useState<boolean>()
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const auth: any = useContext(AuthContext)
    const handleDropdown = () => {
        setDropdown(true)
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
            <div className="flex" ref={dropdownRef}>
                <div className="dropdown dropdown-end">
                    <button tabIndex={0} role="button" className="button shadow-md aspect-square">
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </div>
                    </button>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-lg border-none bg-base-100 rounded-md w-52 mt-3">
                        <button onClick={() => handleNavigation('/dashboard')} className="button">
                            <div className="flex gap-3 justify-between w-full">
                                Dashboard
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                            </div>
                        </button>
                        <button onClick={() => handleNavigation('/profile')} className="button">
                            <div className="flex gap-3 justify-between">
                                Profil
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                        </button>

                        <button onClick={() => auth.logout()} className="button">
                            <div className="flex gap-3 justify-between">
                                Logout
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
                                </svg>
                            </div>
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar