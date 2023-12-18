import React from 'react'

const AlertDanger = ({ desc }: { desc: string }) => {
    return (
        <div className='p-3 bg-white text-red-600 rounded shadow-lg uppercase flex justify-between items-center'>
            {desc}
            <span className="material-symbols-outlined">
                error
            </span>
        </div>
    )
}

export default AlertDanger