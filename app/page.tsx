"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, X, ArrowRight, Camera, Film, User, Sparkles } from "lucide-react"

export default function YourStudioInspired() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    
    // Simulate loading
    setTimeout(() => setIsLoading(false), 2000)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const portfolioItems = [
    {
      type: "image",
      src: "https://plus.unsplash.com/premium_photo-1682090795093-9b9434a455ec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Eternal Vows",
      category: "Wedding",
      description: "A celebration of love's eternal promise"
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1677176455554-03ae366d51d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Love in Motion",
      category: "Film",
      description: "Cinematic storytelling at its finest"
    },
    {
      type: "image",
      src: "https://plus.unsplash.com/premium_photo-1732893651179-f83717e5b560?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Golden Hour",
      category: "Portrait",
      description: "Capturing the magic of natural light"
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1743685334937-fff33b849384?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Intimate Moments",
      category: "Engagement",
      description: "The beginning of forever"
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1711506119180-e08899c7cdb1?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sacred Union",
      category: "Wedding Film",
      description: "Where two hearts become one"
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1616583936499-d4116e7e2e76?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Pure Elegance",
      category: "Fashion",
      description: "Timeless beauty captured"
    },
  ]

  const services = [
    {
      title: "Weddings",
      description: "Timeless documentation of your most sacred day",
      icon: <Sparkles className="h-5 w-5" />,
      features: ["Full day coverage", "Engagement sessions", "Wedding albums"]
    },
    {
      title: "Portraits",
      description: "Intimate captures that reveal authentic beauty",
      icon: <User className="h-5 w-5" />,
      features: ["Individual sessions", "Family portraits", "Professional headshots"]
    },
    {
      title: "Films",
      description: "Cinematic narratives that move the soul",
      icon: <Film className="h-5 w-5" />,
      features: ["Wedding films", "Commercial work", "Documentary style"]
    },
    {
      title: "Editorial",
      description: "Fashion and lifestyle with artistic vision",
      icon: <Camera className="h-5 w-5" />,
      features: ["Fashion editorials", "Lifestyle shoots", "Brand campaigns"]
    },
  ]

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="mb-8 relative">
            <div className="w-16 h-16 border-2 border-white/20 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-16 h-16 border-t-2 border-white rounded-full animate-spin"></div>
          </div>
          <h1 className="text-2xl font-light tracking-[0.3em] text-white animate-pulse">Your</h1>
          <p className="text-sm font-light tracking-wider text-white/60 mt-2">LOADING EXPERIENCE</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Floating cursor effect */}
      <div 
        className="fixed pointer-events-none z-50 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-sm transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: 'translate3d(0, 0, 0)'
        }}
      />

      <nav className={`fixed inset-x-0 z-40 transition-all duration-1000 ${isScrolled ? "bg-gray-900 backdrop-blur-xl py-4 shadow-lg border-b border-black/5" : "bg-transparent py-8"}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <Link href="/" className="text-xl font-light tracking-[0.4em] hover:opacity-60 transition-opacity duration-500 text-white">
            Your
          </Link>
          <div className="hidden md:flex space-x-16 text-sm font-light tracking-[0.2em] text-white">
            <Link href="#work" className="hover:opacity-60 transition-all duration-500 relative group">
              WORK
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link href="#about" className="hover:opacity-60 transition-all duration-500 relative group">
              ABOUT
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link href="#contact" className="hover:opacity-60 transition-all duration-500 relative group">
              CONTACT
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </nav>

      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>
        <Image
          src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="hero"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="relative z-10 text-center text-white px-8">
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-thin tracking-[0.3em] mb-4 leading-none">
              Your
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>
            <p className="text-base md:text-lg font-light tracking-[0.4em] opacity-90 animate-fade-in-up-delay">
              VISUAL STORYTELLING
            </p>
          </div>
          <div className="animate-bounce-slow mt-16">
            <div className="w-6 h-10 border-2 border-white/60 rounded-full mx-auto relative">
              <div className="w-1 h-2 bg-white/60 rounded-full mx-auto mt-2 animate-scroll-indicator"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-gradient-to-b from-white to-gray-50/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-thin mb-8 tracking-wide bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              We capture the essence of your story
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-12"></div>
            <p className="text-xl font-light leading-relaxed opacity-70 max-w-3xl mx-auto">
              Through the lens of artistry and emotion, we create timeless visual narratives that transcend the ordinary, 
              preserving moments that become treasured memories for generations.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="py-32 bg-gradient-to-b from-gray-50/30 to-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-thin mb-6 tracking-wide">Our Portfolio</h2>
            <p className="text-lg font-light opacity-60">A curated collection of our finest work</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, i) => (
              <div
                key={i}
                className="relative aspect-[4/5] group cursor-pointer overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700"
                onClick={() => setSelectedMedia(item.src)}
                style={{
                  animationDelay: `${i * 100}ms`
                }}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                  </div>
                )}
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-light tracking-wider opacity-80 uppercase">{item.category}</span>
                    <ArrowRight className="h-4 w-4 opacity-60" />
                  </div>
                  <h3 className="text-xl font-light mb-1">{item.title}</h3>
                  <p className="text-sm font-light opacity-75">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-thin mb-16 tracking-wide">Our Craft</h2>
              <div className="space-y-10">
                {services.map((service, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="flex items-start space-x-6 p-8 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:shadow-xl transition-all duration-700 border border-gray-100/50">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-light mb-3 group-hover:text-gray-600 transition-colors duration-300">{service.title}</h3>
                        <p className="text-base font-light opacity-70 mb-4 leading-relaxed">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, j) => (
                            <span key={j} className="text-xs font-light px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl blur-3xl transform rotate-6"></div>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1674106495780-4c886da63192?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Professional photography equipment and workspace"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 bg-gradient-to-b from-gray-50/50 to-gray-100/30">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-thin mb-16 tracking-wide">Philosophy</h2>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-xl border border-gray-100/50">
              <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-12 text-gray-800 italic">
                &quot;Every frame should whisper poetry, every moment should breathe life, and every story should echo through time.&quot;
              </blockquote>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8"></div>
              <p className="text-lg font-light opacity-70 max-w-3xl mx-auto leading-relaxed">
                We believe in the power of authentic moments and the beauty found in genuine emotion. Our approach is rooted in patience, 
                artistry, and an unwavering commitment to excellence that transforms fleeting moments into eternal memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto px-8 text-center relative">
          <h2 className="text-5xl md:text-6xl font-thin mb-8 tracking-wide">Let&apos;s Create</h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-12"></div>
          <p className="text-xl font-light mb-16 opacity-80">Ready to tell your story?</p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-16">
            <a href="mailto:hello@Your.studio" className="group flex items-center space-x-3 text-lg font-light tracking-wider hover:opacity-70 transition-all duration-500 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20 hover:bg-white/20">
              <span>HELLO@Your.STUDIO</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a href="tel:+1234567890" className="text-lg font-light tracking-wider hover:opacity-70 transition-all duration-500 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20 hover:bg-white/20">
              +1 (234) 567-890
            </a>
          </div>
        </div>
      </section>

      <footer className="py-16 bg-black text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="text-sm font-light tracking-wider opacity-60 mb-2">© 2025 Your STUDIO</div>
              <div className="text-xs font-light tracking-wider opacity-40">ALL RIGHTS RESERVED | Made by Anuj</div>
            </div>
            <div className="flex space-x-12 text-sm font-light tracking-wider">
              <a href="#" className="hover:opacity-60 transition-all duration-500 relative group">
                INSTAGRAM
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full"></span>
              </a>
              <a href="#" className="hover:opacity-60 transition-all duration-500 relative group">
                VIMEO
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {selectedMedia && (
        <div className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-8 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl aspect-video animate-fade-in-up">
            <button 
              onClick={() => setSelectedMedia(null)} 
              className="absolute -top-16 right-0 text-white hover:opacity-60 transition-all duration-300 bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image src={selectedMedia} alt="Portfolio item" fill className="object-contain" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}