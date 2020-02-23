import React from 'react'
import Nav from './Nav'

import '../css/tailwind.css'

const Layout = ({children}) => (
  <>
    <Nav />
    <main>{children}</main>
    <footer className="bg-gray-800 md:p-12 text-white mt-auto">
      <div className="container">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </footer>
  </>
)

export default Layout
