import React from 'react'
import SkwLogo from '../../public/skw.png'
import Image from 'next/image'

const HeaderLogin = () => {
    return (
        <div className="header mb-4 p-3">
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
                <div className="uppercase font-bold text-[25px] bg-secondary p-1">Selamat Datang Di</div>
                <div className="font-bold uppercase text-[30px] bg-warning p-1 text-black">Dr. Aziz Online</div>
            </div>
        </div>
    )
}

export default HeaderLogin