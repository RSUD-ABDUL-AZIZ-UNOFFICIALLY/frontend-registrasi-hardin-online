import React from 'react'

const HeaderLogin = () => {
    return (
        <div className="header mb-4 mt-[40px]">
            <div className="flex justify-center">
                <div className="">
                    <img className='h-20' src="/skw.png" alt="" />
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