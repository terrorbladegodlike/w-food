"use client"

// Import useState
import React, { useState } from "react"

// Import React-Icons
import { RiMenu2Line, RiHomeFill } from "react-icons/ri"
import { IoCloseOutline } from "react-icons/io"
import { BiSolidFoodMenu } from "react-icons/bi"
import { FaUsers, FaEnvelope } from "react-icons/fa"

// Import Link as ScrollLink
import { Link as ScrollLink } from "react-scroll"

// Import Image & Link from next
import Link from "next/link"
import Image from "next/image"

// Import Button from UI
import { Button } from "./ui/button"

const links = [
   {
      icon: <RiHomeFill />,
      path: "home",
      name: "home",
      offset: 0,
   },
   {
      icon: <BiSolidFoodMenu />,
      path: "menu",
      name: "menu",
      offset: 0,
   },
   {
      icon: <FaUsers />,
      path: "about",
      name: "about",
      offset: -50,
   },
   {
      icon: <RiHomeFill />,
      path: "home",
      name: "home",
      offset: 0,
   },
]

const NavMobile = ({ containerStyles, iconStyles, linkstyles }) => {
   const [isOpen, setIsOpen] = useState(false)

   console.log(isOpen)
   return (
      <div className={`${containerStyles}`}>
         {/* Nav Trigger Btn */}
         <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer outline-none"
         >
            <RiMenu2Line className="text-3xl text-white transition-all duration-200" />
         </div>
      </div>
   )
}

export default NavMobile
