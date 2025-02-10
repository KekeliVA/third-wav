import React from 'react'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <a href="#" className="text-lg font-bold">Brand</a>
      <ul className="flex space-x-4">
      <li><a href="#" className="hover:text-gray-300">Albums/EPs</a></li>
      <li><a href="#" className="hover:text-gray-300">Singles</a></li>
      <li><a href="#" className="hover:text-gray-300">Login</a></li>
  </ul>
</nav>
  )
}
