import Navbar from '@/app/Component/Dashboard/Navbar'
import Image from 'next/image'
import Body from './[...slug]/Body'

export default function Home({ params }: { params: any }) {
    // const slug = params.slug
    console.log('params', decodeURIComponent(params.slug));

    return (
        <main className="main-section">
            <Navbar />
            <Body />
        </main>
    )
}
