'use client'
import React, { useContext, useEffect, useState } from 'react'
import { DaftarOnlineContext, DaftarOnlineProvider } from '@/app/context/DaftarOnlineContext';
import SectionUmum from './SectionUmum';
import SectionBPJS from './SectionBPJS';

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