import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Amenities from './components/Amenities'
import Transformations from './components/Transformations'
import Pricing from './components/Pricing'
import Schedule from './components/Schedule'
import Trainers from './components/Trainers'
import Gallery from './components/Gallery'
import Instagram from './components/Instagram'
import Testimonials from './components/Testimonials'
import BMICalculator from './components/BMICalculator'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

const Divider = () => <div className="section-divider mx-auto max-w-5xl" />

function App() {
  return (
    <div className="min-h-screen bg-dark text-text font-poppins overflow-x-hidden">
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Services />
      <Divider />
      <Amenities />
      <Divider />
      <Transformations />
      <Divider />
      <Pricing />
      <Divider />
      <Schedule />
      <Divider />
      <Trainers />
      <Divider />
      <Gallery />
      <Divider />
      <Instagram />
      <Divider />
      <Testimonials />
      <Divider />
      <BMICalculator />
      <Divider />
      <FAQ />
      <Divider />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
