import Navbar from '@/app/Component/Dashboard/Navbar'
import Image from 'next/image'
import Section from './Section';

export default function Home() {
    return (
        <main className="main-section flex justify-center">
            <div className="lg:md:w-[50vw] w-[95vw]  grid gap-2">
                <Navbar />
                <Section />
            </div>
        </main>
    )
}
