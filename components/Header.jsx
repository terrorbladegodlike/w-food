"use client"

// Import UseState & UseEffect
import React, { useState, useEffect } from "react"

// Import Link & Image From Next
import Image from "next/image"
import Link from "next/link"

// Import Link as ScrollLink
import { Link as ScrollLink } from "react-scroll"

// Import Components
import NavMobile from "./NavMobile"
import Nav from "./Nav"

// Import Button from UI
import { Button } from "./ui/button"

const Header = () => {
   // UseState Nav
   const [active, setActive] = useState(false)

   // UseEffect
   useEffect(() => {
      const handleScroll = () => {
         // Detect Scroll
         setActive(window.scrollY > 100)
      }

      // Add Event listener
      window.addEventListener("scroll", handleScroll)

      // clear event listener
      return () => {
         window.removeEventListener("scroll", handleScroll)
      }
   }, [])

   return (
      <header
         className={`${
            active ? "bg-black py-4" : "bg-none py-8"
         } fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200`}
      >
         <div className="container mx-auto">
            {/* Logo & Nav & BTN */}
            <div className="flex items-center justify-between">
               {/* Logo */}
               <Link href="/">
                  <Image src="/logo.svg" width={75} height={30} alt="logo" />
               </Link>
               {/* Nav */}
               <Nav
                  containerStyles="hidden xl:flex gap-x-12 text-white"
                  linkStyles="capitalize"
               />
               {/* BTN */}
               <ScrollLink to="reservation" smooth={true}>
                  <Button variants="orange" size="sm">
                     Book A Table
                  </Button>
               </ScrollLink>
               {/* Mobile Nav */}
               <NavMobile containerStyles="xl:hidden" />
            </div>
         </div>
      </header>
   )
}

export default Header
