import React from 'react'

const AlertSuccess = ({ desc }: { desc: string }) => {
    return (
        <div className='p-3 bg-white text-green-500 rounded shadow-lg uppercase flex justify-between items-center'>
            {desc}
            <span className="material-symbols-outlined">
                error
            </span>
        </div>
    )
}

export default AlertSuccess