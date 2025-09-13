'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'خانه' },
  { href: '/articles', label: 'مقالات' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md dark:bg-gray-900">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800 dark:text-white"
        >
          وبلاگ
        </Link>

        <nav className="hidden space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Open menu">
            <Menu className="h-6 w-6 text-gray-800 dark:text-white" />
          </button>
        </div>
      </div>

      <div
        className={`bg-opacity-50 fixed inset-0 z-50 transform bg-gray-900 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={toggleMenu}
      >
        <div
          className="fixed top-0 right-0 h-full w-64 bg-white p-6 shadow-lg dark:bg-gray-900"
          onClick={(e) => e.stopPropagation()} // از بسته شدن منو با کلیک روی خود منو جلوگیری می‌کند
        >
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold dark:text-white">Menu</h2>
            <button onClick={toggleMenu} aria-label="Close menu">
              <X className="h-6 w-6 text-gray-800 dark:text-white" />
            </button>
          </div>
          <nav className="mt-8 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-lg text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
