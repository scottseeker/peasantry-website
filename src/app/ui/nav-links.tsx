'use client'

import { usePathname } from "next/navigation"
import Link from 'next/Link'

export function NavLinks() {
    const pathname = usePathname()

    return (
        <nav>
            <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
                Home
            </Link>

            <Link
                className={`link ${pathname === '/content-home' ? 'active' : ''}`}
                href = "/content-home"
            >
                Your Content
            </Link>

            <Link
                className={`link ${pathname === '/about' ? 'active' : ''}`}
                href = "/about"
            >
                About
            </Link>
        </nav>
    )
}