"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight, Shield, Award, ArrowRight, Zap, Mail, Phone } from "lucide-react"
import { Navbar, Footer } from "@/components/layout"
import ServicesSection from "@/components/layout/services-section"

export default function Page() {
  const [heroImageIndex, setHeroImageIndex] = useState(0)
  
  // Hero images for advanced slideshow
  const heroImages = [
    "/BannerImages/doctor-getting-patient-ready-ct-scan (1).jpg",
    "/BannerImages/c-arm.jpg",
    "/BannerImages/doctor.jpg",
    "/BannerImages/boy-lie-down-hospital-ultrasound-diagnostic (1).jpg",
  ]

  // Advanced hero image slideshow with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 10000) // Change image every 10 seconds

    return () => clearInterval(interval)
  }, [heroImages.length])

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

  return (
    <main className="w-full bg-background overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 2xl:pt-40 3xl:pt-48 4xl:pt-56 pb-20 2xl:pb-28 3xl:pb-36 4xl:pb-44 px-4 sm:px-6 lg:px-8 2xl:px-12 3xl:px-16 4xl:px-20 5xl:px-24 6xl:px-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/8 to-transparent pointer-events-none" />

        <div className="max-w-4xl 2xl:max-w-7xl 3xl:max-w-9xl 4xl:max-w-11xl 5xl:max-w-13xl 6xl:max-w-14xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-12 2xl:gap-16 3xl:gap-20 4xl:gap-24 items-center">
            <div className="space-y-8 2xl:space-y-10 3xl:space-y-12 4xl:space-y-16">
              <div className="inline-block animate-fade-in-up delay-100">
                <span className="px-4 py-2 2xl:px-6 2xl:py-3 3xl:px-8 3xl:py-4 4xl:px-10 4xl:py-5 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl font-medium">
                  Next-Generation Medical Imaging
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-bold leading-tight text-balance animate-fade-in-up-wide delay-200">
                Advanced Diagnostic{" "}
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Solutions</span>{" "}
                for Modern Healthcare
              </h1>

              <p className="text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-foreground/70 leading-relaxed max-w-lg 2xl:max-w-2xl 3xl:max-w-3xl 4xl:max-w-4xl animate-fade-in-up-wide delay-300 -mt-2 2xl:-mt-3 3xl:-mt-4 4xl:-mt-5">
                Verification of the Radiation Safety as per AERB Guidelines for the Radiation Equipment installed
              </p>

              {/* Contact Info */}
              <div className="flex flex-col gap-3 2xl:gap-3.5 3xl:gap-4 mt-4 2xl:mt-5 3xl:mt-6 4xl:mt-8 animate-fade-in-up delay-350">
                <a 
                  href="mailto:info@antesobiomedicalopc.com" 
                  className="group flex items-center gap-2 2xl:gap-2.5 text-xs 2xl:text-sm 3xl:text-base text-foreground/70 hover:text-accent transition-all duration-300"
                >
                  <Mail className="w-3 h-3 2xl:w-3.5 2xl:h-3.5 3xl:w-4 3xl:h-4 text-accent transition-transform group-hover:scale-110" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">info@antesobiomedicalopc.com</span>
                </a>
                <a 
                  href="tel:+918470909720" 
                  className="group flex items-center gap-2 2xl:gap-2.5 text-xs 2xl:text-sm 3xl:text-base text-foreground/70 hover:text-accent transition-all duration-300"
                >
                  <Phone className="w-3 h-3 2xl:w-3.5 2xl:h-3.5 3xl:w-4 3xl:h-4 text-accent transition-transform group-hover:scale-110" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">+91 847 090 9720</span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 2xl:gap-6 3xl:gap-8 animate-fade-in-up delay-400">
                <a href="#services" className="px-6 py-2.5 2xl:px-8 2xl:py-3 3xl:px-10 3xl:py-3.5 4xl:px-12 4xl:py-4 rounded-lg bg-gradient-to-r from-accent to-primary text-accent-foreground text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl font-medium hover:shadow-lg hover:shadow-accent/20 transition-all flex items-center justify-center gap-2">
                  Explore Solutions <ArrowRight className="w-4 h-4 2xl:w-5 2xl:h-5 3xl:w-6 3xl:h-6 4xl:w-7 4xl:h-7" />
                </a>
                <Link href="/contact" className="px-6 py-2.5 2xl:px-8 2xl:py-3 3xl:px-10 3xl:py-3.5 4xl:px-12 4xl:py-4 rounded-lg border border-accent/30 text-foreground text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl font-medium hover:bg-accent/5 transition-colors">
                  Learn More
                </Link>
              </div>

              <div className="flex gap-8 2xl:gap-12 3xl:gap-16 4xl:gap-20 pt-4 2xl:pt-6 3xl:pt-8 -mt-4 2xl:-mt-5 3xl:-mt-6 4xl:-mt-7 animate-fade-in-up delay-500">
                {[
                  { label: "500+", desc: "Installations" },
                  { label: "99.9%", desc: "Uptime" },
                  { label: "24/7", desc: "Support" },
                ].map((stat, i) => (
                  <div key={i} className="space-y-1 2xl:space-y-2">
                    <p className="text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-bold text-accent">{stat.label}</p>
                    <p className="text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl text-foreground/60">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image Slideshow with Modern Crossfade & Parallax Zoom */}
            <div className="relative h-[380px] sm:h-[500px] 2xl:h-[600px] 3xl:h-[700px] 4xl:h-[800px] hidden lg:block overflow-hidden rounded-2xl 2xl:rounded-3xl group perspective-1000 mt-4 sm:mt-6 2xl:mt-8 3xl:mt-10 4xl:mt-12">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-2xl 2xl:rounded-3xl z-10 pointer-events-none" />
              
              {heroImages.map((image, index) => {
                const isActive = index === heroImageIndex
                
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-[2000ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isActive 
                        ? "opacity-100 z-20" 
                        : "opacity-0 z-10 pointer-events-none"
                    }`}
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-2xl 2xl:rounded-3xl">
                <img
                        src={image}
                        alt={`Medical imaging equipment ${index + 1}`}
                        className={`w-full h-full object-cover rounded-2xl 2xl:rounded-3xl transition-all duration-[20000ms] ease-linear animate-scale-in delay-300 ${
                          isActive 
                            ? "scale-110 translate-y-[-2%] brightness-100 saturate-100" 
                            : "scale-100 brightness-90 saturate-90"
                        }`}
                        style={{
                          willChange: isActive ? "transform" : "auto",
                          transformOrigin: "center center",
                        }}
                      />
                      {/* Subtle gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 transition-opacity duration-[2000ms] ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`} />
                      {/* Modern blur overlay for depth */}
                      <div className={`absolute inset-0 backdrop-blur-[0.5px] transition-opacity duration-[2000ms] ${
                        isActive ? "opacity-0" : "opacity-100"
                      }`} />
                    </div>
              </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 2xl:py-28 3xl:py-36 4xl:py-44 px-4 sm:px-6 lg:px-8 2xl:px-12 3xl:px-16 4xl:px-20 5xl:px-24 6xl:px-32 border-t border-border">
        <div className="max-w-4xl 2xl:max-w-7xl 3xl:max-w-9xl 4xl:max-w-11xl 5xl:max-w-13xl 6xl:max-w-14xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 2xl:gap-16 3xl:gap-20 4xl:gap-24 items-center mb-16 2xl:mb-20 3xl:mb-24 4xl:mb-28">
            <div className="animate-on-scroll">
              <h2 className="text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-bold mb-6 2xl:mb-8 3xl:mb-10 4xl:mb-12 animate-fade-in-up-wide delay-100">Quality Assurance Excellence</h2>
              
              <div className="space-y-6 2xl:space-y-8 3xl:space-y-10 4xl:space-y-12">
                <p className="text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl text-foreground/80 leading-relaxed animate-fade-in-up-wide delay-200">
                  It is a set of performance tests performed on a particular X Ray Diagnostic Equipments that verify whether the applied factors ( kV, Time, Dose, Output Consistency, Leakage Radiation etc.) are within tolerance limit specified by AERB.
                </p>

                <div className="space-y-4 2xl:space-y-6 3xl:space-y-8">
                  {[
                    "It takes of the Image Quality, Radiation Safety & Life span of the Radiation Equipment.",
                    "Improve efficiency of Radiation Output deliver by equipment, therefore reduce Absorbed body Dose.",
                    "It also required by other Regulatory & bench making councils/Organisation such as AERB, NABH, State Govt. etc.",
                    "Radiation Survay / Radiation Leakage Test verify the safety of the operator, patients & general public.",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 2xl:gap-6 3xl:gap-8 items-start animate-fade-in-up" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                      <div className="w-6 h-6 2xl:w-8 2xl:h-8 3xl:w-10 3xl:h-10 4xl:w-12 4xl:h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0 mt-1">
                        <ChevronRight className="w-4 h-4 2xl:w-5 2xl:h-5 3xl:w-6 3xl:h-6 4xl:w-7 4xl:h-7 text-accent-foreground" />
                      </div>
                      <p className="text-foreground/80 text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative h-96 2xl:h-[500px] 3xl:h-[600px] 4xl:h-[700px] rounded-2xl 2xl:rounded-3xl overflow-hidden animate-on-scroll">
              <div className="animate-scale-in delay-300">
                <img
                  src="/quality-assurance-testing-diagnostic-equipment-lab.jpg"
                  alt="Quality assurance testing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Features Section */}
      <section className="py-20 2xl:py-28 3xl:py-36 4xl:py-44 px-4 sm:px-6 lg:px-8 2xl:px-12 3xl:px-16 4xl:px-20 5xl:px-24 6xl:px-32">
        <div className="max-w-4xl 2xl:max-w-[80rem] 3xl:max-w-[100rem] 4xl:max-w-[128rem] 5xl:max-w-[176rem] 6xl:max-w-[208rem] mx-auto">
          <h2 className="text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-bold mb-16 2xl:mb-20 3xl:mb-24 4xl:mb-28 text-center animate-on-scroll animate-fade-in-up-wide delay-100">Why Choose ANTESO</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 2xl:gap-10 3xl:gap-12 4xl:gap-16">
            {[
              {
                icon: <Shield className="w-8 h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 4xl:w-14 4xl:h-14 text-accent" />,
                title: "Safety First",
                desc: "Radiation safety protocols and comprehensive risk management ensure patient and operator protection.",
              },
              {
                icon: <Award className="w-8 h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 4xl:w-14 4xl:h-14 text-accent" />,
                title: "Certified Excellence",
                desc: "AERB accredited quality assurance and international standards compliance across all services.",
              },
              {
                icon: <Zap className="w-8 h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 4xl:w-14 4xl:h-14 text-accent" />,
                title: "Advanced Technology",
                desc: "Cutting-edge diagnostic equipment delivering precision results with minimal radiation exposure.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 2xl:p-10 3xl:p-12 4xl:p-16 rounded-xl 2xl:rounded-2xl border border-border/50 bg-gradient-to-br from-white to-muted/40 hover:shadow-lg transition-all animate-on-scroll animate-fade-in-up-wide"
                style={{ animationDelay: `${0.2 + i * 0.15}s` }}
              >
                <div className="mb-4 2xl:mb-6 3xl:mb-8 p-3 2xl:p-4 3xl:p-5 w-fit rounded-lg bg-accent/10 border border-accent/20">{feature.icon}</div>
                <h3 className="text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl font-semibold mb-3 2xl:mb-4 3xl:mb-5">{feature.title}</h3>
                <p className="text-foreground/70 text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 2xl:py-28 3xl:py-36 4xl:py-44 px-4 sm:px-6 lg:px-8 2xl:px-12 3xl:px-16 4xl:px-20 5xl:px-24 6xl:px-32">
        <div className="max-w-2xl 2xl:max-w-8xl 3xl:max-w-9xl 4xl:max-w-10xl 5xl:max-w-11xl 6xl:max-w-13xl mx-auto animate-on-scroll">
          <div className="relative rounded-2xl 2xl:rounded-3xl overflow-hidden animate-scale-in delay-200">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/12 to-primary/12" />
            <div className="absolute inset-0 border border-accent/20 rounded-2xl 2xl:rounded-3xl" />
            <div className="relative p-12 md:p-16 2xl:p-20 3xl:p-24 4xl:p-28 text-center">
              <h2 className="text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-bold mb-4 2xl:mb-6 3xl:mb-8 animate-fade-in-up delay-300">Ready to Transform Your Diagnostic Services?</h2>
              <p className="text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl text-foreground/80 mb-8 2xl:mb-10 3xl:mb-12 4xl:mb-16 animate-fade-in-up delay-400">
                Connect with our team to explore how ANTESO solutions can enhance your medical institution's
                capabilities.
              </p>
              <Link href="/contact" className="inline-block px-8 py-3 2xl:px-10 2xl:py-4 3xl:px-12 3xl:py-5 4xl:px-16 4xl:py-6 rounded-lg bg-gradient-to-r from-accent to-primary text-accent-foreground 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-medium hover:shadow-lg hover:shadow-accent/20 transition-all animate-fade-in-up delay-500">
                Get in Touch Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
