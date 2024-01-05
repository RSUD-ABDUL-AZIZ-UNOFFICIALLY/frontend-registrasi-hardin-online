'use client'
import React from 'react'
import { DaftarOnlineProvider } from '@/app/context/DaftarOnlineContext';
import SectionUmum from './SectionUmum';

const Section = () => {
    return (
        <DaftarOnlineProvider>
            <div className="section shadow-lg p-3 animasi-popup">
                <SectionUmum />
            </div>
        </DaftarOnlineProvider>
    )
}

export default Section