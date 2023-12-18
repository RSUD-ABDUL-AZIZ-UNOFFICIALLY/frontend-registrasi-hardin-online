import React from 'react'
import CardBPJS from './Component/CardBPJS'

const SectionBPJS = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                <CardBPJS />
                <CardBPJS />
                <CardBPJS />
            </div>
        </div>
    )
}

export default SectionBPJS