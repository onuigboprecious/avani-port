import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {BsBook} from 'react-icons/bs'
import{BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : '' }><BsBook/></a>
      <a href='#service' onClick={()=> setActiveNav('#service')} className={activeNav === '#service' ? 'active' : '' }><RiServiceLine /></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : '' }><BiMessageSquareDetail /></a>
    </nav> 
  )
}

export default Nav