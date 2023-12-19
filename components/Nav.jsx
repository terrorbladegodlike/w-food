// Import Link from React-Scroll
import { Link } from 'react-scroll'

const links = [
   {
      path: 'home',
      name: 'home',
      offset: -50,
   },
   {
      path: 'menu',
      name: 'menu',
      offset: -50,
   },
   {
      path: 'about',
      name: 'about',
      offset: -150,
   },
   {
      path: 'contact',
      name: 'home',
      offset: 0,
   },
]

const Nav = ({ containerStyles, linkStyles }) => {
   return (
      <nav className={`${containerStyles}`}>
         {links.map((link, index) => {
            return (
               <Link
                  key={index}
                  to={link.path}
                  spy={true}
                  smooth={true}
                  offset={link.offset}
               >
                  {link.name}
               </Link>
            )
         })}
      </nav>
   )
}

export default Nav