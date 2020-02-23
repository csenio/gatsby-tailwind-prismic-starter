import React from 'react'
import './hamburger.css'

export default function Hamburger({isOpen, onClick}) {
  return (
    <button onClick={onClick} className="md:hidden hamburger relative z-50" data-is-open={isOpen}>
      <div className="top" />
      <div className="middle" />
      <div className="bottom" />
    </button>
  )
}
