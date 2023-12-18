'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const CardMenu = ({ route, title, icon }: { route: string, title: string, icon: string }) => {
    const router = useRouter()
    const handleNavigasi = () => {
        router.push(route)
    }
    return (
        <button onClick={() => handleNavigasi()} className="btn-white shadow-lg aspect-square">
            <div className="flex justify-center h-[70%]">
                <img className='' src={icon} alt="" />
            </div>
            <div className="text-[10px] h-[30%] text-black p-1 sticky">{title}</div>
        </button>
    )
}

export default CardMenu