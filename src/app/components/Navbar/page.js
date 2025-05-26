import Link from "next/link"
import Image from "next/image"

function Navbar(){
    return (
        <>
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md"> 
            <div className="flex items-center">
                <Image
                src="/itera2.png"
                alt="Itera"
                width={120}
                height={40}
                className="h-auto w-[120px]"
                />
            </div>        
            <div className="flex space-x-6">
                <Link href="/">Home</Link>
                <Link href="/vegas">Vegas Lines</Link>
                <Link href="/trends">Trends</Link>

            </div>
        
        </nav> 
        </>
    )
}

export default Navbar