import Link from "next/link"

//components
import About from "../about/page"

export default function Navbar() {
  return (
    <nav>
        <h2>Navbar</h2>
        <Link href="/">Main</Link>
        <Link href="/about">About</Link>
    </nav>
  )
}
