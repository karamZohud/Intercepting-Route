import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='px-7 py-3 bg-gray-800 text-white font-semibold text-xl space-x-5'>
<Link href="/">Home</Link>
<Link href="/about">About</Link>
<Link href="/product">product</Link>
<Link href="/blog">Blog</Link>

    </nav>
  )
}
