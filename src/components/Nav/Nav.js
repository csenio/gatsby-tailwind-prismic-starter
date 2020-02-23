import React, {useState, useEffect} from 'react'
import logo from '@images/logo.svg'
import {Link} from 'gatsby'
import Hamburger from './components/Hamburger/hamburger'

const links = [
  {
    text: 'Practice Areas',
    link: '/practice-areas',
  },
  {
    text: 'About Us',
    link: '/services',
  },
]

export default function Nav() {
  useEffect(() => {
    const getHeight = () => {
      const doc = document.documentElement
      doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', getHeight)
    return () => window.removeEventListener('resize', getHeight)
  })

  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 w-full z-40 h-16 shadow-sm bg-white">
      <div className="container flex items-center h-full py-2">
        <Link className="h-full mr-auto" to="/">
          <img className="h-full" src={logo} alt="Stanford and Dillinger" />
        </Link>
        {links.map(l => (
          <Link className="mr-8 hidden md:block" to={l.link}>
            {l.text}
          </Link>
        ))}
        <Link className="btn mr-3">Contact</Link>
        <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>
      {isOpen && (
        <div className="md:hidden z-40 fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center">
          {links.map(({text, link}) => (
            <Link
              to={link}
              className="bg-transparent font-medium  mb-6 text-xl p-3 rounded"
              activeClassName="bg-gray-200"
            >
              {text}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
