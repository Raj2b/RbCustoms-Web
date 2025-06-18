// pages/starlight-headliner.tsx
import Head from 'next/head'
import Script from 'next/script'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useEffect } from 'react'
import ServicesDropdown from '@/components/ServicesDropsdown'

export default function StarlightHeadliner() {
  useEffect(() => {
    const carousel = document.querySelector('.carousel-images') as HTMLElement
    const dots = document.querySelectorAll('.dot')
    let currentIndex = 0

    function showSlide(index: number) {
      if (carousel) {
        carousel.style.transform = `translateX(-${index * 100}%)`
      }
      dots.forEach((dot, i) =>
        dot.classList.toggle('active', i === index)
      )
    }

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % dots.length
      showSlide(currentIndex)
    }, 5000)

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index
        showSlide(currentIndex)
        clearInterval(interval)
      })
    })

    showSlide(currentIndex)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Head>
        <title>Starlight Headliner - RB Customs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <section
        className="h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/cm26.jpg')" }}
      >
        <h1 className="text-5xl font-extrabold text-red-600"
            style={{
              textShadow:
                '0 0 10px #000000, 0 0 20px #000000, 0 0 30px #ca1c1c, 0 0 40px #742f2f',
            }}
        >
          Starlight Headliner
        </h1>
      </section>

      <section className="bg-black text-white px-6 py-12 font-sans font-extrabold leading-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h2 className="text-4xl text-red-600 mb-4">Light Up Your Ride</h2>
            <p className="text-lg mb-6">
              Transform your vehicle's interior with our luxurious Starlight Headliner. Whether you want a subtle ambiance or a striking galaxy effect, we provide custom configurations to suit your style.
            </p>

            <h3 className="text-red-500 text-xl">Features:</h3>
            <ul className="list-disc ml-5 mb-4">
              <li>Customizable LED star patterns</li>
              <li>Color-changing and dimmable lights</li>
              <li>High-quality fiber optic strands</li>
              <li>Remote and app control</li>
            </ul>

            <h3 className="text-red-500 text-xl">Benefits:</h3>
            <ul className="list-disc ml-5 mb-4">
              <li>Adds a luxurious and unique ambiance</li>
              <li>Perfect for personalizing your vehicle</li>
              <li>Creates a stunning night-time driving experience</li>
              <li>Durable and long-lasting installation</li>
            </ul>

            <h3 className="text-red-500 text-xl">Pricing:</h3>
            <p>Starting at <strong>$799.99</strong> (depending on vehicle size and customization options).</p>
            <ServicesDropdown />
          </div>

          <div className="flex-1 max-w-xl relative overflow-hidden rounded-lg">
            <div className="carousel-images flex transition-transform duration-500 ease-in-out">
              <img src="/images/cm26.png" alt="1" className="min-w-full h-auto object-cover" />
              <img src="/images/cm27.jpg" alt="2" className="min-w-full h-auto object-cover" />
              <img src="/images/cm28.png" alt="3" className="min-w-full h-auto object-cover" />
            </div>
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
              {[0, 1, 2].map(i => (
                <span key={i} className="dot w-2.5 h-2.5 bg-white rounded-full opacity-70 cursor-pointer" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
