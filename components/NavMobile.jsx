"use client"

// Import useState
import React, { useState } from "react"

// Import React-Icons
import { RiMenu2Line, RiHomeFill } from "react-icons/ri"
import { IoMdClose } from "react-icons/io"
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
      icon: <FaEnvelope />,
      path: "contact",
      name: "contact",
      offset: 0,
   },
]

const NavMobile = ({ containerStyles, iconStyles, linkStyles }) => {
   const [isOpen, setIsOpen] = useState(false)

   return (
      <div className={`${containerStyles}`}>
         {/* Nav Trigger Btn */}
         <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer outline-none"
         >
            <RiMenu2Line className="text-3xl text-white transition-all duration-200" />
         </div>
         <aside
            className={`${
               isOpen ? "right-0" : "-right-full"
            } bg-black fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500`}
         >
            <div className="flex flex-col items-center justify-between h-full">
               {/* Nav Close Btn */}
               <div
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer text-4xl text-white absolute w-10 h-10 left-8 top-8 flex items-center justify-center"
               >
                  <IoMdClose />
               </div>
               {/* Logo */}
               <Link href="/">
                  <Image src="/logo.svg" width={90} height={36} alt="logo" />
               </Link>
               {/* Links */}
               <div className="flex flex-col gap-y-8">
                  {links.map((link, index) => {
                     return (
                        <ScrollLink
                           key={index}
                           to={link.path}
                           offset={link.offset}
                           smooth={false}
                           className="flex items-center gap-x-3"
                        >
                           <div className={`${iconStyles}`}>{link.icon}</div>
                           <div className={`${linkStyles}`}>{link.name}</div>
                        </ScrollLink>
                     )
                  })}
               </div>
               {/* Btn */}
               <ScrollLink to="reservation" smooth offset={-150}>
                  <Button variant="orange">Book a Table</Button>
               </ScrollLink>
            </div>
         </aside>
      </div>
   )
}

export default NavMobile
