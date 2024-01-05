import React from 'react'
import SkwLogo from '../../public/skw.png'
import Image from 'next/image'

const HeaderLogin = () => {
    return (
        <div className="header mb-4 mt-[40px]">
            <div className="flex justify-center">
                <div className="">
                    <Image
                        src={SkwLogo}
                        height={100}
                        alt="Skw Icon"
                    />
                </div>
            </div>
            <div className="grid justify-center text-center mt-2">
                <div className="capitalize text-[25px] mb-[-5px]">Selamat Datang Di</div>
                <div className="font-bold uppercase text-[44px]">Hardin Online</div>
            </div>
        </div>
    )
}

export default HeaderLogin