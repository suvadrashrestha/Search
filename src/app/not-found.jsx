import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div>
      <h2> not found</h2>
      <Link href={"/"}>return home</Link>
    </div>
  )
}
