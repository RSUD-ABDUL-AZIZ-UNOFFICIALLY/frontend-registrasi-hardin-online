import Navbar from '@/app/Component/Dashboard/Navbar'
import Image from 'next/image'
import Section from './Section';

export default function Home({ params }: { params: any }) {
    return (
        <main className="main-section">
            <Navbar />
            <Section slug={decodeURIComponent(params.slug)} />
        </main>
    )
}
