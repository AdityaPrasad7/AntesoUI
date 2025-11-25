"use client"

import { useState, useEffect, useRef } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/layout/carousel"

export default function ServicesSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated")
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  // Carousel autoplay with pause on hover
  useEffect(() => {
    if (!api) return

    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        if (api.canScrollNext()) {
          api.scrollNext()
        } else {
          api.scrollTo(0)
        }
      }, 4000)
    }

    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
        autoplayRef.current = null
      }
    }

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", handleSelect)
    handleSelect()
    startAutoplay()

    const carouselElement = document.querySelector('[data-slot="carousel"]')
    if (carouselElement) {
      carouselElement.addEventListener("mouseenter", stopAutoplay)
      carouselElement.addEventListener("mouseleave", startAutoplay)
    }

    return () => {
      stopAutoplay()
      api.off("select", handleSelect)
      if (carouselElement) {
        carouselElement.removeEventListener("mouseenter", stopAutoplay)
        carouselElement.removeEventListener("mouseleave", startAutoplay)
      }
    }
  }, [api])

  const services = [
    {
      image: "/machines/th3_5.jpg",
      title: "CT Scan",
      desc: "Stationary diagnostic imaging systems for clinical excellence",
    },
    {
      image: "/machines/th3_6.jpg",
      title: "Cath Lab",
      desc: "Portable imaging solutions for flexible healthcare delivery",
    },
    {
      image: "/machines/th3_7.jpg",
      title: "C Arm",
      desc: "Specialized breast imaging with advanced detection technology",
    },
    {
      image: "/machines/th3_1.jpg",
      title: "Fixed X Ray",
      desc: "Cone Beam CT for precise 3D diagnostic imaging",
    },
    {
      image: "/machines/th3_2.jpg",
      title: "Mobile X Ray",
      desc: "Advanced computed tomography for comprehensive diagnostic imaging",
    },
    {
      image: "/machines/th3_3.jpg",
      title: "Mammogram",
      desc: "Cardiac catheterization laboratory with advanced imaging capabilities",
    },
    {
      image: "/machines/th3_4.jpg",
      title: "CBCT Machine",
      desc: "Mobile C-arm fluoroscopy for real-time imaging during procedures",
    },
  ]

  return (
    <section className="py-20 2xl:py-28 3xl:py-36 4xl:py-44 px-4 sm:px-6 lg:px-8 2xl:px-12 3xl:px-16 4xl:px-20 5xl:px-24 6xl:px-32 bg-gradient-to-b from-muted/30 to-background w-full">
      <div className="max-w-4xl 2xl:max-w-[80rem] 3xl:max-w-[100rem] 4xl:max-w-[128rem] 5xl:max-w-[176rem] 6xl:max-w-[208rem] mx-auto">
        <div className="text-center mb-16 2xl:mb-20 3xl:mb-24 4xl:mb-28 animate-on-scroll">
          <h2 className="text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-bold mb-4 2xl:mb-6 3xl:mb-8 animate-fade-in-up-wide delay-100">Our Services</h2>
          <p className="text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl text-foreground/70 max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl 4xl:max-w-5xl mx-auto animate-fade-in-up-wide delay-200">
            Comprehensive diagnostic imaging solutions and quality assurance services
          </p>
        </div>

        <div className="relative animate-on-scroll">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, i) => (
                <CarouselItem key={i} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="group relative overflow-hidden rounded-xl 2xl:rounded-2xl border border-border hover:border-accent/50 bg-card hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 cursor-pointer h-full animate-fade-in-up" style={{ animationDelay: `${0.1 + i * 0.05}s` }}>
                    <div className="relative w-full h-48 2xl:h-56 3xl:h-64 4xl:h-72 overflow-hidden bg-gradient-to-br from-muted/20 to-muted/40">
                      <img
                        src={service.image}
                        alt={service.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        style={{ display: 'block', opacity: 1 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="p-4 2xl:p-6 3xl:p-8 4xl:p-10">
                      <h3 className="text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-semibold mb-2 2xl:mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-xs 2xl:text-sm 3xl:text-base 4xl:text-lg text-foreground/70 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 2xl:-left-16 3xl:-left-20 h-12 w-12 2xl:h-14 2xl:w-14 3xl:h-16 3xl:w-16 bg-background/80 backdrop-blur-sm border-2 border-border hover:border-accent hover:bg-background text-foreground hover:text-accent shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 [&_svg]:text-foreground [&_svg]:hover:text-accent" />
            <CarouselNext className="hidden md:flex -right-12 2xl:-right-16 3xl:-right-20 h-12 w-12 2xl:h-14 2xl:w-14 3xl:h-16 3xl:w-16 bg-background/80 backdrop-blur-sm border-2 border-border hover:border-accent hover:bg-background text-foreground hover:text-accent shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 [&_svg]:text-foreground [&_svg]:hover:text-accent" />
          </Carousel>
          
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-accent w-8 scale-110"
                    : "bg-border hover:bg-accent/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

