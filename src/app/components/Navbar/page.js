import Link from "next/link"
import Image from "next/image"

function Navbar(){
    return (
        <>
        <nav className="flex flex-row justify-between">
            <Image src="/itera2.png" alt="Itera2" width={100} height={300}/>
        
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/trends">Trends</Link>
            <Link href="/vegas">Vegas</Link>
            <Link href="/news">News</Link>
        </nav>
        </>
    )
}

export default Navbar