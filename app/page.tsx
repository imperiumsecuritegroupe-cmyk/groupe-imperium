import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Histoire from '@/components/Histoire'
import Filiales from '@/components/Filiales'
import Valeurs from '@/components/Valeurs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollRevealInit from '@/components/ScrollRevealInit'

export default function Home() {
  return (
    <>
      <ScrollRevealInit />
      <Navbar />
      <Hero />
      <Stats />
      <Histoire />
      <Filiales />
      <Valeurs />
      <Contact />
      <Footer />
    </>
  )
}
