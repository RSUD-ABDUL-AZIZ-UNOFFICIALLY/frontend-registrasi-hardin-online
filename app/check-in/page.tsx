import Navbar from '@/app/Component/Dashboard/Navbar'
import Image from 'next/image'
import Section from './Section';

export default function Home() {
    return (
        <main className="main-section">
            <Navbar />
            <Section />
        </main>
    )
}
