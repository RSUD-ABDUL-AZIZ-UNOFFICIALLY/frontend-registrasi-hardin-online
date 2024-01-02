import Image from 'next/image'
import Navbar from '../Component/Dashboard/Navbar'
import Section from './Section'


export default function Home() {
    return (
        <main className="main-section">
            <Navbar />
            <Section />
        </main>
    )
}
