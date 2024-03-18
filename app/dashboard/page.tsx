import Image from 'next/image'
import Navbar from '../Component/Dashboard/Navbar'
import Body from './Body'

export default function Home() {

    return (
        <main className="main-section flex justify-center">
            <div className="lg:md:w-[50vw] w-[95vw]  grid gap-2">
                <Navbar />
                <Body />
            </div>
        </main>
    )
}
