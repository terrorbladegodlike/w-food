// Import Components
import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Menu from '@/components/Menu'
import Reservation from '@/components/Reservation'

export default function Home() {
   return (
      <main className='w-full max-w-[1440px] bg-white mx-auto overflow-hidden'>
         <Header />
         <Hero />
         <Menu />
         <Reservation />
         <About />
         <div className='h-[4000px]'></div>
      </main>
   )
}
