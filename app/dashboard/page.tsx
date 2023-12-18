import Image from 'next/image'
import Navbar from '../Component/Dashboard/Navbar'
import Body from './Body'

export default function Home() {
    return (
        <main className="main-section">
            <Navbar />
            <Body />
        </main>
    )
}
