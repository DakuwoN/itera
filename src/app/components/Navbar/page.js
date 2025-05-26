import Link from "next/link"

function Navbar(){
    return (
        <>
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/vegas">Vegas Lines</Link></li>
                <li><Link href="/trends">Trends</Link></li>
            </ul>
        </nav> 
        </>
    )
}

export default Navbar